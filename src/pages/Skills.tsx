import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & ML",
    skills: ["Generative AI", "LLMs", "BERT Models", "RAG Systems"],
  },
  {
    title: "Programming",
    skills: ["Python", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["NestJS", "FastAPI", "Docker", "Git", "Bootstrap Studio"],
  },
  {
    title: "Data & Analytics",
    skills: ["Pandas", "Matplotlib", "Power BI"],
  },
  {
    title: "Platforms",
    skills: ["Windows", "Linux (Ubuntu)", "VS Code", "WordPress"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem-solving", "Teamwork", "Adaptability", "Active Listening"],
  },
];

const Skills = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none">
            SKILLS
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl md:text-8xl relative z-10"
          >
            TECHNICAL SKILLS<span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 brutalist-border-thick">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="brutalist-border p-6 md:p-8"
            >
              {/* Category Header */}
              <div className="bg-primary text-primary-foreground px-4 py-2 mb-6 inline-block">
                <h3 className="font-display text-xl md:text-2xl">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary flex-shrink-0" />
                    <span className="font-mono-custom text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
