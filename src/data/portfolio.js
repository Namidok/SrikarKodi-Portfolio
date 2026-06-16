export const PERSONAL = {
  name: "Srikar Kodi",
  title: "Python Developer & AI/ML Engineer",
  tagline: {
    en: "Building intelligent systems that solve real problems.",
    de: "Intelligente Systeme entwickeln, die echte Probleme lösen.",
  },
  location: "Berlin, Germany",
  email: "kodisrikar@gmail.com",
  phone: "+49-1634218928",
  github: "https://github.com/Namidok",
  linkedin: "https://linkedin.com/in/srikar-kodi-046a631b2/",
  cv: "/SrikarKodi-CV.pdf",
  bio: {
    en: [
      "I am an MSc Computer Science student at SRH University of Applied Sciences in Berlin, specialising in Big Data and Artificial Intelligence.",
      "Previously worked as an Application Developer at Vavili Technologies where I built ETL pipelines, an NLP chatbot, and led QA for templeswiki.com.",
      "Currently on an 8-week build sprint shipping 4 production AI/ML projects and applying to 50 companies across Germany.",
    ],
    de: [
      "Ich bin MSc-Student der Informatik an der SRH Hochschule für angewandte Wissenschaften in Berlin, mit Schwerpunkt Big Data und künstliche Intelligenz.",
      "Zuvor arbeitete ich als Application Developer bei Vavili Technologies, wo ich ETL-Pipelines und einen NLP-Chatbot entwickelte und das QA-Team für templeswiki.com leitete.",
      "Aktuell absolviere ich einen 8-wöchigen Build-Sprint mit 4 KI/ML-Projekten und bewerbe mich bei 50 Unternehmen in Deutschland.",
    ],
  },
}

export const EXPERIENCE = [
  {
    role: { en: "Application Developer", de: "Application Developer" },
    company: "Vavili Technologies",
    period: "05/2023 - 08/2025",
    location: "Hyderabad, Telangana",
    points: {
      en: [
        "Reduced page load time by 40% by rebuilding 12 microservices for templeswiki.com as a Full Stack Developer, improving user retention across 100K+ monthly visitors.",
        "Increased user engagement by 35% by developing an NLP-powered chatbot that automated customer interactions and reduced support queries by 50%.",
        "Accelerated content translation by 60% by building a Python ETL pipeline generating multi-language labels across 5 languages for 200K+ dataset entries.",
        "Improved release quality by 45% by leading a 4-person QA team, designing test plans covering 300+ test cases and building an in-house attendance tool.",
      ],
      de: [
        "Reduzierte die Seitenladezeit um 40% durch den Neuaufbau von 12 Microservices für templeswiki.com als Full-Stack-Entwickler, was die Nutzerbindung bei über 100K monatlichen Besuchern verbesserte.",
        "Steigerte das Nutzerengagement um 35% durch die Entwicklung eines NLP-gestützten Chatbots, der Kundeninteraktionen automatisierte und Support-Anfragen um 50% reduzierte.",
        "Beschleunigte die Inhaltsübersetzung um 60% durch den Aufbau einer Python-ETL-Pipeline, die mehrsprachige Labels in 5 Sprachen für über 200K Datensätze generierte.",
        "Verbesserte die Release-Qualität um 45% durch die Leitung eines 4-köpfigen QA-Teams, das Testpläne mit über 300 Testfällen erstellte und ein internes Anwesenheitstool entwickelte.",
      ],
    },
  },
  {
    role: { en: "Trainee Software Engineer", de: "Trainee Software Engineer" },
    company: "ValueLabs",
    period: "01/2022 - 02/2023",
    location: "Hyderabad, Telangana",
    points: {
      en: [
        "Improved application performance by 25% by identifying and resolving 60+ bugs across 3 software modules in close collaboration with cross-functional teams.",
        "Increased test coverage by 30% by designing and executing detailed test plans covering 150+ manual test cases across core application functionalities.",
      ],
      de: [
        "Verbesserte die Anwendungsleistung um 25% durch Identifizierung und Behebung von über 60 Fehlern in 3 Software-Modulen in enger Zusammenarbeit mit funktionsübergreifenden Teams.",
        "Erhöhte die Testabdeckung um 30% durch Entwicklung und Ausführung detaillierter Testpläne mit über 150 manuellen Testfällen für zentrale Anwendungsfunktionen.",
      ],
    },
  },
]

export const EDUCATION = [
  {
    degree: {
      en: "MSc Computer Science — Big Data & Artificial Intelligence",
      de: "MSc Informatik — Big Data & Künstliche Intelligenz",
    },
    school: "SRH University of Applied Sciences",
    period: "10/2025 - Present",
    location: "Berlin, Germany",
  },
  {
    degree: {
      en: "Bachelor in Electronics and Communication",
      de: "Bachelor in Elektronik und Kommunikation",
    },
    school: "MVGR College of Engineering",
    period: "2016 - 2020",
    location: "Hyderabad, India",
  },
]

export const PROJECTS = [
  {
    id: 1,
    name: "SkillSync",
    tagline: {
      en: "AI-powered job application tracker",
      de: "KI-gestützter Bewerbungs-Tracker",
    },
    description: {
      en: "Tracks 50+ job applications with NLP skill extraction, pipeline analytics, Gmail follow-up reminders, and session-isolated data for every user.",
      de: "Verfolgt 50+ Bewerbungen mit NLP-Skill-Extraktion, Pipeline-Analysen, Gmail-Erinnerungen und sitzungsisolierten Daten für jeden Nutzer.",
    },
    stack: ["Python", "FastAPI", "React", "Tailwind", "NLP", "AWS EC2", "Nginx"],
    github: "https://github.com/Namidok/SkillSync",
    live: "https://skillsync.srikarkodi.dev",
    status: "live"
  },
  {
    id: 2,
    name: "CoverCraft",
    tagline: {
      en: "RAG-powered cover letter generator",
      de: "RAG-gestützter Anschreiben-Generator",
    },
    description: {
      en: "Feeds 50 real German job descriptions into ChromaDB. Your CV as context. Generates tailored cover letter paragraphs and skill gap analysis per company.",
      de: "Lädt 50 echte deutsche Stellenbeschreibungen in ChromaDB. Dein Lebenslauf als Kontext. Generiert maßgeschneiderte Anschreiben und Skill-Gap-Analysen pro Unternehmen.",
    },
    stack: ["LangChain", "ChromaDB", "FastAPI", "AWS EC2", "S3", "Nginx"],
    github: "https://github.com/Namidok/CoverCraft",
    live: "https://covercraft.srikarkodi.dev",
    status: "building"
  },
  {
    id: 3,
    name: "GermanBot",
    tagline: {
      en: "AI language learning chatbot",
      de: "KI-Sprachlern-Chatbot",
    },
    description: {
      en: "Conversational German practice at A2/B1 level with grammar correction, vocabulary tracking across sessions, and daily practice generation.",
      de: "Deutschübungen auf A2/B1-Niveau mit Grammatikkorrektur, sitzungsübergreifendem Vokabeltracking und täglicher Übungsgenerierung.",
    },
    stack: ["LangChain", "Docker", "AWS ECR", "EC2"],
    github: "#",
    live: "#",
    status: "upcoming",
  },
  {
    id: 4,
    name: "InterviewCoach",
    tagline: {
      en: "AI interview preparation coach",
      de: "KI-Interviewvorbereitungs-Coach",
    },
    description: {
      en: "Paste a JD, get role-specific questions, answer them, get scored with model answers. Mock interview mode. Full CI/CD pipeline.",
      de: "Stellenbeschreibung einfügen, rollenspezifische Fragen erhalten, beantworten, mit Musterantworten bewertet werden. Mock-Interview-Modus. Vollständige CI/CD-Pipeline.",
    },
    stack: ["LangChain", "FastAPI", "AWS ECS", "RDS", "GitHub Actions"],
    github: "#",
    live: "#",
    status: "upcoming"
  },
]

export const SKILLS = [
  {
    category: { en: "Languages", de: "Programmiersprachen" },
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Node.js"],
  },
  {
    category: { en: "AI / ML", de: "KI / ML" },
    items: ["NLP", "PyTorch", "LangChain", "RAG", "Embeddings", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    category: { en: "Frameworks", de: "Frameworks" },
    items: ["Flask", "Django", "React JS", "FastAPI", "PySpark"],
  },
  {
    category: { en: "Cloud & DevOps", de: "Cloud & DevOps" },
    items: ["AWS EC2", "S3", "Lambda", "Glue", "Redshift", "Docker", "Nginx", "GitHub Actions"],
  },
  {
    category: { en: "Databases", de: "Datenbanken" },
    items: ["PostgreSQL", "ChromaDB", "Redis"],
  },
  {
    category: { en: "Spoken Languages", de: "Sprachen" },
    items: ["English - Fluent", "German - A2 (Learning B2)"],
  },
]

export const UI_TEXT = {
  nav: {
    about: { en: "About", de: "Über mich" },
    projects: { en: "Projects", de: "Projekte" },
    skills: { en: "Skills", de: "Fähigkeiten" },
    contact: { en: "Contact", de: "Kontakt" },
  },
  hero: {
    badge: { en: "Open to Internship · Berlin · Oct 2026", de: "Offen für Praktikum · Berlin · Okt 2026" },
    cta_primary: { en: "View Projects", de: "Projekte ansehen" },
    cta_secondary: { en: "Get in Touch", de: "Kontakt aufnehmen" },
    scroll: { en: "Scroll", de: "Scrollen" },
  },
  about: {
    label: { en: "About", de: "Über mich" },
    heading1: { en: "Building AI systems", de: "KI-Systeme entwickeln," },
    heading2: { en: "that actually work.", de: "die wirklich funktionieren." },
    available: { en: "Available Oct 2026", de: "Verfügbar Okt 2026" },
    internship: { en: "Internship / Thesis", de: "Praktikum / Thesis" },
    experience_label: { en: "Experience", de: "Erfahrung" },
    education_label: { en: "Education", de: "Ausbildung" },
  },
  projects: {
    label: { en: "Projects", de: "Projekte" },
    heading1: { en: "Built for real problems.", de: "Für echte Probleme gebaut." },
    heading2: { en: "Deployed on real servers.", de: "Auf echten Servern deployed." },
    status_live: { en: "● Live", de: "● Live" },
    status_building: { en: "⚙ Building", de: "⚙ In Entwicklung" },
    status_upcoming: { en: "○ Upcoming", de: "○ Geplant" },
  },
  skills: {
    label: { en: "Skills", de: "Fähigkeiten" },
    heading1: { en: "The stack I build with.", de: "Mein Tech-Stack." },
    heading2: { en: "End to end.", de: "Von Anfang bis Ende." },
  },
  contact: {
    label: { en: "Contact", de: "Kontakt" },
    heading1: { en: "Let's build something", de: "Lass uns etwas" },
    heading2: { en: "worth talking about.", de: "Bemerkenswertes bauen." },
    body: {
      en: "I am actively looking for AI/ML internship and thesis roles starting October 2026 in Berlin and Munich. If you are hiring or want to talk about a project, reach out directly.",
      de: "Ich suche aktiv nach KI/ML-Praktikums- und Thesis-Stellen ab Oktober 2026 in Berlin und München. Wenn Sie einstellen oder über ein Projekt sprechen möchten, kontaktieren Sie mich direkt.",
    },
    form_name: { en: "Name", de: "Name" },
    form_email: { en: "Email", de: "E-Mail" },
    form_message: { en: "Message", de: "Nachricht" },
    form_name_placeholder: { en: "Your name", de: "Ihr Name" },
    form_email_placeholder: { en: "your@email.com", de: "ihre@email.com" },
    form_message_placeholder: { en: "What's on your mind?", de: "Was möchten Sie sagen?" },
    send: { en: "Send Message", de: "Nachricht senden" },
    built: { en: "Built with React · Deployed on AWS", de: "Entwickelt mit React · Deployed auf AWS" },
  },
  chatbot: {
    title: { en: "Srikar's Assistant", de: "Srikars Assistent" },
    subtitle: { en: "Ask me anything about Srikar", de: "Fragen Sie mich alles über Srikar" },
    greeting: {
      en: "👋 Hi! I am Srikar's AI assistant. Ask me anything about his skills, projects, or experience.",
      de: "👋 Hallo! Ich bin Srikars KI-Assistent. Fragen Sie mich alles über seine Fähigkeiten, Projekte oder Erfahrungen.",
    },
    placeholder: { en: "Ask about skills, projects...", de: "Fragen zu Fähigkeiten, Projekten..." },
    suggestions: {
      en: [
        "What projects has he built?",
        "What is his experience with NLP?",
        "Is he available for internships?",
        "What cloud technologies does he know?",
      ],
      de: [
        "Welche Projekte hat er entwickelt?",
        "Was ist seine Erfahrung mit NLP?",
        "Ist er für Praktika verfügbar?",
        "Welche Cloud-Technologien kennt er?",
      ],
    },
  },
}

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

Instructions:
- Answer in the same language the user writes in
- Be confident, professional, and conversational
- Keep answers concise - 2-4 sentences unless more detail is asked for
- If asked something not in the profile, suggest emailing kodisrikar@gmail.com
- Never make up information
- You are Srikar's AI assistant, not Srikar himself`
