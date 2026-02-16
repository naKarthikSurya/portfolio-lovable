import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/experience", label: "EXPERIENCE" },
  { to: "/projects", label: "WORKS" },
  { to: "/contact", label: "CONTACT" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background brutalist-border-thick border-t-0 border-l-0 border-r-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl leading-none tracking-tight">KARTHIK SURYA</span>
            <span className="font-mono-custom text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">Software Engineer</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono-custom text-sm uppercase tracking-wider px-3 py-2 transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary font-bold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/resume"
              className="ml-2 px-4 py-2 brutalist-border bg-primary text-primary-foreground font-mono-custom text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              RESUME.PDF
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden brutalist-border p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden brutalist-border-thick border-l-0 border-r-0 border-t-0 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`font-mono-custom text-base uppercase tracking-wider px-4 py-3 brutalist-border transition-colors hover:bg-primary hover:text-primary-foreground ${
                  location.pathname === link.to ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/resume"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 brutalist-border bg-foreground text-background font-mono-custom text-base uppercase tracking-wider text-center"
            >
              RESUME.PDF
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
