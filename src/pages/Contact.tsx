import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    // TODO: Wire to Mailgun edge function
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="relative mb-16">
          <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none">
            HELLO
          </span>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-6xl md:text-8xl relative z-10"
          >
            GET IN TOUCH<span className="text-primary">.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: Mail, label: "Email", value: "n.a.karthiksurya@gmail.com", href: "mailto:n.a.karthiksurya@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91-9360498834", href: "tel:+919360498834" },
              { icon: MapPin, label: "Location", value: "Chennai / Bangalore, India", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="brutalist-border-thick p-5 flex items-center gap-4 hover:shadow-[6px_6px_0_hsl(var(--primary))] transition-shadow"
              >
                <div className="w-12 h-12 brutalist-border flex items-center justify-center bg-primary/10">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] uppercase tracking-widest text-muted-foreground">{item.label}</p>
                  <p className="font-mono-custom text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/karthiksurya-na" },
                { icon: Github, label: "GitHub", href: "https://github.com/nakarthiksurya" },
                { icon: Mail, label: "Email Me", href: "mailto:n.a.karthiksurya@gmail.com" },
                { icon: Download, label: "Download CV", href: "/resume.pdf" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-border-thick p-4 flex items-center gap-3 font-mono-custom text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={16} />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="brutalist-border-thick p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl mb-6">SEND A MESSAGE</h3>

              <div className="space-y-4">
                <div>
                  <label className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full brutalist-border p-3 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full brutalist-border p-3 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="font-mono-custom text-xs uppercase tracking-widest text-muted-foreground block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full brutalist-border p-3 bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px] resize-y"
                    placeholder="Your message..."
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full brutalist-border-thick p-4 bg-primary text-primary-foreground font-mono-custom text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? "SENDING..." : <>SEND MESSAGE <Send size={14} /></>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
