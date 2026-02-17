import { useEffect, useState } from "react";
import { ExternalLink, Download, AlertTriangle } from "lucide-react";
import Seo from "@/components/Seo";

const Resume = () => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const resumePath = "/suryaresume.pdf";

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;

    const loadPdf = async () => {
      try {
        const response = await fetch(resumePath, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Unable to fetch resume (HTTP ${response.status}).`);
        }

        const blob = await response.blob();
        if (!blob.size) {
          throw new Error("Downloaded resume is empty.");
        }

        objectUrl = URL.createObjectURL(blob);
        if (!active) {
          URL.revokeObjectURL(objectUrl);
          return;
        }

        setPdfBlobUrl(objectUrl);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to load PDF.";
        if (active) {
          setLoadError(message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      active = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  return (
    <>
      <Seo
        title="Resume"
        description="View and download the resume of Karthik Surya, Software Engineer and AI Developer."
        keywords="Karthik Surya resume, Software Engineer resume, AI Developer CV"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative mb-10 md:mb-14">
            <span className="font-display text-[5rem] md:text-[10rem] text-foreground/5 absolute -top-6 md:-top-12 left-0 select-none leading-none">
              CV
            </span>
            <h1 className="font-display text-6xl md:text-8xl relative z-10">
              RESUME<span className="text-primary">.</span>
            </h1>
          </div>

          <div className="brutalist-border-thick p-4 md:p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-border px-4 py-2 font-mono-custom text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors inline-flex items-center gap-2"
              >
                Open in New Tab <ExternalLink size={14} />
              </a>
              <a
                href={resumePath}
                download
                className="brutalist-border-thick px-4 py-2 font-mono-custom text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors inline-flex items-center gap-2"
              >
                Download PDF <Download size={14} />
              </a>
            </div>

            {loading && (
              <div className="brutalist-border-thick bg-muted h-[70vh] md:h-[80vh] flex items-center justify-center">
                <p className="font-mono-custom text-xs uppercase tracking-wider text-muted-foreground">
                  Loading resume preview...
                </p>
              </div>
            )}

            {!loading && loadError && (
              <div className="brutalist-border-thick p-6 md:p-8 bg-muted">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="text-primary mt-0.5" size={18} />
                  <div>
                    <p className="font-mono-custom text-xs uppercase tracking-wider text-muted-foreground">Preview unavailable</p>
                    <p className="font-body text-sm mt-2">{loadError}</p>
                  </div>
                </div>
                <p className="font-body text-sm mb-4">
                  You can still open or download the resume using the buttons above.
                </p>
              </div>
            )}

            {!loading && !loadError && pdfBlobUrl && (
              <div className="brutalist-border-thick overflow-hidden bg-muted">
                <iframe
                  src={`${pdfBlobUrl}#view=FitH`}
                  title="Karthik Surya Resume"
                  className="w-full h-[70vh] md:h-[80vh]"
                />
              </div>
            )}

            <p className="font-mono-custom text-[10px] md:text-xs text-muted-foreground mt-3">
              If preview fails in your browser, use Open in New Tab or Download PDF.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
