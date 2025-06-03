import torch
from transformers import BertTokenizer, BertModel
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Load BERT tokenizer and model from Hugging Face
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

# Ensure model is in eval mode
model.eval()

def extract_keywords_from_resume(resume_text, top_k=15):
    sentences = sent_tokenize(resume_text)
    keywords = set()

    for sent in sentences:
        # Tokenize and get embeddings
        words = word_tokenize(sent)
        inputs = tokenizer(words, return_tensors="pt", is_split_into_words=True, padding=True, truncation=True)
        with torch.no_grad():
            outputs = model(**inputs)
        
        # Get the embeddings of each token
        token_embeddings = outputs.last_hidden_state.squeeze(0)  # shape: [seq_len, hidden_dim]
        word_embeddings = token_embeddings[1:-1]  # Remove [CLS] and [SEP]

        # Mean pooling for sentence vector
        sentence_embedding = torch.mean(word_embeddings, dim=0).unsqueeze(0)

        # Calculate similarity of each word to the sentence vector
        similarities = []
        for i, token_vector in enumerate(word_embeddings):
            sim = cosine_similarity(sentence_embedding, token_vector.unsqueeze(0))[0][0]
            similarities.append((words[i], sim))

        # Sort and get top-k similar words
        similarities = sorted(similarities, key=lambda x: x[1], reverse=True)
        top_words = [word for word, score in similarities[:top_k]]
        keywords.update(top_words)

    return list(keywords)

# Example usage
resume_text = """
Experienced Software Engineer with a strong background in Python, JavaScript, and machine learning. 
Worked on multiple AI projects involving natural language processing, recommendation systems, and computer vision.
Proficient in TensorFlow, PyTorch, and cloud platforms like AWS and GCP.
"""

keywords = extract_keywords_from_resume(resume_text)
print("📌 Extracted Keywords:")
print(keywords)
