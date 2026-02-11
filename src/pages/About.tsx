import { motion } from "framer-motion";

const skills = [
  "Transformers", "Generative AI", "LLMs", "CrewAI", "Gemini API",
  "RAG Systems", "FastAPI", "NestJS", "Docker", "Python", "TypeScript"
];

const stats = [
  { value: "8.30", label: "Cumulative GPA", rotate: "-2deg" },
  { value: "08+", label: "Months Experience", rotate: "1.5deg" },
  { value: "04", label: "Major Projects", rotate: "-1deg" },
];

const About = () => {
  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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

          {/* Stats */}
          <div className="flex flex-col gap-6 justify-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
