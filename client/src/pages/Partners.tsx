import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, PieChart, Users, Briefcase, Globe, Target, ArrowRight, Handshake } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Partners() {
  const models = [
    {
      icon: Users,
      title: "Introducing Broker (IB)",
      desc: "Earn competitive rebates for every client you refer. Ideal for educators, signal providers, and trading communities.",
      features: ["Up to $15 per lot rebate", "Daily payouts", "Real-time reporting"]
    },
    {
      icon: Globe,
      title: "Affiliate Program",
      desc: "Monetize your traffic with our high-conversion affiliate offers. Perfect for bloggers, continuous marketers, and media buyers.",
      features: ["CPA up to $1,200", "High conversion rates", "Custom marketing materials"]
    },
    {
      icon: Briefcase,
      title: "White Label",
      desc: "Start your own brokerage with our turnkey solution. We provide the technology, liquidity, and regulation.",
      features: ["Full branding control", "Multi-asset liquidity", "All-in-one CRM"]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Partnership Program | Celestial Trader</title>
        <meta name="description" content="Join our IB and Affiliate programs. Earn competitive commissions by referring traders. High conversion rates and top-tier support." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6 backdrop-blur-md">
            <Handshake className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Celestial Partner Program</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Grow Your Business with a <br />
            <span className="text-transparent bg-clip-text bg-gold-gradient">Trusted Trading Partner</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Join the industry's most rewarding partnership program. Whether you are an IB, Affiliate, or institutional partner,
            we provide the tools and conditions you need to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="h-14 px-10 text-lg bg-gold-gradient text-background hover:scale-105 transition-all duration-300 font-bold rounded-full shadow-[0_0_20px_rgba(230,179,37,0.3)]">
              <a href="https://client.celestialtrader.com/login">Become a Partner</a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/10 hover:bg-white/5 hover:text-gold-500 font-bold rounded-full backdrop-blur-sm transition-all duration-300">
              View Commission Structure
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "Established", label: "Partner Program" },
              { value: "Experienced", label: "Industry Team" },
              { value: "Worldwide", label: "Partner Network" },
              { value: "Dedicated", label: "Partner Support" },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-lg md:text-xl font-medium text-foreground mb-1 group-hover:text-gold-500 transition-colors duration-300 tracking-wide">{s.value}</div>
                <div className="text-sm font-light uppercase tracking-widest text-muted-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Choose Your Partnership Model</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tailored solutions designed to maximize your earnings potential.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, idx) => {
              const Icon = model.icon;
              return (
                <Card key={idx} className="bg-card/30 border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 pt-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-gold-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{model.title}</h3>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed h-20">
                      {model.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {model.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-white/10 hover:bg-gold-500 hover:text-background hover:border-gold-500 transition-all duration-300 font-bold group-hover:bg-gold-500 group-hover:text-background group-hover:border-gold-500" asChild>
                      <a href="https://client.celestialtrader.com/register">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Partner With Celestial Trader?</h2>
            <p className="text-muted-foreground text-lg">We provide everything you need to convert traffic and retain clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Instant Payouts", desc: "Withdraw your commissions anytime via multiple payment methods." },
              { icon: PieChart, title: "Advanced Tracking", desc: "Real-time dashboard to track clicks, registrations, and commissions." },
              { icon: Target, title: "Marketing Tools", desc: "Access high-converting banners, landing pages, and widgets." },
              { icon: Users, title: "Dedicated Support", desc: "Your personal account manager is available 24/5 to help you grow." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card/20 border border-white/5 hover:bg-card/40 transition-colors">
                <item.icon className="w-10 h-10 text-gold-500 mb-4 opacity-80" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 relative overflow-hidden bg-gold-500">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-background mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-background/80 font-medium mb-10 max-w-2xl mx-auto">
            Join thousands of successful partners who have chosen Celestial Trader.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="h-14 px-12 text-lg bg-background text-foreground hover:bg-white/90 hover:text-blue-950 font-bold rounded-full shadow-xl transition-all duration-300">
              <a href="https://client.celestialtrader.com/login">Register as Partner</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
