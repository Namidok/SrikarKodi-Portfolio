from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
import json
from datetime import datetime
from groq import Groq
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env"))

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

VISITORS_FILE = "visitors.json"

def load_visitors():
    if not os.path.exists(VISITORS_FILE):
        return []
    with open(VISITORS_FILE, "r") as f:
        return json.load(f)

def save_visitor(visitor):
    visitors = load_visitors()
    visitors.append(visitor)
    with open(VISITORS_FILE, "w") as f:
        json.dump(visitors, f, indent=2)

CV_CONTEXT = """
SRIKAR KODI - Full Profile

Personal:
- Name: Srikar Kodi
- Location: Berlin, Germany
- Email: kodisrikar@gmail.com
- Phone: +49-1634218928
- GitHub: github.com/Namidok
- LinkedIn: linkedin.com/in/srikar-kodi-046a631b2/

Education:
- MSc Computer Science (Big Data and Artificial Intelligence) at SRH University of Applied Sciences, Berlin. Started October 2025.
- Bachelor in Electronics and Communication, MVGR College of Engineering, 2016-2020, Hyderabad India.

Experience:
1. Application Developer at Vavili Technologies (05/2023 - 08/2025, Hyderabad)
   - Reduced page load time by 40% rebuilding 12 microservices for templeswiki.com
   - Increased user engagement by 35% with an NLP chatbot reducing support queries by 50%
   - Accelerated content translation by 60% with a Python ETL pipeline for 5 languages
   - Improved release quality by 45% leading a 4-person QA team with 300+ test cases

2. Trainee Software Engineer at ValueLabs (01/2022 - 02/2023, Hyderabad)
   - Improved application performance by 25% resolving 60+ bugs across 3 modules
   - Increased test coverage by 30% with 150+ manual test cases

Skills:
- Languages: Python, JavaScript, HTML, CSS, SQL, Node.js
- AI/ML: NLP, PyTorch, LangChain, RAG, Embeddings, NumPy, Pandas, PySpark
- Frameworks: Flask, Django, React JS, FastAPI
- Cloud: AWS (EC2, S3, Lambda, Glue, Redshift), Docker, Nginx
- Databases: PostgreSQL, ChromaDB
- Spoken: English (Fluent), German (A2, learning B2)

Current Projects:
1. SkillSync - AI job tracker, FastAPI + React + AWS EC2. Live now.
2. CoverCraft - RAG cover letter generator, LangChain + ChromaDB + AWS. In progress.
3. GermanBot - AI German language chatbot, LangChain + Docker + AWS ECR. Coming soon.
4. InterviewCoach - AI interview prep coach, LangChain + ECS Fargate + CI/CD. Coming soon.
"""

SYSTEM_PROMPT = f"""You are Srikar Kodi's personal AI assistant on his portfolio website. You answer questions from recruiters and hiring managers about Srikar.

Here is Srikar's complete profile:
{CV_CONTEXT}

Instructions:
- Answer in the same language the user writes in
- Be confident, professional, and conversational
- Keep answers concise - 2-4 sentences unless more detail is asked for
- If asked something not in the profile, suggest emailing kodisrikar@gmail.com
- Never make up information
- You are Srikar's AI assistant, not Srikar himself"""

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@app.post("/chat")
async def chat(request: ChatRequest):
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            *[{"role": m.role, "content": m.content} for m in request.messages]
        ],
        max_tokens=500,
        temperature=0.7,
    )
    return {"reply": response.choices[0].message.content}

@app.post("/track")
async def track_visitor(request: Request):
    ip = request.headers.get("x-forwarded-for", request.client.host)
    user_agent = request.headers.get("user-agent", "unknown")
    referer = request.headers.get("referer", "direct")
    body = await request.json()

    visitor = {
        "timestamp": datetime.now().isoformat(),
        "ip": ip,
        "user_agent": user_agent,
        "referer": referer,
        "page": body.get("page", "/"),
        "language": body.get("language", "en"),
        "screen": body.get("screen", "unknown"),
    }

    save_visitor(visitor)
    return {"status": "tracked"}

@app.get("/analytics")
async def get_analytics(key: str = ""):
    if key != os.getenv("ANALYTICS_KEY", "srikar2026"):
        return {"error": "unauthorized"}

    visitors = load_visitors()
    total = len(visitors)

    # Unique IPs
    unique_ips = len(set(v.get("ip", "") for v in visitors))

    # By page
    pages = {}
    for v in visitors:
        p = v.get("page", "/")
        pages[p] = pages.get(p, 0) + 1

    # By day
    daily = {}
    for v in visitors:
        day = v.get("timestamp", "")[:10]
        daily[day] = daily.get(day, 0) + 1

    # By language
    langs = {}
    for v in visitors:
        l = v.get("language", "en")
        langs[l] = langs.get(l, 0) + 1

    # Recent visitors (last 20)
    recent = sorted(visitors, key=lambda x: x.get("timestamp", ""), reverse=True)[:20]

    return {
        "total_visits": total,
        "unique_visitors": unique_ips,
        "by_page": pages,
        "by_day": daily,
        "by_language": langs,
        "recent": recent,
    }

@app.get("/health")
async def health():
    return {"status": "ok"}
