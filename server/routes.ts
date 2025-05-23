import type { Express } from "express";
import { createServer, type Server } from "http";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || process.env.SENDGRID_KEY || "";
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Email sending endpoint
  app.post("/api/send-email", async (req, res) => {
    try {
      if (!SENDGRID_API_KEY) {
        return res.status(500).json({ 
          success: false, 
          error: "SendGrid API key not configured" 
        });
      }

      const { to, from, subject, text, html } = req.body;

      if (!to || !from || !subject || (!text && !html)) {
        return res.status(400).json({ 
          success: false, 
          error: "Missing required fields" 
        });
      }

      // Use a verified sender domain or the same email for from field
      const msg = {
        to: "kumarrajiv2945@gmail.com",
        from: "kumarrajiv2945@gmail.com", // Must be verified in SendGrid
        replyTo: from,
        subject: `Portfolio Contact: ${subject}`,
        text: `New message from your portfolio website:\n\nFrom: ${from}\nSubject: ${subject}\n\nMessage:\n${text}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6;">New Portfolio Contact Message</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${from}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3>Message:</h3>
              <p style="line-height: 1.6;">${html || text}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        `,
      };

      const result = await sgMail.send(msg);
      console.log('Email sent successfully:', result[0].statusCode);

      res.json({ success: true, messageId: result[0].headers['x-message-id'] });
    } catch (error) {
      console.error("SendGrid error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to send email" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
