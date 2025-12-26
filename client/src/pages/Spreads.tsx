import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Percent, Zap, Globe, Coins, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Spreads() {
  const forexSpreads = [
    { pair: "EURUSD", classic: "1.2", standard: "1.0", pro: "0.0" },
    { pair: "GBPUSD", classic: "1.5", standard: "1.3", pro: "0.3" },
    { pair: "USDJPY", classic: "1.2", standard: "1.0", pro: "0.2" },
    { pair: "AUDUSD", classic: "1.5", standard: "1.3", pro: "0.4" },
    { pair: "NZDUSD", classic: "2.0", standard: "1.8", pro: "0.6" },
    { pair: "USDCAD", classic: "1.5", standard: "1.3", pro: "0.3" },
  ];

  const indicesSpreads = [
    { pair: "US500", classic: "2.0", standard: "1.8", pro: "0.5" },
    { pair: "US30", classic: "5.0", standard: "4.5", pro: "2.0" },
    { pair: "DE40", classic: "3.0", standard: "2.5", pro: "1.0" },
    { pair: "UK100", classic: "1.0", standard: "0.9", pro: "0.8" },
    { pair: "JP225", classic: "8.0", standard: "7.0", pro: "4.0" },
  ];

  const commoditiesSpreads = [
    { pair: "XAUUSD", classic: "0.30", standard: "0.25", pro: "0.15" },
    { pair: "XAGUSD", classic: "0.05", standard: "0.04", pro: "0.02" },
    { pair: "USOIL", classic: "0.05", standard: "0.04", pro: "0.03" },
    { pair: "UKOIL", classic: "0.06", standard: "0.05", pro: "0.04" },
  ];

  const categories = [
    { id: "forex", label: "Forex", icon: Globe, data: forexSpreads },
    { id: "indices", label: "Indices", icon: BarChart3, data: indicesSpreads },
    { id: "commodities", label: "Commodities", icon: Coins, data: commoditiesSpreads },
  ];

  const getIcon = (item: any, type: string) => {
    // Commodities - Use Icons
    if (type === 'commodities') {
      if (item.pair.includes('XAU') || item.pair.includes('Gold')) return <Coins className="w-5 h-5 text-gold-500" />;
      if (item.pair.includes('XAG') || item.pair.includes('Silver')) return <Percent className="w-5 h-5 text-slate-300" />; // Fallback icon
      if (item.pair.includes('OIL')) return <Zap className="w-5 h-5 text-orange-500" />;
      return <BarChart3 className="w-5 h-5 text-muted-foreground" />;
    }

    // Forex & Indices - Use Flags
    let code = 'us';
    if (type === 'forex') {
      const base = item.pair.substring(0, 3);
      const map: Record<string, string> = {
        'EUR': 'eu', 'GBP': 'gb', 'USD': 'us', 'AUD': 'au',
        'NZD': 'nz', 'CAD': 'ca', 'CHF': 'ch', 'JPY': 'jp'
      };
      code = map[base] || 'us';
    } else if (type === 'indices') {
      if (item.pair.startsWith('US')) code = 'us';
      if (item.pair.startsWith('DE')) code = 'de';
      if (item.pair.startsWith('UK')) code = 'gb';
      if (item.pair.startsWith('JP')) code = 'jp';
    }

    return (
      <img
        src={`https://flagcdn.com/w40/${code}.png`}
        alt={code}
        className="w-5 h-auto rounded-sm shadow-sm opacity-90 group-hover:opacity-100"
      />
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Spreads & Conditions | Celestial Trader</title>
        <meta name="description" content="View our competitive spreads across all instruments. Tight spreads from 0.0 pips on Pro accounts." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Zap className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Zero Spreads Available</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Spreads & <span className="text-transparent bg-clip-text bg-gold-gradient">Fees</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Experience true transparency. Trade with some of the tightest ECN spreads in the industry,
            streaming directly from top-tier liquidity providers.
          </p>
          <Button asChild className="bg-gold-gradient text-background hover:opacity-90 font-bold px-8 h-12 rounded-full shadow-lg shadow-gold-500/10">
            <a href="https://client.celestialtrader.com/login">Check All Spreads</a>
          </Button>
        </div>
      </section>

      {/* Main Spreads Table Section */}
      <section className="py-20 relative">
        <div className="container">
          <Tabs defaultValue="forex" className="w-full">

            <div className="flex justify-center mb-12">
              <TabsList className="bg-card/40 border border-white/5 p-1 rounded-full backdrop-blur-sm h-auto inline-flex">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full px-6 py-3 data-[state=active]:bg-gold-500 data-[state=active]:text-background transition-all duration-300 min-w-[140px]"
                  >
                    <cat.icon className="w-4 h-4 mr-2" /> {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border border-white/10 bg-card/20 backdrop-blur-md shadow-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-white/5 border-b border-white/10">
                          <th className="p-6 text-left font-serif text-gold-500 text-lg">Instrument</th>
                          <th className="p-6 text-right font-serif text-muted-foreground">Classic</th>
                          <th className="p-6 text-right font-serif text-foreground font-bold bg-gold-500/10 border-x border-gold-500/10 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">Standard</th>
                          <th className="p-6 text-right font-serif text-muted-foreground">Pro</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {/* @ts-ignore */}
                        {cat.data.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors group">
                            <td className="p-6 font-bold text-foreground flex items-center gap-4">
                              <div className="w-8 h-6 flex items-center justify-center overflow-hidden rounded shadow-sm">
                                {getIcon(row, cat.id)}
                              </div>
                              <span className="text-base">{row.pair}</span>
                            </td>
                            <td className="p-6 text-right text-muted-foreground font-mono">{row.classic}</td>
                            {/* @ts-ignore */}
                            <td className="p-6 text-right font-bold text-gold-500 font-mono bg-gold-500/5 border-x border-gold-500/10">{row.standard}</td>
                            <td className="p-6 text-right font-mono text-muted-foreground">
                              {/* @ts-ignore */}
                              {row.pro}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-muted-foreground">
                  * Typical spreads shown. Live spreads may vary depending on market conditions.
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20 border-t border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Trade with Our Spreads?</h2>
            <p className="text-muted-foreground">We partner with global banks to bring you deep liquidity and thin pricing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Raw Spreads", desc: "Access raw market spreads from 0.0 pips on our Pro accounts.", icon: TrendingDown },
              { title: "No Hidden Fees", desc: "Transparent commission structures with zero markup.", icon: Percent },
              { title: "Deep Liquidity", desc: "Orders executed in milliseconds with no requotes.", icon: Zap },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card/30 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-500 transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gold-500 text-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Ready to trade with 0.0 spreads?</h2>
            <p className="opacity-90 font-medium">Open a Pro account today and experience the difference.</p>
          </div>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-white hover:text-blue-950 font-bold h-14 px-8 rounded-full shadow-xl transition-colors duration-300">
            <a href="https://client.celestialtrader.com/login">
              Open Account <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
