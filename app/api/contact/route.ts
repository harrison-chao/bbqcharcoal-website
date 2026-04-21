import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "expo@arterki.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "BBQ Charcoal Export <onboarding@resend.dev>";

type ContactPayload = {
  company?: string;
  email?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;width:160px;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${escapeHtml(value) || "-"}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const company = clean(payload.company);
  const email = clean(payload.email);
  const country = clean(payload.country);
  const product = clean(payload.product);
  const quantity = clean(payload.quantity);
  const message = clean(payload.message);

  const missing = [
    ["company", company],
    ["email", email],
    ["country", country],
    ["product", product],
    ["quantity", quantity],
  ]
    .filter(([, value]) => !value)
    .map(([field]) => field);

  if (missing.length) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured. Missing RESEND_API_KEY." },
      { status: 503 },
    );
  }

  const subject = `New BBQ charcoal inquiry from ${company}`;
  const html = `
    <div style="font-family:Arial,sans-serif;background:#f9fafb;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <div style="background:#111827;color:#ffffff;padding:20px 24px;">
          <h1 style="margin:0;font-size:20px;">New BBQ Charcoal Export Inquiry</h1>
          <p style="margin:8px 0 0;color:#fed7aa;">A buyer submitted the quote form on bbqcharcoalexport.com.</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Company", company)}
          ${row("Email", email)}
          ${row("Country", country)}
          ${row("Product", product)}
          ${row("Quantity", quantity)}
          ${row("Message", message)}
        </table>
      </div>
    </div>
  `;

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject,
      html,
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    return NextResponse.json(
      { error: result?.message || "Failed to send inquiry email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, id: result?.id });
}
