import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const Index = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center relative overflow-hidden">
      {/* Copper accent block */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary opacity-20" />
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-primary opacity-10" />

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono-custom text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Software Engineer & AI Developer
              </p>
              <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tighter">
                KARTHIK
                <br />
                SURYA
                <br />
                <span className="text-primary">N A</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-12"
            >
              <p className="font-mono-custom text-xs md:text-sm text-muted-foreground max-w-lg">
                Currently building intelligent agents & multi-agent systems at C1X, Chennai.
                B.Tech in AI & Data Science.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="brutalist-border-thick px-6 py-3 font-mono-custom text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
              >
                View Work <ArrowRight size={14} />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-border-thick px-6 py-3 font-mono-custom text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
              >
                Resume.pdf <Download size={14} />
              </a>
              <Link
                to="/contact"
                className="brutalist-border-thick px-6 py-3 font-mono-custom text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                Contact <Mail size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Year Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex items-center justify-center"
          >
            <div className="relative">
              <span className="font-display text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[16rem] text-primary/20 leading-none select-none">
                2026
              </span>
              <div className="absolute bottom-4 right-0 brutalist-border bg-background px-4 py-2">
                <span className="font-mono-custom text-xs uppercase tracking-widest">Est. Career</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
};

export default Index;
