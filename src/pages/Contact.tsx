import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, ArrowUpRight } from "lucide-react";
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
        {/* Split Layout: Big CTA left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left: Big statement + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 brutalist-border-thick p-8 md:p-12 bg-foreground text-background flex flex-col justify-between"
          >
            <div>
              <h1 className="font-display text-5xl md:text-7xl leading-none mb-8">
                GOT A<br />
                PROJECT<br />
                IN MIND<span className="text-primary">?</span>
              </h1>
              <p className="font-body text-sm text-background/60 leading-relaxed mb-10">
                Whether it's a collaboration, a job opportunity, or just a friendly hello — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, value: "n.a.karthiksurya@gmail.com", href: "mailto:n.a.karthiksurya@gmail.com" },
                { icon: Phone, value: "+91-9360498834", href: "tel:+919360498834" },
                { icon: MapPin, value: "Chennai / Bangalore, India", href: "#" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors group"
                >
                  <item.icon size={16} className="text-primary flex-shrink-0" />
                  <span className="font-mono-custom text-xs">{item.value}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 brutalist-border-thick border-l-0 lg:border-l-0 border-t-0 lg:border-t-[4px]"
          >
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              <div className="p-8 md:p-12 flex-1 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                      01 — Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full border-b-[3px] border-foreground bg-transparent p-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                      02 — Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full border-b-[3px] border-foreground bg-transparent p-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3">
                    03 — Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full border-b-[3px] border-foreground bg-transparent p-3 font-body text-sm focus:outline-none focus:border-primary transition-colors min-h-[180px] resize-y"
                    placeholder="Tell me about your project, idea, or just say hello..."
                    maxLength={1000}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full brutalist-border-thick border-b-0 border-l-0 border-r-0 p-6 bg-primary text-primary-foreground font-display text-2xl md:text-3xl hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {loading ? "SENDING..." : <>SEND MESSAGE <Send size={20} /></>}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-0"
        >
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/karthiksurya-na" },
            { icon: Github, label: "GitHub", href: "https://github.com/nakarthiksurya" },
            { icon: Mail, label: "Email", href: "mailto:n.a.karthiksurya@gmail.com" },
            { icon: Download, label: "Resume", href: "/resume.pdf" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="brutalist-border-thick p-6 flex items-center justify-center gap-3 font-mono-custom text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors group"
            >
              <social.icon size={18} className="group-hover:text-primary transition-colors" />
              {social.label}
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
