import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bitcoin, CandlestickChart, Coins, Globe, ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

// Mock data
const instrumentsData = {
  forex: [
    { symbol: "EURUSD", name: "Euro vs US Dollar", spread: "0.1", leverage: "1:500", change: "+0.23%" },
    { symbol: "GBPUSD", name: "Great Britain Pound", spread: "0.3", leverage: "1:500", change: "-0.11%" },
    { symbol: "USDJPY", name: "US Dollar vs Yen", spread: "0.2", leverage: "1:500", change: "+0.45%" },
    { symbol: "AUDUSD", name: "Australian Dollar", spread: "0.4", leverage: "1:500", change: "-0.08%" },
    { symbol: "USDCAD", name: "US Dollar vs CAD", spread: "0.5", leverage: "1:500", change: "+0.12%" },
    { symbol: "USDCHF", name: "US Dollar vs Franc", spread: "0.5", leverage: "1:500", change: "-0.21%" },
  ],
  indices: [
    { symbol: "US500", name: "S&P 500", spread: "0.4", leverage: "1:200", change: "+1.2%" },
    { symbol: "US30", name: "Dow Jones 30", spread: "1.5", leverage: "1:200", change: "+0.8%" },
    { symbol: "DE40", name: "DAX 40", spread: "0.8", leverage: "1:200", change: "-0.5%" },
    { symbol: "UK100", name: "FTSE 100", spread: "1.0", leverage: "1:200", change: "+0.3%" },
  ],
  metals: [
    { symbol: "XAUUSD", name: "Gold vs US Dollar", spread: "0.15", leverage: "1:200", change: "+0.65%" },
    { symbol: "XAGUSD", name: "Silver vs US Dollar", spread: "0.02", leverage: "1:100", change: "-1.2%" },
    { symbol: "XPTUSD", name: "Platinum", spread: "2.5", leverage: "1:50", change: "+0.1%" },
    { symbol: "XPDUSD", name: "Palladium", spread: "4.0", leverage: "1:50", change: "-0.8%" },
  ],
  crypto: [
    { symbol: "BTCUSD", name: "Bitcoin", spread: "15.0", leverage: "1:20", change: "+2.5%" },
    { symbol: "ETHUSD", name: "Ethereum", spread: "1.5", leverage: "1:20", change: "+1.8%" },
    { symbol: "SOLUSD", name: "Solana", spread: "0.2", leverage: "1:10", change: "+5.4%" },
    { symbol: "XRPUSD", name: "Ripple", spread: "0.01", leverage: "1:10", change: "-0.5%" },
  ]
};

export default function Instruments() {
  const [activeTab, setActiveTab] = useState("forex");
  const [data, setData] = useState(instrumentsData.forex);

  useEffect(() => {
    // @ts-ignore
    setData(instrumentsData[activeTab as keyof typeof instrumentsData] || instrumentsData.forex);
  }, [activeTab]);

  return (
    <Layout>
      <Helmet>
        <title>Trading Instruments | Celestial Trader</title>
        <meta name="description" content="Trade 1,400+ markets including Forex, Indices, Commodities, and Crypto. Institutional execution with raw spreads." />
      </Helmet>
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Global <span className="text-transparent bg-clip-text bg-gold-gradient">Markets</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Access over 500 tradeable instruments across Forex, Metals, Indices, and Crypto.
              Institutional-grade execution with raw spreads from 0.0 pips.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-gold-gradient text-background hover:opacity-90 font-bold px-8 h-12">
                <a href="https://client.celestialtrader.com/register">Start Trading</a>
              </Button>
            </div>
          </div>

          {/* Decorative Chart Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gold-500/20 blur-[60px] rounded-full opacity-50" />
            <div className="relative bg-card/10 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent pointer-events-none" />

              {/* Mock Chart Area */}
              <div className="h-[280px] w-full relative overflow-hidden flex items-end px-4 pb-8">
                <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="volGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Grid Lines */}
                  <path d="M0 40 H400 M0 80 H400 M0 120 H400 M0 160 H400" stroke="white" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Moving Average Line */}
                  <path d="M0 160 C 50 150, 80 140, 120 100 S 180 70, 240 80 S 300 40, 360 45 L 400 40" fill="none" stroke="#d4af37" strokeWidth="2" strokeOpacity="0.5" className="animate-pulse" />

                  {/* Volume Bars */}
                  <rect x="25" y="180" width="10" height="20" fill="url(#volGradient)" />
                  <rect x="55" y="170" width="10" height="30" fill="url(#volGradient)" />
                  <rect x="85" y="185" width="10" height="15" fill="url(#volGradient)" />
                  <rect x="115" y="175" width="10" height="25" fill="url(#volGradient)" />
                  <rect x="145" y="190" width="10" height="10" fill="url(#volGradient)" />
                  <rect x="175" y="160" width="10" height="40" fill="url(#volGradient)" />
                  <rect x="205" y="185" width="10" height="15" fill="url(#volGradient)" />
                  <rect x="235" y="165" width="10" height="35" fill="url(#volGradient)" />
                  <rect x="265" y="192" width="10" height="8" fill="url(#volGradient)" />
                  <rect x="295" y="180" width="10" height="20" fill="url(#volGradient)" />
                  <rect x="325" y="170" width="10" height="30" fill="url(#volGradient)" />
                  <rect x="355" y="165" width="10" height="35" fill="url(#volGradient)" />

                  {/* Candlesticks */}
                  {/* Candle 1 (Bull) */}
                  <line x1="30" y1="140" x2="30" y2="170" stroke="#d4af37" strokeWidth="1" />
                  <rect x="25" y="150" width="10" height="15" fill="#d4af37" />

                  {/* Candle 2 (Bear) */}
                  <line x1="60" y1="130" x2="60" y2="160" stroke="#ef4444" strokeWidth="1" />
                  <rect x="55" y="135" width="10" height="20" fill="none" stroke="#ef4444" strokeWidth="1.5" />

                  {/* Candle 3 (Bull) */}
                  <line x1="90" y1="110" x2="90" y2="140" stroke="#d4af37" strokeWidth="1" />
                  <rect x="85" y="115" width="10" height="20" fill="#d4af37" />

                  {/* Candle 4 (Bull - Big move) */}
                  <line x1="120" y1="80" x2="120" y2="120" stroke="#d4af37" strokeWidth="1" />
                  <rect x="115" y="85" width="10" height="30" fill="#d4af37" filter="url(#glow)" />

                  {/* Candle 5 (Bear - Retrace) */}
                  <line x1="150" y1="90" x2="150" y2="110" stroke="#ef4444" strokeWidth="1" />
                  <rect x="145" y="95" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />

                  {/* Candle 6 (Bull - Continuation) */}
                  <line x1="180" y1="60" x2="180" y2="100" stroke="#d4af37" strokeWidth="1" />
                  <rect x="175" y="65" width="10" height="30" fill="#d4af37" />

                  {/* Candle 7 (Bear - Small) */}
                  <line x1="210" y1="60" x2="210" y2="80" stroke="#ef4444" strokeWidth="1" />
                  <rect x="205" y="65" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />

                  {/* Candle 8 (Bull - Breakout) */}
                  <line x1="240" y1="30" x2="240" y2="70" stroke="#d4af37" strokeWidth="1" />
                  <rect x="235" y="35" width="10" height="30" fill="#d4af37" filter="url(#glow)" />

                  {/* Candle 9 (Doji) */}
                  <line x1="270" y1="25" x2="270" y2="45" stroke="#ef4444" strokeWidth="1" />
                  <rect x="265" y="35" width="10" height="2" fill="#ef4444" />

                  {/* Candle 10 (Bull) */}
                  <line x1="300" y1="20" x2="300" y2="50" stroke="#d4af37" strokeWidth="1" />
                  <rect x="295" y="25" width="10" height="15" fill="#d4af37" />

                  {/* Candle 11 (Bear) */}
                  <line x1="330" y1="30" x2="330" y2="60" stroke="#ef4444" strokeWidth="1" />
                  <rect x="325" y="40" width="10" height="15" fill="none" stroke="#ef4444" strokeWidth="1.5" />

                  {/* Candle 12 (Current - Active) */}
                  <line x1="360" y1="35" x2="360" y2="50" stroke="#d4af37" strokeWidth="1" />
                  <rect x="355" y="38" width="10" height="10" fill="#d4af37" className="animate-pulse" filter="url(#glow)" />
                </svg>
              </div>

              {/* Chart UI Elements */}
              <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-4">
                <div className="flex gap-2">
                  <div className="w-16 h-1.5 rounded bg-white/10" />
                  <div className="w-8 h-1.5 rounded bg-white/5" />
                  <div className="w-12 h-1.5 rounded bg-white/5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Live Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <Tabs defaultValue="forex" className="w-full" onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <TabsList className="bg-card/40 border border-white/5 p-1 rounded-full backdrop-blur-sm h-auto flex flex-wrap justify-center">
                {[
                  { id: "forex", label: "Forex", icon: Globe },
                  { id: "indices", label: "Indices", icon: CandlestickChart },
                  { id: "metals", label: "Metals", icon: Coins },
                  { id: "crypto", label: "Crypto", icon: Bitcoin },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-full px-6 py-3 data-[state=active]:bg-gold-500 data-[state=active]:text-background transition-all duration-300"
                  >
                    <tab.icon className="w-4 h-4 mr-2" /> {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="text-sm text-muted-foreground">
                <span className="text-gold-500 font-bold">•</span> Live Market Data
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
              {data.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-lg" />
                  <Card className="relative bg-card/40 border-white/5 hover:border-gold-500/30 transition-all duration-300 backdrop-blur-md overflow-hidden group-hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 font-bold text-xs ring-1 ring-gold-500/20">
                            {item.symbol.substring(0, 3)}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-foreground">{item.symbol}</h3>
                            <p className="text-xs text-muted-foreground">{item.name}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded bg-secondary ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {item.change}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5">
                        <div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Spread</div>
                          <div className="text-xl font-mono font-medium text-foreground">{item.spread} <span className="text-xs text-muted-foreground">pips</span></div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Lev.</div>
                          <div className="text-xl font-mono font-medium text-foreground">{item.leverage}</div>
                        </div>
                      </div>

                      <Button asChild size="sm" variant="ghost" className="w-full mt-2 text-gold-500 hover:text-gold-400 hover:bg-gold-500/10 justify-between group/btn">
                        <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=CelestialTrader-Real">
                          Trade on MT5 <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Displaying popular instruments. Download MT5 to view all 500+ symbols.</p>
              <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
                View Full Specification
              </Button>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Execution Speed", value: "< 30ms", desc: "Ultra-low latency connection to Equinix servers." },
              { icon: ShieldCheck, title: "Security", value: "Raw Spreads", desc: "Institutional grade liquidity from top tier banks." },
              { icon: TrendingUp, title: "Reliability", value: "99.99%", desc: "Uptime guarantee for uninterrupted trading." },
            ].map((feat, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-gradient-to-br from-card/30 to-transparent border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-500">
                  <feat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">{feat.value}</div>
                  <h4 className="font-bold text-muted-foreground mb-2 text-sm uppercase tracking-wider">{feat.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
