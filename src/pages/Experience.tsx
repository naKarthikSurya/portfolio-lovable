import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import Seo from "@/components/Seo";

const experiences = [
  {
    title: "Software Engineer",
    company: "Class One Exchange (C1X)",
    location: "Chennai, India",
    period: "July 2025 – Present",
    type: "Full-Time",
    points: [
      "Contributing to production-ready intelligent agents using Gemini APIs.",
      "Building end-to-end multi-agent systems integrating Slack, Jira, GitHub with Gemini 2.5 Flash.",
      "Developing and deployed Gradio-based RAG systems using ColBERT, CLIP, BM25 and Qdrant using NestJS Framework.",
      "Engineering in real-time contextual analytics and qualitative sentiment insights.",
    ],
    tags: ["Gemini API", "Multi-Agent", "RAG", "NestJS", "Qdrant"],
  },
  {
    title: "AI Intern",
    company: "Class One Exchange (C1X)",
    location: "Chennai, India",
    period: "June 2025",
    type: "On-Site",
    points: [
      "Built Slack sentiment chatbot using LLaMA 3.2B and Gemini API.",
      "Developed an MCP (Model Context Protocol) server for Google Gemini 2.5 integration.",
      "Worked on RAG-based agents using CLIP, ColBERT, BM25, and Qdrant for semantic search.",
    ],
    tags: ["LLaMA", "Gemini", "MCP", "CLIP", "Qdrant"],
  },
  {
    title: "Data Science Intern",
    company: "QBrainX",
    location: "Coimbatore, India",
    period: "July 2024 – September 2024",
    type: "On-Site",
    points: [
      "Increased project efficiency by 70% through developing and deploying a real-time analytics ML model.",
      "Utilized Python, HuggingFace Transformers and FastAPI for data preprocessing, model training, and deployment.",
      "Enhanced animal image classification accuracy and performance with pre-trained transformers.",
      "Developed an end-to-end Python application with FastAPI, including front-end integration.",
    ],
    tags: ["Python", "HuggingFace", "FastAPI", "Transformers"],
  },
  {
    title: "Data Analytics Intern",
    company: "Juno Dynamics",
    location: "Coimbatore, India",
    period: "June 2023 – July 2023",
    type: "On-Site",
    points: [
      "Developed and deployed cloud systems for SMEs, optimizing data analytics processes at a micro scale.",
      "Gained hands-on experience in cloud systems, working on tools and technologies for data analytics in HAAS.",
      "Collaborated with the team to enhance the efficiency and scalability of cloud-based solutions.",
      "Exceeded performance expectations by delivering impactful solutions during the internship.",
    ],
    tags: ["Cloud", "Data Analytics", "HAAS"],
  },
];

const Experience = () => {
  return (
    <>
      <Seo
        title="Experience"
        description="Work experience of Karthik Surya across Software Engineering, AI internships, and production deployments in intelligent systems."
        keywords="Karthik Surya experience, Software Engineer C1X, AI internships, RAG and multi-agent development"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none">
            WORK
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl md:text-8xl relative z-10"
          >
            EXPERIENCE<span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[3px] bg-foreground" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[7px] md:left-[23px] top-2 w-5 h-5 brutalist-border-thick bg-primary" />

                <div className="brutalist-border-thick p-6 md:p-8 hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl">{exp.title}</h3>
                      <p className="font-mono-custom text-sm text-primary mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="brutalist-border px-3 py-1 font-mono-custom text-xs uppercase">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <span className="flex items-center gap-1 font-mono-custom text-xs">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 font-mono-custom text-xs">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                        <span className="w-2 h-2 bg-primary mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="brutalist-border px-2 py-0.5 font-mono-custom text-[10px] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
