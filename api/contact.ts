type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

type JsonResponse = {
  success: boolean;
  message: string;
};
type BrevoPayload = {
  sender: { email: string; name: string };
  to: Array<{ email: string; name: string }>;
  replyTo?: { email: string; name: string };
  subject: string;
  htmlContent: string;
};

type RequestLike = {
  method?: string;
  body?: string | ContactPayload;
  headers?: Record<string, string | string[] | undefined>;
  socket?: {
    remoteAddress?: string;
  };
};

type ResponseLike = {
  status: (code: number) => ResponseLike;
  json: (body: JsonResponse) => void;
  setHeader: (name: string, value: string) => void;
};

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (unsafe: string) =>
  unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const parseBody = (req: RequestLike): ContactPayload => {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as ContactPayload;
    } catch {
      return {};
    }
  }

  return req.body;
};

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

const sendBrevoEmail = async (apiKey: string, payload: BrevoPayload) => {
  const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!brevoResponse.ok) {
    const errorText = await brevoResponse.text();
    throw new Error(`Brevo API error ${brevoResponse.status}: ${errorText}`);
  }
};

export default async function handler(req: RequestLike, res: ResponseLike) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return res.status(500).json({
      success: false,
      message: "Mail service is not configured.",
    });
  }

  const { name = "", email = "", message = "", website = "" } = parseBody(req);
  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();
  const honeypot = website.trim();

  // Bot trap: silently accept to avoid tipping off automated submitters.
  if (honeypot) {
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  }

  if (
    !normalizedName ||
    !normalizedEmail ||
    !normalizedMessage ||
    normalizedName.length > MAX_NAME_LENGTH ||
    normalizedEmail.length > MAX_EMAIL_LENGTH ||
    normalizedMessage.length > MAX_MESSAGE_LENGTH ||
    !EMAIL_PATTERN.test(normalizedEmail)
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide valid name, email, and message.",
    });
  }

  const ipAddress = req.headers?.["x-forwarded-for"] ?? req.socket?.remoteAddress ?? "unknown";
  const safeName = escapeHtml(normalizedName);
  const safeEmail = escapeHtml(normalizedEmail);
  const safeMessage = escapeHtml(normalizedMessage).replaceAll("\n", "<br />");
  const submittedAt = formatSubmittedAt();

  try {
    await sendBrevoEmail(apiKey, {
      sender: {
        email: fromEmail,
        name: "Karthik Surya Portfolio",
      },
      to: [{ email: toEmail, name: "Karthik Surya" }],
      replyTo: {
        email: normalizedEmail,
        name: normalizedName,
      },
      subject: `New Portfolio Submission from ${normalizedName}`,
      htmlContent: `${buildOwnerTemplate(safeName, safeEmail, safeMessage, submittedAt)}
        <div style="display:none;">IP: ${escapeHtml(String(ipAddress))}</div>`,
    });

    await sendBrevoEmail(apiKey, {
      sender: {
        email: fromEmail,
        name: "Karthik Surya",
      },
      to: [{ email: normalizedEmail, name: normalizedName }],
      replyTo: {
        email: toEmail,
        name: "Karthik Surya",
      },
      subject: "Thanks for contacting Karthik Surya",
      htmlContent: buildUserTemplate(safeName, safeMessage, submittedAt),
    });

    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact mail send failed:", error);
    return res.status(500).json({
      success: false,
      message: "Unexpected server error while sending your message.",
    });
  }
}
