import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Marquee */}
      <div className="overflow-hidden brutalist-border-thick border-l-0 border-r-0 border-b-0 py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl mx-8 text-background/80">
              GET IN TOUCH — SAY HELLO —
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-background">KARTHIK SURYA N A</h3>
            <p className="font-mono-custom text-xs text-background/60 mt-1">© 2025 — All Rights Reserved</p>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="font-mono-custom text-xs uppercase tracking-wider text-background/60 hover:text-primary transition-colors">Portfolio</Link>
            <a href="/resume.pdf" className="font-mono-custom text-xs uppercase tracking-wider text-background/60 hover:text-primary transition-colors">Resume</a>
            <Link to="/contact" className="font-mono-custom text-xs uppercase tracking-wider text-background/60 hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-background/20">
          <p className="font-mono-custom text-xs text-background/40 text-center">Based in Chennai / Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
