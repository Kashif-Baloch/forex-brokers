import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Shield, Users, Target, Rocket, Heart, ArrowRight } from "lucide-react";

export default function About() {
  const stats = [
    { value: "3+", label: "Years as a Global Broker" },
    { value: "20+", label: "Years Market Experience" },
    { value: "190+", label: "Countries Reached" },
    { value: "24/7", label: "Client Support" },
  ];

  const values = [
    {
      icon: Users,
      title: "Client First",
      desc: "Our clients' success is our success. We build everything around your needs.",
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      desc: "We utilize advanced encryption and segregated accounts to ensure your assets are always protected.",
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      desc: "We constantly upgrade our technology to give you the trading edge.",
    },
    {
      icon: Heart,
      title: "Transparent & Fair",
      desc: "No hidden fees, no requotes. Just honest, transparent trading conditions.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us | Celestial Trader</title>
        <meta name="description" content="Learn about Celestial Trader's mission to empower traders worldwide with secure infrastructure and transparent conditions." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Shield className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Trusted Global Broker</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Empowering <span className="text-transparent bg-clip-text bg-gold-gradient">Traders</span> Worldwide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We are defining the future of online trading with cutting-edge technology,
            deep liquidity, and an unwavering commitment to transparency.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-medium text-foreground mb-1 group-hover:text-gold-500 transition-colors duration-300 leading-none">{s.value}</div>
                <div className="text-sm font-medium text-muted-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-transparent opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative p-10 bg-card/40 border border-white/10 rounded-2xl backdrop-blur-md">
                <Target className="w-12 h-12 text-gold-500 mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To consistently deliver unparalleled trading solutions through continuous innovation, robust technology, and exceptional client support, enabling traders of all levels to navigate the financial markets with confidence and success.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-l from-blue-500 to-transparent opacity-10 blur-xl rounded-2xl group-hover:opacity-20 transition-opacity" />
              <div className="relative p-10 bg-card/40 border border-white/10 rounded-2xl backdrop-blur-md">
                <Globe className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To empower traders worldwide by democratizing access to institutional-quality trading technology and liquidity, fostering a global community where every trader can achieve their financial aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide every decision we make.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="bg-card/20 border-white/5 hover:bg-card/30 hover:border-gold-500/30 transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-8 text-center pt-10">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-gold-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-gold-500 transition-colors">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-gold-500 text-background">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Experience excellence?</h2>
          <p className="text-xl font-medium mb-10 opacity-90 max-w-2xl mx-auto">
            Join over 2 million traders who trust Celestial Trader for their trading journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="h-14 px-10 text-lg bg-background text-foreground hover:bg-white/90 hover:text-blue-950 font-bold rounded-full shadow-2xl transition-all duration-300">
              <a href="https://client.celestialtrader.com/register">Open Live Account</a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-black/20 text-foreground hover:bg-black/5 font-bold rounded-full transition-all duration-300">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
