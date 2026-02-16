import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";

type ContactApiResponse = { success?: boolean; message?: string };
type BrevoPayload = {
  sender: { email: string; name: string };
  to: Array<{ email: string; name: string }>;
  replyTo?: { email: string; name: string };
  subject: string;
  htmlContent: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (unsafe: string) =>
  unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
const formatSubmittedAt = () =>
  new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

const buildOwnerTemplate = (safeName: string, safeEmail: string, safeMessage: string, submittedAt: string) => `
  <div style="background:#f5f5f5;padding:24px;font-family:Arial,sans-serif;color:#111111;">
    <table role="presentation" width="100%" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-collapse:collapse;">
      <tr>
        <td style="padding:24px 24px 8px 24px;">
          <h1 style="margin:0;font-size:22px;line-height:1.3;">New Portfolio Inquiry</h1>
          <p style="margin:8px 0 0 0;color:#555;font-size:14px;">A new message was submitted on nakarthiksurya.com.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 24px 24px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;border:1px solid #ededed;">
            <tr><td style="padding:10px 12px;border-bottom:1px solid #ededed;background:#fafafa;width:160px;"><strong>Name</strong></td><td style="padding:10px 12px;border-bottom:1px solid #ededed;">${safeName}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #ededed;background:#fafafa;"><strong>Email</strong></td><td style="padding:10px 12px;border-bottom:1px solid #ededed;">${safeEmail}</td></tr>
            <tr><td style="padding:10px 12px;border-bottom:1px solid #ededed;background:#fafafa;"><strong>Submitted</strong></td><td style="padding:10px 12px;border-bottom:1px solid #ededed;">${escapeHtml(submittedAt)}</td></tr>
            <tr><td style="padding:10px 12px;background:#fafafa;vertical-align:top;"><strong>Message</strong></td><td style="padding:10px 12px;line-height:1.55;">${safeMessage}</td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px 24px;color:#666;font-size:12px;">
          Source: https://nakarthiksurya.com/contact
        </td>
      </tr>
    </table>
  </div>
`;

const buildUserTemplate = (safeName: string, safeMessage: string, submittedAt: string) => `
  <div style="background:#f5f5f5;padding:24px;font-family:Arial,sans-serif;color:#111111;">
    <table role="presentation" width="100%" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e5e5;border-collapse:collapse;">
      <tr>
        <td style="padding:24px;">
          <h1 style="margin:0;font-size:22px;line-height:1.3;">Thanks for reaching out, ${safeName}</h1>
          <p style="margin:10px 0 0 0;color:#444;line-height:1.6;">
            Your message has been received. I appreciate your interest and will get back to you as soon as possible.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px 24px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;border:1px solid #ededed;">
            <tr><td style="padding:10px 12px;border-bottom:1px solid #ededed;background:#fafafa;width:160px;"><strong>Submitted</strong></td><td style="padding:10px 12px;border-bottom:1px solid #ededed;">${escapeHtml(submittedAt)}</td></tr>
            <tr><td style="padding:10px 12px;background:#fafafa;vertical-align:top;"><strong>Your message</strong></td><td style="padding:10px 12px;line-height:1.55;">${safeMessage}</td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px 24px;color:#555;font-size:14px;line-height:1.6;">
          Regards,<br />
          <strong>Karthik Surya</strong><br />
          Software Engineer & AI Developer
        </td>
      </tr>
    </table>
  </div>
`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });
  const [loading, setLoading] = useState(false);
  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
  const brevoApiKey = import.meta.env.VITE_BREVO_API_KEY;
  const brevoToEmail = import.meta.env.VITE_CONTACT_TO_EMAIL;
  const brevoFromEmail = import.meta.env.VITE_CONTACT_FROM_EMAIL;

  const parseJsonSafely = async (response: Response): Promise<ContactApiResponse | null> => {
    const raw = await response.text();
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as ContactApiResponse;
    } catch {
      return null;
    }
  };

  const sendBrevoEmail = async (payload: BrevoPayload) => {
    if (!brevoApiKey) {
      throw new Error("Missing Brevo API key.");
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Brevo request failed.");
    }
  };

  const sendViaBrevoDirect = async (name: string, email: string, message: string) => {
    if (!brevoApiKey || !brevoToEmail || !brevoFromEmail) {
      throw new Error("Missing Brevo client configuration.");
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const submittedAt = formatSubmittedAt();

    await sendBrevoEmail({
      sender: {
        email: brevoFromEmail,
        name: "Karthik Surya Portfolio",
      },
      to: [{ email: brevoToEmail, name: "Karthik Surya" }],
      replyTo: {
        email,
        name,
      },
      subject: `New Portfolio Inquiry from ${name}`,
      htmlContent: buildOwnerTemplate(safeName, safeEmail, safeMessage, submittedAt),
    });

    await sendBrevoEmail({
      sender: {
        email: brevoFromEmail,
        name: "Karthik Surya",
      },
      to: [{ email, name }],
      replyTo: {
        email: brevoToEmail,
        name: "Karthik Surya",
      },
      subject: "Thanks for contacting Karthik Surya",
      htmlContent: buildUserTemplate(safeName, safeMessage, submittedAt),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap
    if (formData.website.trim()) {
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "", website: "" });
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ title: "Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      toast({ title: "Error", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      if (brevoApiKey && brevoToEmail && brevoFromEmail) {
        await sendViaBrevoDirect(trimmedName, trimmedEmail, trimmedMessage);
      } else {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const contentType = response.headers.get("content-type") ?? "";
        const isJson = contentType.includes("application/json");
        const data = isJson ? await parseJsonSafely(response) : null;

        if (!isJson) {
          throw new Error(
            "Contact API is unavailable. Set VITE_BREVO_API_KEY for React-only mode, or run a serverless endpoint.",
          );
        }

        if (!response.ok || !data?.success) {
          throw new Error(data?.message || "Failed to send message.");
        }
      }

      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      toast({ title: "Error", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
