export const PERSONAL = {
  name: "Srikar Kodi",
  title: "Python Developer & AI/ML Engineer",
  tagline: "Building intelligent systems that solve real problems.",
  location: "Berlin, Germany",
  email: "kodisrikar@gmail.com",
  phone: "+49-1634218928",
  github: "https://github.com/Namidok",
  linkedin: "https://linkedin.com/in/srikar-kodi-046a631b2/",
  cv: "/SrikarKodi-CV.pdf",
  bio: [
    "I'm an MSc Computer Science student in Berlin specialising in Big Data and Artificial Intelligence, with 3+ years of professional software development experience. From building ETL pipelines and NLP chatbots to developing full-stack applications and AI-powered solutions, I enjoy transforming complex problems into scalable, user-focused products.",
    "My interests lie in Machine Learning, Generative AI, NLP, MLOps, and applied AI research, and I'm driven by the belief that AI should create practical value for people and businesses alike.",
  ],
}

export const EXPERIENCE = [
  {
    role: "Application Developer",
    company: "Vavili Technologies",
    period: "05/2023 - 08/2025",
    location: "Hyderabad, Telangana",
    points: [
      "Built and optimised templeswiki.com as a Full Stack Developer across multiple pages and microservices.",
      "Developed an NLP chatbot to enhance user engagement and streamline customer interactions.",
      "Built a robust ETL pipeline using Python to generate multi-language labels for content translation.",
      "Led the QA team, crafted test plans, and developed an in-house attendance recording tool.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "ValueLabs",
    period: "01/2022 - 02/2023",
    location: "Hyderabad, Telangana",
    points: [
      "Enhanced software modules by addressing bugs and optimising performance across teams.",
      "Conducted manual testing and developed detailed test plans to validate application functionality.",
    ],
  },
]

export const EDUCATION = [
  {
    degree: "MSc Computer Science - Big Data and Artificial Intelligence",
    school: "SRH University of Applied Sciences",
    period: "10/2025 - Present",
    location: "Berlin, Germany",
  },
  {
    degree: "Bachelor in Electronics and Communication",
    school: "MVGR College of Engineering",
    period: "2016 - 2020",
    location: "Hyderabad, India",
  },
]

export const PROJECTS = [
  {
    id: 1,
    name: "SkillSync",
    tagline: "AI-powered job application tracker",
    description: "Tracks 50+ job applications with NLP skill extraction, pipeline analytics, Gmail follow-up reminders, and session-isolated data for every user.",
    stack: ["Python", "FastAPI", "React", "Tailwind", "NLP", "AWS EC2", "Nginx"],
    github: "https://github.com/Namidok/SkillSync",
    live: "http://3.89.197.204",
    status: "live",
  },
  {
    id: 2,
    name: "CoverCraft",
    tagline: "RAG-powered cover letter generator",
    description: "Feeds 50 real German job descriptions into ChromaDB. Your CV as context. Generates tailored cover letter paragraphs and skill gap analysis per company.",
    stack: ["LangChain", "ChromaDB", "FastAPI", "AWS EC2", "S3", "Nginx"],
    github: "#",
    live: "#",
    status: "building",
  },
  {
    id: 3,
    name: "GermanBot",
    tagline: "AI language learning chatbot",
    description: "Conversational German practice at A2/B1 level with grammar correction, vocabulary tracking across sessions, and daily practice generation.",
    stack: ["LangChain", "Docker", "AWS ECR", "EC2"],
    github: "#",
    live: "#",
    status: "upcoming",
  },
  {
    id: 4,
    name: "InterviewCoach",
    tagline: "AI interview preparation coach",
    description: "Paste a JD, get role-specific questions, answer them, get scored with model answers. Mock interview mode. Full CI/CD pipeline.",
    stack: ["LangChain", "FastAPI", "AWS ECS", "RDS", "GitHub Actions"],
    github: "#",
    live: "#",
    status: "upcoming",
  },
]

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Node.js"],
  },
  {
    category: "AI / ML",
    items: ["NLP", "PyTorch", "LangChain", "RAG", "Embeddings", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    category: "Frameworks",
    items: ["Flask", "Django", "React JS", "FastAPI", "PySpark"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "S3", "Lambda", "Glue", "Redshift", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "ChromaDB", "Redis"],
  },
  {
    category: "Spoken Languages",
    items: ["English - Fluent", "German - A2 (Learning B2)"],
  },
]

export const CHATBOT_SYSTEM_PROMPT = `You are Srikar Kodi's personal AI assistant on his portfolio website. You answer questions from recruiters and hiring managers about Srikar.

About Srikar:
- Full name: Srikar Kodi
- MSc Computer Science student at SRH University of Applied Sciences, Berlin. Specialisation: Big Data and Artificial Intelligence. Started October 2025.
- Bachelor in Electronics and Communication from MVGR College of Engineering (2016-2020)
- Based in Berlin, Germany
- Email: kodisrikar@gmail.com
- Phone: +49-1634218928
- GitHub: github.com/Namidok
- LinkedIn: linkedin.com/in/srikar-kodi-046a631b2/
- Looking for AI/ML Engineer internship or thesis roles starting October 2026 in Berlin or Munich

Experience:
1. Application Developer at Vavili Technologies (05/2023 - 08/2025, Hyderabad)
   - Full Stack Developer on templeswiki.com
   - Built NLP chatbot for user engagement
   - Built ETL pipeline for multi-language label generation
   - Led QA team, built attendance recording tool

2. Trainee Software Engineer at ValueLabs (01/2022 - 02/2023, Hyderabad)
   - Bug fixing and performance optimisation
   - Manual testing and test plan development

Skills:
- Languages: Python, JavaScript, HTML, CSS, SQL, Node.js
- AI/ML: NLP, PyTorch, LangChain, RAG, Embeddings, NumPy, Pandas, PySpark
- Frameworks: Flask, Django, React JS, FastAPI
- Cloud: AWS (EC2, S3, Lambda, Glue, Redshift), Docker, Nginx
- Databases: PostgreSQL, ChromaDB
- Spoken: English (Fluent), German (A2, learning B2)

Current Projects (8-week sprint):
1. SkillSync - AI job tracker, FastAPI + React + AWS EC2. Live now.
2. CoverCraft - RAG cover letter generator, LangChain + ChromaDB + AWS. In progress.
3. GermanBot - AI German language chatbot, LangChain + Docker + AWS ECR. Week 5.
4. InterviewCoach - AI interview prep coach, LangChain + ECS Fargate + CI/CD. Week 6.

Instructions:
- Answer questions about Srikar's skills, projects, experience, and availability
- Be confident and professional but conversational
- Keep answers concise - 2-4 sentences max unless asked for detail
- If asked something you do not know, say you do not have that info and suggest emailing kodisrikar@gmail.com
- Never make up details not listed above
- You are NOT Srikar himself - you are his AI assistant`
