import type { Express } from "express";
import nodemailer from "nodemailer";

export function registerRoutes(app: Express) {
  // API Route: Get Instruments
  app.get("/api/instruments", (_req, res) => {
    const instruments = {
      forex: [
        {
          symbol: "EURUSD",
          name: "Euro vs US Dollar",
          spread: "0.1",
          leverage: "1:500",
        },
        {
          symbol: "GBPUSD",
          name: "Great Britain Pound vs US Dollar",
          spread: "0.3",
          leverage: "1:500",
        },
        {
          symbol: "USDJPY",
          name: "US Dollar vs Japanese Yen",
          spread: "0.2",
          leverage: "1:500",
        },
      ],
      indices: [
        {
          symbol: "US500",
          name: "US SPX 500 Index",
          spread: "0.4",
          leverage: "1:200",
        },
        {
          symbol: "US30",
          name: "US Wall Street 30 Index",
          spread: "1.5",
          leverage: "1:200",
        },
      ],
      commodities: [
        {
          symbol: "XAUUSD",
          name: "Gold vs US Dollar",
          spread: "0.15",
          leverage: "1:200",
        },
        {
          symbol: "USOIL",
          name: "US Crude Oil",
          spread: "0.03",
          leverage: "1:100",
        },
      ],
      crypto: [
        {
          symbol: "BTCUSD",
          name: "Bitcoin vs US Dollar",
          spread: "15.0",
          leverage: "1:20",
        },
        {
          symbol: "ETHUSD",
          name: "Ethereum vs US Dollar",
          spread: "1.5",
          leverage: "1:20",
        },
      ],
    };
    res.json(instruments);
  });

  // API Route: Get Account Types
  app.get("/api/account-types", (_req, res) => {
    const accounts = [
      {
        name: "Classic",
        desc: "Perfect for new traders",
        deposit: "$100",
        spread: "From 1.2",
        commission: "None",
        leverage: "Up to 1:500",
      },
      {
        name: "ECN VIP",
        desc: "Raw spreads for pros",
        deposit: "$500",
        spread: "From 0.0",
        commission: "$7/lot",
        leverage: "Up to 1:500",
      },
      {
        name: "Platinum",
        desc: "Institutional grade",
        deposit: "$10,000",
        spread: "From 0.0",
        commission: "$5/lot",
        leverage: "Up to 1:200",
      },
    ];
    res.json(accounts);
  });

  // API Route: Contact Form Submission
  // API Route: Contact Form Submission
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message, website } = req.body;

    // Honeypot check
    if (website) {
      return res.json({ success: true, message: "Message received" });
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    try {
      // Check if SMTP environment variables are set
      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('Missing SMTP configuration');
      }
      
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_FROM_EMAIL}>`,
        to: process.env.SMTP_TO_EMAIL,
        subject: `Website Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Email send error:", error);
      res.status(500).json({ success: false, error: "Failed to send message" });
    }
  });

  // API Route: Newsletter Subscription
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Valid email is required" });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Website Subscriber" <${process.env.SMTP_FROM_EMAIL}>`,
        to: email,
        subject: `New Newsletter Subscription`,
        text: `New subscriber email: ${email}`,
        html: `
          <h3>New Newsletter Subscription</h3>
          <p><strong>Email:</strong> ${email}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Subscribed successfully" });
    } catch (error) {
      console.error("Subscription error:", error);
      res.status(500).json({ success: false, error: "Failed to subscribe" });
    }
  });
}
