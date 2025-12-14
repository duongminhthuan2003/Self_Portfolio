// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { name, email, messageTitle, message } = await req.json();

  if (!name || !email || !messageTitle || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `[Portfolio] ${messageTitle}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}