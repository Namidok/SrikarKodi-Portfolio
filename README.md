# Srikar Kodi — Portfolio

Personal portfolio website with an AI-powered chatbot assistant.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS, Framer Motion |
| Chatbot Backend | Python, FastAPI, Groq API, Llama 3.3 |
| Deployment | AWS EC2, Nginx |

## Features

- CRED-inspired dark UI with gold accents
- Typewriter hero animation
- Experience and education timeline
- Projects showcase with live/building/upcoming status
- Skills grouped by category
- AI chatbot powered by Groq + Llama 3.3 — answers recruiter questions about Srikar
- Contact form

## Running Locally

### Frontend
```bash
npm install
npm run dev
```

### Chatbot Backend
```bash
cd backend
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
./venv/bin/uvicorn main:app --host 0.0.0.0 --port 8001
```

Create a `.env` file in the backend folder:
```
GROQ_API_KEY=your_groq_api_key
```

## Live

Portfolio: Coming soon
SkillSync: http://3.89.197.204

---

*Built by Srikar Kodi · MSc AI/ML · Berlin · 2026*
