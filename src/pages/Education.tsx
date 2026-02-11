import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen } from "lucide-react";

const certifications = [
  { title: "Microsoft Office Beginner & Advanced", issuer: "Microsoft (Naan Mudhalvan)", date: "Nov 2022" },
  { title: "Cybersecurity Analysis Design", issuer: "FutureSkills Prime (Gold Certified)", date: "Jun 2024" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
  { title: "Transformer Models and BERT Model", issuer: "Google Cloud (Coursera)", date: "Mar 2025" },
];

const Education = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none">
            EDU
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl md:text-8xl relative z-10"
          >
            EDUCATION<span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="brutalist-border-thick p-8 md:p-12 mb-8"
        >
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
        </motion.div>

        {/* School Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="brutalist-border-thick p-6 md:p-8"
            style={{ transform: "rotate(1deg)" }}
          >
            <div className="inline-block brutalist-border px-3 py-1 mb-4">
              <span className="font-mono-custom text-xs uppercase tracking-widest">2020 – 2021</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl">HIGHER SECONDARY (12TH)</h3>
            <p className="font-mono-custom text-sm text-muted-foreground mt-1">Green Park International School — Namakkal</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl text-primary">77.4%</span>
              <span className="font-mono-custom text-xs text-muted-foreground uppercase">Percentage</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="brutalist-border-thick p-6 md:p-8"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            <div className="inline-block brutalist-border px-3 py-1 mb-4">
              <span className="font-mono-custom text-xs uppercase tracking-widest">2018 – 2019</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl">SECONDARY SCHOOL (10TH)</h3>
            <p className="font-mono-custom text-sm text-muted-foreground mt-1">Green Park International School — Namakkal</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl text-primary">77.4%</span>
              <span className="font-mono-custom text-xs text-muted-foreground uppercase">Percentage</span>
            </div>
          </motion.div>
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
  );
};

export default Education;
