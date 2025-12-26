import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Play, Zap, GraduationCap, Video, BarChart2, Clock, Bell, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Education() {
  const courses = [
    {
      title: "Forex Trading Basics",
      description: "A complete guide to understanding currency pairs, pips, lots, and market mechanics.",
      level: "Beginner",
      duration: "Planned: 2 hours",
      modules: "12 Modules",
      icon: BookOpen
    },
    {
      title: "Technical Analysis Masterclass",
      description: "Deep dive into chart patterns, indicators, and price action strategies.",
      level: "Intermediate",
      duration: "Planned: 4 hours",
      modules: "24 Modules",
      icon: BarChart2
    },
    {
      title: "Risk Management Essentials",
      description: "The most critical skill for any trader: protecting your capital and sizing positions.",
      level: "Beginner",
      duration: "Planned: 1.5 hours",
      modules: "8 Modules",
      icon: Zap
    },
    {
      title: "Advanced Institutional Strategies",
      description: "Learn how the big banks trade and how to follow smart money flow.",
      level: "Advanced",
      duration: "Planned: 6 hours",
      modules: "30 Modules",
      icon: GraduationCap
    },
    {
      title: "Indices & Commodities Mastery",
      description: "Specialized strategies for trading Gold, Oil, US30, and NASDAQ.",
      level: "Intermediate",
      duration: "Planned: 3 hours",
      modules: "15 Modules",
      icon: Video
    },
    {
      title: "Crypto Trading 101",
      description: "Navigating the volatile world of cryptocurrencies and blockchain assets.",
      level: "Beginner",
      duration: "Planned: 2.5 hours",
      modules: "10 Modules",
      icon: Play
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Trading Education | Celestial Trader</title>
        <meta name="description" content="Master the markets with our comprehensive trading education. Access courses, webinars, and expert analysis." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Clock className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Launching Soon</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Celestial <span className="text-transparent bg-clip-text bg-gold-gradient">Academy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            We are building a world-class education hub to empower your trading journey.
            Get ready for comprehensive courses, live mentorship, and expert analysis.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gold-gradient text-background hover:opacity-90 font-bold rounded-full px-8">
              <Mail className="w-4 h-4 mr-2" />
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Preview Strip */}
      <section className="py-12 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">What to Expect</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Video, label: "HD Video Lessons" },
              { icon: BookOpen, label: "Interactive Quizzes" },
              { icon: Play, label: "Live Mentorship" },
              { icon: Zap, label: "Daily Signals" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-center gap-4 group opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-gold-500" />
                </div>
                <span className="font-serif text-lg font-bold text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Curriculum */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Upcoming Curriculum</h2>
              <p className="text-muted-foreground">A sneak peek at the courses currently in production.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <Card key={idx} className="bg-card/20 border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:-translate-y-2 flex flex-col grayscale hover:grayscale-0">
                  <div className="h-48 bg-gradient-to-br from-gold-500/5 to-transparent relative overflow-hidden border-b border-white/5 group-hover:from-gold-500/10 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-gold-500/30 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-muted-foreground uppercase">
                      {course.level}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 line-clamp-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-1">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-6 font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4" /> {course.modules}
                      </div>
                    </div>

                    <Button disabled className="w-full bg-white/5 text-muted-foreground font-bold cursor-not-allowed border border-white/5">
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webinar Teaser */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="bg-gradient-to-r from-card to-card/50 border border-gold-500/20 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 text-gold-500 mb-4">
                  <Bell className="w-4 h-4 animate-bounce" />
                  <span className="text-sm font-bold uppercase tracking-wider">Don't Miss Out</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Live Market Analysis</h2>
                <p className="text-lg text-muted-foreground mb-8 text-justify">
                  Our senior analysts will soon be hosting daily live streams, breaking down market moves in real-time.
                  Register your interest to get notified when we go live.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gold-gradient text-background hover:opacity-90 font-bold">
                    Notify Me When Live
                  </Button>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl aspect-video border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/chart-preview.jpg')] bg-cover opacity-20 blur-sm" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Starting Soon</h3>
                  <p className="text-muted-foreground">Stay tuned for updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">While you wait...</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            You can still start practicing. Open a demo account today and be ready when our academy launches.
          </p>
          <Button size="lg" className="h-14 px-10 text-lg bg-gold-gradient text-background hover:opacity-90 font-bold rounded-full">
            <a href="https://client.celestialtrader.com/login">Open Demo Account</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
