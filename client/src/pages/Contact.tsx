import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare, Clock, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Received non-JSON response from server");
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Celestial Trader</title>
        <meta name="description" content="Get in touch with our 24/7 global support team via live chat, email, or phone. We are here to help." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <MessageSquare className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">24/5 Global Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Let's Start a <span className="text-transparent bg-clip-text bg-gold-gradient">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you have a question about our platforms, need assistance with your account, or want to partner with us, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Phone Support", info: "+17587163861", sub: "Mon-Fri, 24 Hours" },
              { icon: Mail, title: "Email Us", info: "support@celestialtrader.com", sub: "Response within 24h" },
              { icon: MapPin, title: "Visit Us", info: "Reduit Rise, Rodney Bay", sub: "Gros Islet, Saint Lucia" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 border border-white/5 hover:border-gold-500/30 transition-all group">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-bold text-lg text-foreground mb-1">{item.info}</p>
                <p className="text-sm text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-4">Send us a message</h2>
                <p className="text-muted-foreground">Fill out the form below and one of our specialists will get back to you shortly.</p>
              </div>

              <Card className="border-white/10 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-gold-500/50 transition-colors" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-gold-500/50 transition-colors" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="How can we help?" className="bg-background/50 border-white/10 focus:border-gold-500/50 transition-colors" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Type your message here..." className="min-h-[150px] bg-background/50 border-white/10 focus:border-gold-500/50 transition-colors" required />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gold-gradient text-background font-bold hover:opacity-90" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Global Headquarters (Preserved Image) */}
            <div className="space-y-8 flex flex-col">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-4">Our Locations</h2>
                <p className="text-muted-foreground">We have physical presence in key financial hubs around the world.</p>
              </div>

              <div className="h-[calc(100%-4rem)] relative rounded-3xl overflow-hidden border border-white/10 bg-card/50 flex items-center justify-center group mt-auto">
                {/* Preserved Image */}
                <div className="absolute inset-0">
                  <img
                    src="/global-network.jpg"
                    alt="Global Network"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700 blur-[2px] group-hover:blur-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-sm">
                  <div className="bg-background/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl mx-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="inline-flex items-center gap-2 mb-4 text-gold-500">
                      <Globe className="w-5 h-5" />
                      <span className="font-bold uppercase tracking-wider text-xs">Headquarters</span>
                    </div>
                    <h3 className="font-serif text-3xl font-bold mb-4">Saint Lucia</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Reduit Rise, Rodney Bay<br />
                      Gros Islet<br />
                      Saint Lucia
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Open Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
