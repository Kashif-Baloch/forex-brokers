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

    console.log("Environment vars:", {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_TO_EMAIL: process.env.SMTP_TO_EMAIL,
      SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_SECURE: process.env.SMTP_SECURE,
      SMTP_PASS: process.env.SMTP_PASS,
    });

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
      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS
      ) {
        throw new Error("Missing SMTP configuration");
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
    const { email, firstName, lastName, preferences } = req.body;

    // Enhanced validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Valid email address is required",
        code: "INVALID_EMAIL",
      });
    }

    // Check for disposable email domains (basic check)
    const disposableDomains = [
      "tempmail.org",
      "10minutemail.com",
      "guerrillamail.com",
    ];
    const domain = email.split("@")[1].toLowerCase();
    if (disposableDomains.some(d => domain.includes(d))) {
      return res.status(400).json({
        success: false,
        error: "Please use a permanent email address",
        code: "DISPOSABLE_EMAIL",
      });
    }

    try {
      // Check if SMTP environment variables are set
      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS ||
        !process.env.SMTP_FROM_EMAIL
      ) {
        throw new Error("Missing SMTP configuration");
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

      // Welcome email to subscriber
      const welcomeMailOptions = {
        from: `"Forex Brokers" <${process.env.SMTP_FROM_EMAIL}>`,
        to: email,
        subject: `Welcome to Forex Brokers Newsletter!`,
        text: `
Dear ${firstName || "Trader"},

Thank you for subscribing to the Forex Brokers newsletter!

You'll now receive:
- Daily market analysis and insights
- Trading tips and strategies
- Latest forex market news
- Exclusive broker reviews and comparisons
- Special offers and promotions

If you didn't subscribe to this newsletter, please ignore this email or contact us.

Best regards,
Forex Brokers Team
        `.trim(),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Forex Brokers!</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Your Gateway to Smart Trading</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333; margin-bottom: 20px;">Thank You for Subscribing! 🎉</h2>
              
              <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
                Dear <strong>${firstName || "Trader"}</strong>,
              </p>
              
              <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
                You've successfully subscribed to our premium newsletter! Get ready to receive expert market insights, trading strategies, and exclusive content delivered straight to your inbox.
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #667eea;">
                <h3 style="color: #333; margin-top: 0;">What You'll Receive:</h3>
                <ul style="color: #666; line-height: 1.8;">
                  <li>📊 Daily market analysis and technical insights</li>
                  <li>💡 Proven trading tips and strategies</li>
                  <li>📰 Latest forex market news and updates</li>
                  <li>🔍 Exclusive broker reviews and comparisons</li>
                  <li>🎁 Special offers and promotional deals</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="#" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                  Explore Trading Instruments
                </a>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px; text-align: center;">
                If you didn't subscribe to this newsletter, please ignore this email or contact our support team.
              </p>
            </div>
          </div>
        `,
      };

      // Notification email to admin
      const adminMailOptions = {
        from: `"Newsletter System" <${process.env.SMTP_FROM_EMAIL}>`,
        to: process.env.SMTP_TO_EMAIL || process.env.SMTP_FROM_EMAIL,
        subject: `New Newsletter Subscription: ${email}`,
        text: `
New newsletter subscription details:

Email: ${email}
Name: ${firstName || "Not provided"} ${lastName || ""}
Preferences: ${preferences ? JSON.stringify(preferences, null, 2) : "Default"}
IP Address: ${req.ip || "Not available"}
User Agent: ${req.get("User-Agent") || "Not available"}
Timestamp: ${new Date().toISOString()}
        `.trim(),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #28a745; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0;">🎯 New Newsletter Subscription</h2>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Email:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${firstName || "Not provided"} ${lastName || ""}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferences:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${preferences ? JSON.stringify(preferences) : "Default"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">IP Address:</td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${req.ip || "Not available"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Timestamp:</td>
                  <td style="padding: 8px;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
          </div>
        `,
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(welcomeMailOptions),
        transporter.sendMail(adminMailOptions),
      ]);

      res.json({
        success: true,
        message: "Successfully subscribed! Check your email for confirmation.",
        data: {
          email: email,
          subscribedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to process subscription. Please try again later.",
        code: "SUBSCRIPTION_ERROR",
      });
    }
  });

  // API Route: Unsubscribe from Newsletter
  app.post("/api/unsubscribe", async (req, res) => {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Valid email address is required",
        code: "INVALID_EMAIL",
      });
    }

    try {
      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS ||
        !process.env.SMTP_FROM_EMAIL
      ) {
        throw new Error("Missing SMTP configuration");
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
        from: `"Forex Brokers" <${process.env.SMTP_FROM_EMAIL}>`,
        to: email,
        subject: `You've been unsubscribed from Forex Brokers Newsletter`,
        text: `
You have been successfully unsubscribed from the Forex Brokers newsletter.

We're sorry to see you go! If you change your mind, you can always subscribe again on our website.

If you didn't request this unsubscribe, please contact our support team.

Best regards,
Forex Brokers Team
        `.trim(),
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #dc3545; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 28px;">Unsubscribed Successfully</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">You've been removed from our mailing list</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #333; margin-bottom: 20px;">We're Sorry to See You Go! 👋</h2>
              
              <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
                You have been successfully unsubscribed from the Forex Brokers newsletter. You will no longer receive our market insights, trading tips, and promotional content.
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #dc3545;">
                <h3 style="color: #333; margin-top: 0;">Change Your Mind?</h3>
                <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">
                  You can always subscribe again to continue receiving:
                </p>
                <ul style="color: #666; line-height: 1.8;">
                  <li>📊 Daily market analysis</li>
                  <li>💡 Trading strategies</li>
                  <li>📰 Market news</li>
                  <li>🎁 Exclusive offers</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="#" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                  Subscribe Again
                </a>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
              
              <p style="color: #999; font-size: 12px; text-align: center;">
                If you didn't request this unsubscribe, please contact our support team immediately.
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.json({
        success: true,
        message:
          "Successfully unsubscribed. You will no longer receive our newsletter.",
        data: {
          email: email,
          unsubscribedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error("Unsubscribe error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to process unsubscribe request. Please try again later.",
        code: "UNSUBSCRIBE_ERROR",
      });
    }
  });
}
