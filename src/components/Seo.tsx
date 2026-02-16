import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/seo";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "profile" | "article";
  noIndex?: boolean;
  canonical?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const toAbsoluteUrl = (url: string) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
};

const Seo = ({
  title,
  description,
  keywords,
  image,
  type = "website",
  noIndex = false,
  canonical,
  structuredData,
}: SeoProps) => {
  const { pathname } = useLocation();
  const canonicalUrl =
    canonical ?? `${siteConfig.siteUrl}${pathname === "/" ? "/" : pathname}`;
  const pageTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.defaultTitle;
  const pageDescription = description ?? siteConfig.defaultDescription;
  const pageKeywords = keywords ?? siteConfig.defaultKeywords;
  const pageImage = toAbsoluteUrl(image ?? siteConfig.defaultOgImage);
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const defaultSchema: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.siteName,
      jobTitle: "Software Engineer & AI Developer",
      url: siteConfig.siteUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
      sameAs: siteConfig.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
      },
      inLanguage: "en",
    },
  ];

  const customSchema = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  const schemas = [...defaultSchema, ...customSchema];

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />

      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={`${siteConfig.siteName} portfolio preview`} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;

