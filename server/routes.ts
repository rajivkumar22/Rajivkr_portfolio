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

      const msg = {
        to: "kumarrajiv12945@gmail.com", // Your email to receive messages
        from: "kumarrajiv12945@gmail.com", // Use verified sender email
        replyTo: from, // Set the sender's email as reply-to
        subject: `Portfolio Contact: ${subject}`,
        text: `From: ${from}\n\n${text}`,
        html: `
          <h3>New Portfolio Contact Message</h3>
          <p><strong>From:</strong> ${from}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${html || text}</p>
        `,
      };

      await sgMail.send(msg);

      res.json({ success: true });
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
