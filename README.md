# 🧠 InterviewMentor

An AI-powered interview preparation platform that analyzes user resumes, generates tailored interview questions, conducts mock interviews (speech-based), and evaluates performance with confidence scoring and feedback.

---

## 🔧 Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Architecture & Tech Stack](#architecture--tech-stack)  
4. [Getting Started](#getting-started)  
5. [Project Structure](#project-structure)  
6. [Usage](#usage)  
7. [How It Works](#how-it-works)  
8. [Contributing](#contributing)  
9. [License](#license)

---

## 📌 Overview

**InterviewMentor** helps users prepare for job interviews by:

- Parsing resumes to extract relevant topics and keywords
- Generating domain-specific interview questions
- Conducting spoken mock interviews using webcam and mic
- Evaluating responses based on correctness and confidence (speech + video)
- Providing performance feedback and tracking improvements

---

## 🚀 Features

- 📝 Resume Parsing and Topic Extraction  
- 🤖 AI-based Question Generation (OpenAI GPT)  
- 🎙️ Mock Interviews with Real-time Audio/Video Capture  
- 🧠 Confidence Scoring (Speech + Facial Cues)  
- 📊 Performance Reports and Analytics  
- 🔐 Secure User Auth and Resume Storage  

---

## ⚙️ Architecture & Tech Stack


| Frontend         | Backend      | AI / Cloud Services            | Database              |
|------------------|--------------|--------------------------------|------------------------|
| Vite with React  | Express.js   | OpenAI (question generation)   | Supabase (PostgreSQL) |
| Tailwind         | REST API     | Whisper (speech-to-text)       | Supabase Auth         |
| OpenCV [Video]   | Inferences   | MediaPipe (face detection)     |                        |


---

## 🛠️ Getting Started

### 📦 Prerequisites

- Node.js ≥ 18  
- Supabase Project (with service role key)  
- HuggingFace API Key  
- (Optional) Webcam and Mic  

### 🔧 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Aditi-T27/InterviewMentor-TemplateRepo.git
cd InterviewMentor-TemplateRepo

# Install dependencies
cd frontend
npm install
cd ../backend
npm install
```

### 🔐 Environment Variables

Create `.env` in both `backend/` and `frontend/` folders:

```env
# backend/.env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
API_KEY=api-key

# frontend/.env
REACT_APP_API_URL=http://localhost:4000
```

---

## 📁 Project Structure

```
InterviewMentor/
├── frontend/
│   └── src/
│       ├── components/         # Reusable UI components
│       ├── pages/              # Dashboard, Resume Upload, Interview, Results
│       └── App.js              # Main Router
├── backend/
│   ├── routes/                 # Express routes (auth, resume, keywords, score)
│   ├── services/               # Supabase and AI logic
│   └── index.js                # Server entry point
├── README.md
```

---

## 🧪 Usage

### 1. Upload Resume

- Users upload a `.pdf` or `.docx` resume.
- Backend parses resume and extracts relevant topics.

### 2. Question Generation

- Inferenced LLM generates customized interview questions.
- Questions are stored in the Supabase DB.

### 3. Mock Interview

- User joins live interview simulation.
- Audio (Whisper) and video (MediaPipe) are analyzed.

### 4. Scoring

- Evaluates answers based on keyword match and confidence score.
- Scores are logged and visualized on the dashboard.

---

## ⚙️ How It Works

| Component            | Description |
|----------------------|-------------|
| **Resume Parser**    | Extracts keywords and domains from uploaded resumes. |
| **Question Engine**  | Uses LLM-based prompts to create questions. |
| **Interview Module** | Frontend component handles video/audio capture. |
| **Evaluation Engine**| Uses Whisper for transcription and MediaPipe for confidence. |
| **Feedback**         | Combines answer accuracy + confidence score to generate insights. |

---

## 🤝 Contributing

We welcome contributions of all kinds! To contribute:

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Create a Pull Request  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Hugging Face](https://huggingface.co/) for LLM and Whisper APIs[OpenAI]  
- [Supabase](https://supabase.com/) for backend and authentication  
- [MediaPipe](https://mediapipe.dev/) for facial expression tracking  
- [React-Bootstrap](https://react-bootstrap.github.io/) for UI components  

---

> ✨ InterviewMentor – Level up your interviews with AI ✨
