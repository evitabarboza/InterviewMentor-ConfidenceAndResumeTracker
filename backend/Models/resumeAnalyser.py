from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import io
import tempfile
import pdfplumber
import docx
from docx import Document
from huggingface_hub import InferenceClient
from supabase import create_client, Client
import re
from dotenv import load_dotenv
from pathlib import Path

# Load .env from parent directory
env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=env_path)

# Initialize Supabase client (replace with your actual URL and Key)
# Get Supabase credentials from env
SUPABASE_URL = os.getenv("VITE_SUPABASE_URL")
SUPABASE_API_KEY = os.getenv("VITE_SUPABASE_ANON_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_API_KEY)

def extract_score(lines):
    for line in lines:
        match = re.search(r"[Ss]core\s*:\s*(\d+)", line)
        if match:
            return int(match.group(1))
    return 0  # default fallback

# Set up your Hugging Face access token
HF_TOKEN = "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"
MODEL_NAME = "mistralai/Mistral-7B-Instruct-v0.3"

# Set up inference client using the access token
client = InferenceClient(model=MODEL_NAME, token=HF_TOKEN)

app = Flask(__name__)
CORS(app)

# Extract text from uploaded PDF or DOCX resume
def extract_text(file):
    filename = file.filename.lower()
    if filename.endswith(".pdf"):
        with pdfplumber.open(io.BytesIO(file.read())) as pdf:
            return "\n".join(page.extract_text() or "" for page in pdf.pages)
    elif filename.endswith(".docx"):
        doc = Document(io.BytesIO(file.read()))
        return "\n".join([para.text for para in doc.paragraphs])
    else:
        return ""

# Unified analysis using a single LLM prompt
def full_resume_analysis(text):
    prompt = f"""
You are an expert resume analyst and technical interviewer.

Given the following resume text, perform all of the following:
1. Assign a score out of 100 based on quality, relevance, and presentation.
2. Provide exactly 3 positive highlights from the resume.
3. Suggest exactly 3 areas for improvement.
4. Extract a concise list of technical keywords or technologies/tools that the candidate knows (e.g., Python, React, AWS, Docker, etc.) based on the resume content. Only output relevant skills/tools.

Resume:
{text}

Respond in this format strictly:

Score: <number>

Positives:
- ...
- ...
- ...

Negatives:
- ...
- ...
- ...

Tech Stack:
- ...
- ...
- ...
    """

    response = client.text_generation(prompt=prompt, max_new_tokens=500, temperature=0.7)
    response = response.lower()
    print(response)
    # Basic parsing logic

    lines = response.strip().split("\n")
    score_line = next((line for line in lines if line.startswith("score:")), "Score: 0")
    # score = int(score_line.replace("Score:", "").strip())
    score = extract_score(lines)

    def extract_section(header, lines):
        section = []
        capture = False
        header = header.lower().rstrip(":")  # Normalize the target header

        for line in lines:
            stripped_line = line.strip()
            lower_line = stripped_line.lower()

            if lower_line.startswith(header + ":"):
                capture = True
                continue
            if capture:
                if stripped_line.startswith("-"):
                    section.append(stripped_line[1:].strip())  # Safely extract after dash
                elif stripped_line == "":
                    break
                elif not stripped_line.lower().startswith(("score:", "positives:", "negatives:", "tech stack:")):
                    section.append(stripped_line)
                else:
                    break  # stop if another section starts
        return section


    positives = extract_section("positives:", lines)
    negatives = extract_section("negatives:", lines)
    tech_stack = extract_section("tech stack:", lines)

    return score, positives[:3], negatives[:3], tech_stack

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files["resume"]
    resume_text = extract_text(file)
    
    print("resume",resume_text)
    
    score, positives, negatives, keywords = full_resume_analysis(resume_text)

    # Store result in Supabase
    def upsert_keywords(user_id, keywords, confidence):
        for keyword in keywords:
            data = {
                "user_id": user_id,
                "keyword": keyword.strip(),
                "confidence": confidence
            }
            response = supabase.table("user_keywords").upsert(data).execute()
            print(f"Upserted: {data}")

    # Upsert the record
    # supabase.table("user_keywords").upsert(data).execute()
    upsert_keywords("2", keywords, 0)

    return jsonify({
        "score": score,
        "positives": positives,
        "negatives": negatives,
        "keywords": keywords
    })

if __name__ == "__main__":
    app.run(debug=True)
