import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen } from "lucide-react";
import Seo from "@/components/Seo";

const skills = [
  "Transformers", "Generative AI", "LLMs", "CrewAI", "Gemini API",
  "RAG Systems", "FastAPI", "NestJS", "Docker", "Python", "TypeScript"
];

// const stats = [
//   { value: "8.30", label: "Cumulative GPA", rotate: "-2deg" },
//   { value: "08+", label: "Months Experience", rotate: "1.5deg" },
//   { value: "04", label: "Major Projects", rotate: "-1deg" },
// ];

const skillCategories = [
  {
    title: "AI & ML",
    skills: [
      { name: "Generative AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "LLMs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "BERT Models", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "RAG Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Bootstrap Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    ],
  },
  {
    title: "Platforms",
    skills: [
      { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg" },
      { name: "Linux (Ubuntu)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    ],
  },
];

const certifications = [
  { title: "Microsoft Office Beginner & Advanced", issuer: "Microsoft (Naan Mudhalvan)", date: "Nov 2022" },
  { title: "Cybersecurity Analysis Design", issuer: "FutureSkills Prime (Gold Certified)", date: "Jun 2024" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
  { title: "Transformer Models and BERT Model", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
];

const About = () => {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about Karthik Surya, a Software Engineer focused on Generative AI, NLP, and production-ready intelligent systems."
        keywords="About Karthik Surya, AI Engineer background, Generative AI developer, NLP engineer"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[6rem] md:text-[12rem] text-foreground/5 absolute -top-8 md:-top-16 left-0 select-none leading-none">
            ABOUT
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl md:text-8xl relative z-10"
          >
            ABOUT<span className="text-primary">.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="brutalist-border-thick w-full max-w-xs h-96 bg-muted overflow-hidden" style={{ transform: "rotate(-2deg)" }}>
              <img
                src="/profile-photo.jpg"
                alt="Karthik Surya"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="font-display text-8xl text-primary/30">KS</span></div>';
                }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="brutalist-border-thick p-6 md:p-8">
              <div className="inline-block brutalist-border px-3 py-1 mb-6">
                <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">Software Engineer @ C1X</span>
              </div>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
                B.Tech in Artificial Intelligence and Data Science from Panimalar Institute of Technology with practical experience in building AI-driven systems.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
                Currently working as a Software Engineer at C1Exchange (C1X), contributing to real-time intelligent agents, multi-agent frameworks, and retrieval-augmented generation (RAG) systems.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-foreground/80">
                Experienced in machine learning, natural language processing, and cloud-based model deployment. Passionate about solving real-world problems with scalable AI solutions.
              </p>

              {/* Skills Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="brutalist-border px-3 py-1 font-mono-custom text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="brutalist-border-thick p-6 md:p-8 bg-background hover:bg-primary/5 transition-colors"
              style={{ transform: `rotate(${stat.rotate})` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl md:text-7xl text-primary">{stat.value}</span>
                <span className="font-mono-custom text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              </div>
              <div className="mt-3 h-1 w-16 bg-primary" />
            </motion.div>
          ))}
        </div> */}

        {/* ─── STACK ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            STACK<span className="text-primary">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="brutalist-border-thick aspect-square p-6 md:p-8 bg-foreground text-background hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-all group flex flex-col"
              >
                {/* Category Header */}
                <div className="bg-primary text-primary-foreground px-4 py-2 mb-auto inline-flex items-center gap-2 self-start">
                  <h3 className="font-display text-xl md:text-2xl">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 border border-background/20 hover:border-primary hover:bg-primary/10 transition-colors"
                    >
                      <img src={skill.logo} alt={skill.name} className="w-5 h-5 flex-shrink-0" />
                      <span className="font-mono-custom text-[10px] uppercase tracking-wider text-background/80">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── EDUCATION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-6xl mb-10">
            EDUCATION<span className="text-primary">.</span>
          </h2>

          {/* Main Education Card */}
          <div className="brutalist-border-thick p-8 md:p-12 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="inline-block brutalist-border px-3 py-1 mb-4">
                  <span className="font-mono-custom text-xs uppercase tracking-widest text-primary">2021 – 2025</span>
                </div>
                <h3 className="font-display text-3xl md:text-5xl">B.TECH IN AI & DATA SCIENCE</h3>
                <p className="font-mono-custom text-sm text-muted-foreground mt-2">Panimalar Institute of Technology — Chennai, Tamil Nadu</p>
              </div>
              <div className="brutalist-border-thick p-4 md:p-6 bg-primary/5" style={{ transform: "rotate(-2deg)" }}>
                <span className="font-display text-4xl md:text-6xl text-primary">8.30</span>
                <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground">CGPA</p>
              </div>
            </div>
          </div>

          {/* School Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="brutalist-border-thick p-6 md:p-8" style={{ transform: "rotate(1deg)" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-block brutalist-border px-3 py-1 mb-4">
                    <span className="font-mono-custom text-xs uppercase tracking-widest">2020 – 2021</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl">HIGHER SECONDARY (12TH)</h3>
                  <p className="font-mono-custom text-sm text-muted-foreground mt-1">Green Park International School — Namakkal</p>
                </div>
                <div className="brutalist-border-thick p-4 md:p-6 bg-primary/5" style={{ transform: "rotate(-2deg)" }}>
                  <span className="font-display text-2xl md:text-4xl text-primary">77.4%</span>
                  <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground">Percentage</p>
                </div>
              </div>
            </div>

            <div className="brutalist-border-thick p-6 md:p-8" style={{ transform: "rotate(-1.5deg)" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-block brutalist-border px-3 py-1 mb-4">
                    <span className="font-mono-custom text-xs uppercase tracking-widest">2018 – 2019</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl">SECONDARY SCHOOL (10TH)</h3>
                  <p className="font-mono-custom text-sm text-muted-foreground mt-1">Green Park International School — Namakkal</p>
                </div>
                <div className="brutalist-border-thick p-4 md:p-6 bg-primary/5" style={{ transform: "rotate(-2deg)" }}>
                  <span className="font-display text-2xl md:text-4xl text-primary">77.4%</span>
                  <p className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground">Percentage</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── PUBLICATIONS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            <BookOpen className="inline mr-3 text-primary" size={32} />
            PUBLICATIONS<span className="text-primary">.</span>
          </h2>
          <div className="brutalist-border-thick p-6 md:p-8 hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-shadow">
            <h3 className="font-display text-xl md:text-2xl mb-2">Towards Intelligent Legal Information Retrieval</h3>
            <p className="font-mono-custom text-xs text-muted-foreground mb-2">A Transformer-Based Framework</p>
            <p className="font-body text-sm text-foreground/70 mb-4">
              Published in International Journal of Scientific Research in Engineering Management (IJSREM), Volume 09, Issue 05, May 2025.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="brutalist-border px-3 py-1 font-mono-custom text-xs">DOI: 10.55041/IJSREM48260</span>
              <a href="#" className="brutalist-border px-4 py-1 font-mono-custom text-xs uppercase bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
                <ExternalLink size={12} /> Read Paper
              </a>
            </div>
          </div>
        </motion.div>

        {/* ─── CERTIFICATIONS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-24"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            <Award className="inline mr-3 text-primary" size={32} />
            CERTIFICATIONS<span className="text-primary">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="brutalist-border-thick p-5 md:p-6 hover:shadow-[6px_6px_0_hsl(var(--primary))] transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-display text-lg md:text-xl">{cert.title}</h4>
                    <p className="font-mono-custom text-xs text-primary mt-1">{cert.issuer}</p>
                  </div>
                  <span className="font-mono-custom text-[10px] uppercase text-muted-foreground whitespace-nowrap">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
