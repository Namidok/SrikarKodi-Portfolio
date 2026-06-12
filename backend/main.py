from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Portfolio Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

CV_CONTEXT = """
SRIKAR KODI — Full Profile

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
   - Full Stack Developer on templeswiki.com, built multiple pages and microservices
   - Built an NLP chatbot integrated into the application for user engagement
   - Built a robust ETL pipeline using Python for multi-language label generation
   - Led the QA team, crafted test plans, built in-house attendance recording tool

2. Trainee Software Engineer at ValueLabs (01/2022 - 02/2023, Hyderabad)
   - Enhanced software modules, bug fixing and performance optimisation
   - Manual testing and detailed test plan development

Skills:
- Languages: Python, JavaScript, HTML, CSS, SQL, Node.js
- AI/ML: NLP, PyTorch, LangChain, RAG, Embeddings, NumPy, Pandas, Matplotlib, Seaborn, PySpark
- Frameworks: Flask, Django, React JS, FastAPI
- Cloud: AWS (EC2, S3, Lambda, Glue, Redshift), Docker, Nginx, GitHub Actions
- Databases: PostgreSQL, ChromaDB, Redis
- Spoken Languages: English (Fluent), German A2 (Currently learning B2)

Current Projects (8-week AI/ML sprint):
1. SkillSync - AI-powered job application tracker
   - Stack: Python, FastAPI, React, Tailwind CSS, NLP, AWS EC2, Nginx
   - Features: NLP skill extraction from JDs, pipeline analytics, Gmail reminders, session isolation
   - Status: Live at http://3.89.197.204
   - GitHub: github.com/Namidok/SkillSync

2. CoverCraft - RAG-powered cover letter generator
   - Stack: LangChain, ChromaDB, FastAPI, AWS EC2, S3, Nginx
   - Features: Feeds 50 real German JDs into ChromaDB, generates tailored cover letters
   - Status: In progress (Week 4)

3. GermanBot - AI language learning chatbot
   - Stack: LangChain, Docker, AWS ECR, EC2
   - Features: German practice at A2/B1, grammar correction, vocabulary tracking
   - Status: Coming Week 5

4. InterviewCoach - AI interview preparation coach
   - Stack: LangChain, FastAPI, AWS ECS Fargate, RDS, GitHub Actions CI/CD
   - Features: JD-specific questions, LLM scoring, mock interview mode
   - Status: Coming Week 6

Job Search:
- Looking for AI/ML Engineer internship or thesis role
- Available from October 2026
- Target locations: Berlin and Munich, Germany
- Target companies include: Celonis, HelloFresh, SAP, N26, Zalando, DeepL, BMW, Bosch, Databricks and 40+ more
"""

SYSTEM_PROMPT = f"""You are an AI assistant on Srikar Kodi's portfolio website. You help recruiters and hiring managers learn about Srikar.

Here is Srikar's complete profile:
{CV_CONTEXT}

Instructions:
- Answer questions about Srikar's skills, experience, projects, education, and availability
- Be confident, professional, and conversational
- Keep answers concise — 2-4 sentences unless more detail is asked for
- If asked something not in the profile, say you do not have that information and suggest emailing kodisrikar@gmail.com
- Never make up information not in the profile above
- You are Srikar's AI assistant, not Srikar himself
- Always be positive about Srikar's capabilities and potential
"""

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

@app.get("/health")
async def health():
    return {"status": "ok"}
