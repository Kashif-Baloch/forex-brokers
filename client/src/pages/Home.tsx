import Layout from "@/components/layout/Layout";
import PriceTicker from "@/components/PriceTicker";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Award,
  BarChart3,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Lock,
  Check,
  Crown,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Home() {
  // Temporary New Year 2026 Theme - Auto-reverts after Jan 8, 2026
  const isNewYear = new Date() < new Date('2026-01-08');

  const testimonials = [
    {
      name: "John Smith",
      role: "Professional Trader",
      content: "Excellent execution speed and tight spreads. Best broker I've traded with.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Day Trader",
      content: "24/7 customer support is outstanding. They always help when I need them.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Forex Investor",
      content: "Low commissions and great trading conditions. Highly recommended!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Ultra-Fast Execution",
      desc: "Trade with lightning-fast execution speeds, zero rejections, and no requotes.",
    },
    {
      icon: BarChart3,
      title: "Tight Spreads",
      desc: "Trade with spreads as low as 0.0 pips on major pairs. No hidden costs.",
    },
    {
      icon: Shield,
      title: "Secure & Regulated",
      desc: "Multi-regulated broker with partnerships to top global financial institutions.",
    },
    {
      icon: Globe,
      title: "1,400+ Instruments",
      desc: "Access forex, indices, commodities, cryptocurrencies, and more.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Award-winning customer support available around the clock in multiple languages.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Tools",
      desc: "Trade with MetaTrader 5, advanced charting, and professional trading tools.",
    },
  ];

  const stats = [
    { value: "3+", label: "Years as a Global Broker" },
    { value: "20+", label: "Years Market Experience" },
    { value: "190+", label: "Countries Reached" },
    { value: "24/7", label: "Client Support" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Celestial Trader | Global Forex & CFD Broker</title>
        <meta name="description" content="Trade Global Markets with Institutional Quality. Access Forex, Indices, and Commodities with low spreads and fast execution." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Trading background"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent ${isNewYear ? 'mix-blend-overlay opacity-90' : ''}`} />
          {isNewYear && (
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-color-dodge pointer-events-none" />
          )}
        </div>

        {/* Content */}
        <div className="container relative z-10 max-w-4xl">
          <div className="text-center space-y-6">
            <div className={`inline-block px-4 py-2 rounded-full ${isNewYear ? 'bg-gold-500 text-background font-bold shadow-lg shadow-gold-500/20' : 'bg-gold-500/10 border border-gold-500/30 text-gold-400 font-semibold'} text-sm`}>
              {isNewYear ? "✨ New Year 2026 Edition" : "Built for a New Generation of Traders"}
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
              {isNewYear ? (
                <>
                  <span className="bg-gradient-to-r from-gold-300 via-white to-gold-500 bg-clip-text text-transparent drop-shadow-sm">
                    Start 2026 with a
                  </span>
                  <span className="block text-gold-400">Winning Edge</span>
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-gold-400 via-white to-gold-500 bg-clip-text text-transparent">
                    Trade Global Markets with
                  </span>
                  <span className="block text-gold-400">Institutional Quality</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {isNewYear
                ? "Kickstart your portfolio with enhanced conditions and exclusive New Year rewards. Your gateway to success starts now."
                : "Experience institutional-grade execution, ultra-low spreads, and premium support. Your gateway to global financial markets starts here."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gold-gradient text-background hover:opacity-90 font-bold text-base px-8">
                <a href="https://client.celestialtrader.com/login">
                  {isNewYear ? "Get Started 2026" : "Start Trading"}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10 font-bold text-base px-8">
                <a href="https://client.celestialtrader.com/login">
                  {isNewYear ? "Try 2026 Demo" : "Open Demo Account"}
                </a>
              </Button>
            </div>

            <p className="text-xs text-gray-400 pt-2">
              Risk Warning: Forex and CFD trading involve a high risk of loss. Please see our risk disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* Price Ticker */}
      <PriceTicker />

      {/* Stats Section */}
      <section className="bg-card/50 border-y border-white/5 py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-medium text-gold-400 mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Trade With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to trade successfully in global financial markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-card/30 border-white/5 hover:border-gold-500/30 transition-colors group">
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Account Types Preview */}
      <section className="bg-card/30 border-y border-white/5 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Choose Your Account Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the account that best fits your trading style and experience level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Classic",
                spread: "From 1.2 pips",
                leverage: "Up to 1:500",
                deposit: "$100",
              },
              {
                name: "Standard",
                spread: "From 0.8 pips",
                leverage: "Up to 1:500",
                deposit: "$500",
                featured: true,
              },
              {
                name: "Pro",
                spread: "From 0.0 pips",
                leverage: "Up to 1:200",
                deposit: "$10,000",
              },
            ].map((account, idx) => (
              <Card
                key={idx}
                className={`relative flex flex-col transition-all duration-300 hover:-translate-y-2 ${account.featured
                  ? 'bg-gradient-to-b from-card/80 to-gold-500/5 border-gold-500 shadow-xl shadow-gold-500/10'
                  : 'bg-card/40 border-white/10 hover:border-gold-500/30'
                  } backdrop-blur-md`}
              >
                {account.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-background text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-current" /> MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8 pt-10">
                  <h3 className="text-2xl font-bold mb-6">{account.name}</h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground">Spread</p>
                      <p className="text-lg font-semibold text-gold-400">
                        {account.spread}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Leverage</p>
                      <p className="text-lg font-semibold">{account.leverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Min Deposit</p>
                      <p className="text-lg font-semibold">{account.deposit}</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className={`w-full ${account.featured
                      ? "bg-gold-gradient text-background hover:opacity-90"
                      : "bg-background border border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                      }`}
                  >
                    <a href="https://client.celestialtrader.com/register">
                      Open Account
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/accounts">
              <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
                View All Account Types
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Platforms */}
      {/* Trading Platforms */}
      <section className="py-10 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Professional Trading Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trade with industry-leading platforms designed for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-32">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">MetaTrader 5</h3>
                <p className="text-muted-foreground">
                  The world's most popular trading platform. Trade forex, indices, commodities, and cryptocurrencies with advanced charting and analysis tools.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                    Advanced technical analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                    Expert Advisors (EAs)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                    Mobile & Web versions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                    Copy trading
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gold-gradient text-background hover:opacity-90 font-bold">
                  <a href="https://download.mql5.com/cdn/web/celestial.trader.alliance/mt5/celestialtrader5setup.exe">
                    Download for Windows
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10 font-bold">
                  <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=CelestialTrader-Real">
                    Android App
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10 font-bold">
                  <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=CelestialTrader-Real">
                    iOS App
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card/30 border border-white/5 rounded-lg overflow-hidden flex items-center justify-center min-h-[300px] h-full p-8">
              <img
                src="/mt5-platform-logo.png"
                alt="MetaTrader 5 Platform"
                className="w-full h-auto object-contain max-h-[250px]"
              />
            </div>
          </div>

          {/* Copy Trading Integration */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">
                  Copy Trading
                </h3>
                <h4 className="text-xl text-gold-400 font-medium">
                  Automatically copy professional traders in real time
                </h4>
              </div>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                Unlock the potential of the financial markets by automatically copying the trades of experienced professionals. No experience needed—just choose a trader, set your budget, and let their success become yours.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Expert Traders", desc: "Follow verified professionals" },
                  { title: "Real-time Sync", desc: "Instant trade execution" },
                  { title: "Full Control", desc: "Pause or stop anytime" },
                  { title: "Transparent", desc: "View full performance history" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-card/40 border border-white/5 p-4 rounded-lg hover:border-gold-500/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center mb-3">
                      <Check className="w-4 h-4 text-gold-400" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-gold-gradient text-background hover:opacity-90 font-bold px-8">
                  <a href="https://client.celestialtrader.com/register">
                    Start Copying
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10 font-bold">
                  <Link href="/copy-trade">
                    View Top Traders
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual - Trader Card Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500/20 blur-[60px] rounded-full" />
              <Card className="relative bg-card/80 backdrop-blur-xl border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient" />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                        <Shield className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Alpha_Fin</h3>
                        <p className="text-sm text-muted-foreground">
                          Verified Strategy Provider
                        </p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold border border-gold-500/20">
                      Verified
                    </div>
                  </div>

                  {/* Mock Chart Area */}
                  <div className="h-20 w-full bg-gradient-to-t from-gold-500/5 to-transparent border-b border-white/5 relative mb-4">
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0 40 L0 35 Q10 32 20 30 T40 25 T60 22 T80 15 L100 10 L100 40 Z" fill="url(#goldGradient)" opacity="0.1" />
                      <path d="M0 35 Q10 32 20 30 T40 25 T60 22 T80 15 L100 10" fill="none" stroke="#E6B325" strokeWidth="1.5" />
                      <defs>
                        <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E6B325" />
                          <stop offset="100%" stopColor="#E6B325" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="grid grid-cols-6 gap-y-3 gap-x-2 text-center">
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground mb-1">All Time Gain</p>
                      <p className="font-bold text-green-500">886.19%</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground mb-1">30 Days Gain</p>
                      <p className="font-bold text-green-500">13.61%</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
                      <p className="font-bold text-gold-500">0.42%</p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-xs text-muted-foreground mb-1">Commission</p>
                      <p className="font-bold">0%</p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-xs text-muted-foreground mb-1">Trades</p>
                      <p className="font-bold">3,200</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-gold-gradient text-background hover:opacity-90 font-bold">
                      Copy Strategy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10 opacity-50" />
        <div className="container relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Ready to Start Trading?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join millions of traders and start your journey to financial success today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold-gradient text-background hover:opacity-90 font-bold text-base px-8">
                <a href="https://client.celestialtrader.com/login">Open Live Account</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10 font-bold text-base px-8">
                <a href="https://client.celestialtrader.com/login">Try Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
