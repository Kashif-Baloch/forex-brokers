import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Download, Globe, Smartphone, CheckCircle2, Laptop, Zap, Layers, Monitor } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Platforms() {
  const platforms = [
    {
      name: "MetaTrader 5 Desktop",
      description: "The full power of institutional trading on your PC.",
      icon: Laptop,
      features: [
        "Advanced Charting Suite",
        "Expert Advisors (EAs)",
        "Strategy Tester",
        "80+ Technical Indicators",
        "21 Timeframes",
      ],
      download: "Download for Windows",
      href: "https://download.mql5.com/cdn/web/celestial.trader.alliance/mt5/celestialtrader5setup.exe",
      primary: true,
    },
    {
      name: "MetaTrader 5 Web",
      description: "Trade from any browser without installation.",
      icon: Globe,
      features: [
        "No Installation Required",
        "Access Anywhere",
        "Full Trading Functionality",
        "Secure & Encrypted",
        "Real-time Quotes",
      ],
      download: "Launch Web Trader",
      href: "#",
      primary: false,
    },
    {
      name: "MetaTrader 5 Mobile",
      description: "Monitor and trade your positions on the go.",
      icon: Smartphone,
      features: [
        "iOS & Android Apps",
        "Interactive Charts",
        "Full Trade History",
        "Push Notifications",
        "One-Click Trading",
      ],
      download: "Download App",
      href: "https://download.mql5.com/cdn/mobile/mt5/android?server=CelestialTrader-Real",
      primary: false,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Trading Platforms | Celestial Trader</title>
        <meta name="description" content="Download MetaTrader 5 for PC, iOS, and Android. Trade on the world's most powerful platform with advanced charting and analysis tools." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Zap className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">The Standard for Professionals</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            MetaTrader <span className="text-transparent bg-clip-text bg-gold-gradient">5</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the world's most powerful, multi-asset platform. Advanced technical analysis, algorithmic trading, and copy trading—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold-gradient text-background hover:opacity-90 font-bold px-8 h-12 text-base shadow-lg shadow-gold-500/20">
              <a href="https://download.mql5.com/cdn/web/celestial.trader.alliance/mt5/celestialtrader5setup.exe">
                <Download className="w-5 h-5 mr-2" />
                Download MT5
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-500/50 text-gold-500 hover:bg-gold-500/10 font-bold px-8 h-12 text-base backdrop-blur-sm">
              <a href="#">
                Open Web Trader
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Stats/Features Strip */}
      <div className="w-full border-y border-white/5 bg-card/10 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { label: "Markets", value: "1,000+" },
              { label: "Timeframes", value: "21" },
              { label: "Instructions", value: "80+" },
              { label: "Execution", value: "< 30ms" },
            ].map((stat, i) => (
              <div key={i} className="py-8 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Feature Cards */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">One Platform, Any Device</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're at your desk or on the move, MetaTrader 5 ensures you never miss a market opportunity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <div
                  key={idx}
                  className={`relative group rounded-2xl p-1 ${platform.primary ? 'bg-gradient-to-b from-gold-500/20 to-transparent' : 'bg-white/5'}`}
                >
                  <div className="absolute inset-0 bg-gold-500/5 blur-xl group-hover:bg-gold-500/10 transition-colors duration-500" />
                  <Card className="h-full bg-card/80 backdrop-blur-xl border-white/5 relative z-10 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-8">
                        <div className={`p-4 rounded-xl ${platform.primary ? 'bg-gold-500 text-background' : 'bg-secondary text-gold-500'}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        {platform.primary && (
                          <span className="px-3 py-1 text-xs font-bold bg-gold-500/20 text-gold-500 rounded-full border border-gold-500/20">
                            RECOMMENDED
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                      <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                        {platform.description}
                      </p>

                      <div className="space-y-4 mb-8 flex-grow">
                        {platform.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild className={`w-full font-bold h-12 ${platform.primary ? 'bg-gold-gradient text-background hover:opacity-90' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}>
                        <a href={platform.href}>{platform.download}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full" />
              <img
                src="/mt5-platform-logo.png"
                alt="MT5 Interface"
                className="relative z-10 w-full rounded-lg shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl font-serif font-bold">
                Why Professionals Choose <span className="text-gold-500">MT5</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MetaTrader 5 is an institutional multi-asset platform offering outstanding trading possibilities and technical analysis tools.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Superior Analysis", desc: "Open up to 100 charts at a time.", icon: BarChart3 },
                  { title: "Algorithmic Trading", desc: "Deploy robots and follow signals.", icon: Monitor },
                  { title: "Market Depth", desc: "Secure Level II Pricing.", icon: Layers },
                  { title: "Ultra Fast", desc: "64-bit multi-threaded architecture.", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements Minimal */}
      <section className="py-20 bg-secondary/20 border-t border-white/5">
        <div className="container">
          <div className="bg-card/40 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground">
                  Download MT5 today and experience the future of online trading.
                  Compatible with Windows, macOS, iOS, and Android.
                </p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" /> Windows 7 or higher
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" /> macOS 10.12 or higher
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" /> 512MB RAM Min.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Master the Markets with MT5
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-gold-gradient text-background hover:scale-105 transition-transform duration-300 font-bold text-lg shadow-xl shadow-gold-500/20">
              <a href="https://download.mql5.com/cdn/web/celestial.trader.alliance/mt5/celestialtrader5setup.exe">
                Download Now
              </a>
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
}
