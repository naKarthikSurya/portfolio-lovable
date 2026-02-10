

# Karthik Surya N A — Dynamic Portfolio Website

## Design System
- **Style**: Brutalist Swiss modernism with unique mixed touches
- **Colors**: Copper/terracotta (#C0704A) accent, off-white/cream (#F2EDE6) background, bold black borders & typography
- **Typography**: Extra-bold condensed headings, uppercase labels, clean body text
- **Cards**: Thick black-bordered boxes, slight rotations on stat cards, copper accent bars

---

## Pages & Routing (8 Separate Pages)

### 1. Home / Hero Page (`/`)
- Navigation bar with logo "KARTHIK SURYA" + "Software Engineer" subtitle
- Nav links to all pages + "RESUME.PDF" download button
- Full-width brutalist hero with large "KARTHIK SURYA N A" heading
- "Software Engineer & AI Developer" subtitle, "Currently at C1X, Chennai"
- Large "2026" in copper text as a bold visual element
- CTA buttons: "VIEW WORK", "RESUME.PDF", "CONTACT" in bordered boxes
- Copper accent block in corner

### 2. About Page (`/about`)
- Large "ABOUT" heading with faded background text
- Bio from resume summary (B.Tech in AI & Data Science, currently at C1X)
- Skill tags: Transformers, Generative AI, LLMs, CrewAI, Gemini API
- Tilted stat cards: "8.30 CGPA", "08+ Months Experience", "04 Major Projects"
- Current role badge: "Software Engineer @ C1X"

### 3. Experience Page (`/experience`)
- Vertical timeline layout with detailed role cards
- **Software Engineer** @ C1X (July 2025 – Present) — intelligent agents, multi-agent systems, RAG
- **AI Intern** @ C1X (June 2025) — Slack chatbot, MCP server, semantic search
- **Data Science Intern** @ QBrainX (July–Sept 2024) — ML model, 70% efficiency boost
- **Data Analytics Intern** @ Juno Dynamics (June–July 2023) — cloud systems for SMEs
- Tech tags on each card, location markers

### 4. Projects Page (`/projects`)
- "SELECTED WORK" heading with "Major Projects 2023-2025" badge
- 4 project cards in staggered grid with numbered entries (01–04):
  - **LegalAdviser-AI (CivicAI)** — Multi-agent legal assistant (FastAPI, Gemini, Docker)
  - **Legal Information Retrieval System** — LegalBERT + RAG (Python, Transformers, LlamaIndex)
  - **BeastlyVisionX** — Animal image classifier (Python, FastAPI, Docker)
  - **AI Story Generator** — Generative AI narrative tool (Gemini Pro, Python, NLP)
- Each card: description, tech tags, action buttons (GitHub, Case Study)

### 5. Skills Page (`/skills`)
- "TECHNICAL SKILLS" heading with copper accent
- 6-column grid table with copper headers:
  - **AI & ML**: Generative AI, LLMs, BERT Models
  - **Programming**: Python, TypeScript
  - **Frameworks**: NestJS, FastAPI, Docker, Git, Bootstrap Studio
  - **Data & Analytics**: Pandas, Matplotlib, Power BI
  - **Platforms**: Windows, Linux (Ubuntu), VS Code, WordPress
  - **Soft Skills**: Communication, Problem-solving, Teamwork, Adaptability, Active Listening

### 6. Education Page (`/education`)
- Large bordered card: **B.Tech in AI & Data Science** — Panimalar Institute of Technology, CGPA 8.30 (2021–2025)
- Two overlapping cards: 12th Grade (77.4%) and 10th Grade (77.4%) from Green Park International School
- **Publications** section: "Towards Intelligent Legal Information Retrieval" paper (IJSREM, DOI: 10.55041/IJSREM48260)
- **Certifications** in 2×2 grid: Microsoft Office, Cybersecurity (FutureSkills Gold), Intro to Gen AI (Google Cloud), Transformer Models (Google Cloud)

### 7. Contact Page (`/contact`)
- "GET IN TOUCH" heading with copper accent
- Contact info cards: Email (n.a.karthiksurya@gmail.com), Phone (+91-9360498834), Location (Chennai/Bangalore)
- Social links: LinkedIn, GitHub, Email Me, Download CV
- Contact form: Full Name, Email, Message → "SEND MESSAGE" button
- **Mailgun integration** via Lovable Cloud edge function to send emails
- Scrolling marquee: "GET IN TOUCH — SAY HELLO"

### 8. Not Found Page (`/404`)
- Brutalist styled 404 page matching the design system

---

## Shared Layout
- Persistent navigation bar across all pages
- Footer on all pages: "KARTHIK SURYA N A" branding, © 2025, portfolio/resume links
- Smooth page transitions
- Fully responsive — brutalist grid adapts for mobile with hamburger menu

## Backend (Mailgun Email)
- Lovable Cloud edge function to handle contact form submissions via Mailgun API
- User will need to provide their Mailgun API key and domain

