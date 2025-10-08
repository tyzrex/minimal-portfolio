import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email to you (receiving the contact form)
    const mailToYou = await resend.emails.send({
      from: "noreply@sulavbaral.com.np",
      to: "sulavbaral58@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d5211b; border-bottom: 2px solid #d5211b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #d5211b; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f5e8; border-radius: 5px;">
            <p style="margin: 0; color: #2d5a2d;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    // Auto-reply email to the sender
    const autoReply = await resend.emails.send({
      from: "noreply@sulavbaral.com.np",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d5211b; border-bottom: 2px solid #d5211b; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${
        message.length > 100 ? "..." : ""
      }</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my <a href="https://github.com/tyzrex" style="color: #d5211b;">GitHub</a> for my latest projects</li>
            <li>Connect with me on <a href="https://www.instagram.com/sulav_baral_58/" style="color: #d5211b;">Instagram</a></li>
            <li>View my work experience and skills on my website</li>
          </ul>
          
          <p>I'm currently available for freelance projects and full-time opportunities, so I'm excited to discuss your project!</p>
          
          <p>Best regards,<br>
          <strong>Sulav Baral</strong><br>
          Frontend Developer<br>
          <a href="mailto:sulavbaral58@gmail.com" style="color: #d5211b;">sulavbaral58@gmail.com</a></p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #fff3f3; border-radius: 5px; border-left: 4px solid #d5211b;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This is an automated response. Please do not reply to this email directly.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        ids: {
          notification: mailToYou.data?.id,
          autoReply: autoReply.data?.id,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
