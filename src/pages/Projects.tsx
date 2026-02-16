import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Seo from "@/components/Seo";

const projects = [
  {
    num: "01",
    title: "LegalAdviser-AI (CivicAI)",
    subtitle: "Multi-Agent Legal Assistant",
    date: "Nov 2025",
    description: "Engineered an AI-powered legal assistant for Indian law, utilizing Gemini 2.5 Flash and RAG techniques to provide actionable guidance with validated case-law citations. Architected a multi-agent pipeline (Analyzer → Researcher → Summarizer) featuring automated intent detection.",
    tags: ["FastAPI", "Gemini", "Docker", "RAG", "Multi-Agent"],
    github: "https://github.com/nakarthiksurya",
  },
  {
    num: "02",
    title: "Legal Information Retrieval System",
    subtitle: "LegalBERT + RAG",
    date: "Feb – May 2025",
    description: "Developed a legal question-answering system using a custom-trained LegalBERT model integrated with Retrieval-Augmented Generation (RAG) techniques. Used semantic search and LlamaIndex to retrieve relevant Indian laws and case judgments. Focused on RTI Act and 49 other Indian laws with over 5000 case judgments.",
    tags: ["Python", "Transformers", "LlamaIndex", "FastAPI"],
    github: "https://github.com/nakarthiksurya",
  },
  {
    num: "03",
    title: "BeastlyVisionX",
    subtitle: "Animal Image Classifier",
    date: "Aug – Sep 2024",
    description: "Developed an animal image classification system using HuggingFace Vision Transformer and FastAPI for real-time species recognition. Created a structured dataset with 90 attributes per class and deployed the model with Docker for scalability.",
    tags: ["Python", "FastAPI", "Docker", "HuggingFace", "ViT"],
    github: "https://github.com/nakarthiksurya",
  },
  {
    num: "04",
    title: "AI Story Generator",
    subtitle: "Generative AI Narrative Tool",
    date: "March 2024",
    description: "Developed a story generation tool using Generative AI for real-time narrative creation. Assisted writers by generating unique, high-quality prompts and coherent stories. Received positive feedback for enhancing creativity.",
    tags: ["Gemini Pro", "Python", "NLP"],
    github: "https://github.com/nakarthiksurya",
  },
];

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects"
        description="Explore major projects by Karthik Surya, including legal AI assistants, RAG systems, and real-time ML applications."
        keywords="Karthik Surya projects, Legal AI, RAG portfolio, Gemini API projects, FastAPI AI projects"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none">
            WORKS
          </span>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h1 className="font-display text-6xl md:text-8xl">
              WORKS<span className="text-primary">.</span>
            </h1>
            <div className="inline-block brutalist-border px-3 py-1 mt-4">
              <span className="font-mono-custom text-xs uppercase tracking-widest">Major Projects 2023–2025</span>
            </div>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="brutalist-border-thick p-6 md:p-8 flex flex-col hover:shadow-[8px_8px_0_hsl(var(--primary))] transition-shadow group"
            >
              {/* Number & Date */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-5xl md:text-6xl text-primary/30">{project.num}</span>
                <span className="brutalist-border px-2 py-0.5 font-mono-custom text-[10px] uppercase">{project.date}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-1">{project.title}</h3>
              <p className="font-mono-custom text-xs text-primary uppercase tracking-wider mb-4">{project.subtitle}</p>
              <p className="font-body text-sm text-foreground/70 leading-relaxed flex-1 mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="brutalist-border px-2 py-0.5 font-mono-custom text-[10px] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-border px-4 py-2 font-mono-custom text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
