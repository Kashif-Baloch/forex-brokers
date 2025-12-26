import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Zap, TrendingUp, Users, Crown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const accounts = [
  {
    name: "Classic",
    desc: "Perfect start for new traders",
    deposit: "$100",
    spread: "1.2",
    commission: "None",
    leverage: "1:500",
    icon: Shield,
    features: ["Swap-free available", "All instruments", "Mobile trading"]
  },
  {
    name: "Standard",
    desc: "Balanced trading conditions",
    deposit: "$500",
    spread: "0.8",
    commission: "None",
    leverage: "1:500",
    icon: Users,
    popular: true,
    features: ["Personal account manager", "Daily market analysis", "Webinar access"]
  },
  {
    name: "Pro",
    desc: "Professional-grade trading environment",
    deposit: "$10,000",
    spread: "0.0",
    commission: "$7/lot",
    leverage: "1:200",
    icon: Crown,
    features: ["Raw spreads", "Deep liquidity", "Scalping & EA friendly", "Priority support"]
  }
];

export default function AccountTypes() {
  return (
    <Layout>
      <Helmet>
        <title>Account Types | Celestial Trader</title>
        <meta name="description" content="Choose from Classic, Standard, or Pro trading accounts. Compare spreads, commissions, and features to find your perfect match." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Zap className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Trading Conditions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Account <span className="text-transparent bg-clip-text bg-gold-gradient">Types</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the account that matches your trading style.
            From commission-free options to raw ECN spreads for high-volume traders.
          </p>
        </div>
      </section>

      {/* Account Cards */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accounts.map((acc, i) => (
              <Card
                key={i}
                className={`relative flex flex-col transition-all duration-300 hover:-translate-y-2 ${acc.popular
                  ? 'bg-gradient-to-b from-card/80 to-gold-500/5 border-gold-500 shadow-xl shadow-gold-500/10'
                  : 'bg-card/40 border-white/10 hover:border-gold-500/30'
                  } backdrop-blur-md`}
              >
                {acc.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-background text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-current" /> MOST POPULAR
                  </div>
                )}

                <CardHeader className="text-center pb-2 pt-8">
                  <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${acc.popular ? 'bg-gold-500 text-background' : 'bg-white/5 text-gold-500'}`}>
                    <acc.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif text-2xl mb-1">{acc.name}</CardTitle>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{acc.desc}</p>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col gap-6">
                  <div className={`text-center py-6 mx-4 border-b ${acc.popular ? 'border-gold-500/20' : 'border-white/5'}`}>
                    <div className="text-3xl font-bold font-mono text-foreground">{acc.deposit}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Min. Deposit</div>
                  </div>

                  <div className="space-y-4 px-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Spread From</span>
                      <span className="font-bold text-foreground">{acc.spread} <span className="text-xs text-muted-foreground font-normal">pips</span></span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Commission</span>
                      <span className="font-bold text-foreground">{acc.commission}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Leverage</span>
                      <span className="font-bold text-foreground">{acc.leverage}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 px-2 bg-black/20 rounded-lg p-4 mt-2">
                    {acc.features.map((feat, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${acc.popular ? 'text-gold-500' : 'text-slate-500'}`} />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <Button asChild className={`w-full font-bold h-12 transition-all duration-300 ${acc.popular ? 'bg-gold-gradient text-background hover:opacity-90 hover:scale-[1.02]' : 'bg-white/5 hover:bg-white hover:text-blue-950 text-foreground border border-white/10'}`}>
                      <a href="https://client.celestialtrader.com/login">
                        Open {acc.name}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-secondary/10 border-t border-white/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Compare Features</h2>
            <p className="text-muted-foreground">Detailed breakdown of trading conditions per account type.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/20 backdrop-blur-sm shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-6 text-left font-serif text-gold-500 w-1/4">Feature</th>
                    {accounts.map(acc => (
                      <th key={acc.name} className={`p-6 text-center font-bold font-serif ${acc.popular ? 'text-gold-500 bg-gold-500/5' : 'text-foreground'}`}>
                        {acc.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-foreground">Execution Type</td>
                    <td className="p-6 text-center text-muted-foreground">STP</td>
                    <td className="p-6 text-center font-bold text-foreground bg-gold-500/5">STP</td>
                    <td className="p-6 text-center font-bold text-gold-500">ECN-style</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-foreground">Min. Lot Size</td>
                    <td className="p-6 text-center text-muted-foreground">0.01</td>
                    <td className="p-6 text-center font-bold text-foreground bg-gold-500/5">0.01</td>
                    <td className="p-6 text-center font-bold text-foreground">0.01</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-foreground">Stop Out Level</td>
                    <td className="p-6 text-center text-muted-foreground">30%</td>
                    <td className="p-6 text-center font-bold text-foreground bg-gold-500/5">30%</td>
                    <td className="p-6 text-center font-bold text-foreground">50%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-foreground">Swap Free</td>
                    <td className="p-6 text-center text-green-500"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-6 text-center text-green-500 bg-gold-500/5"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-6 text-center text-muted-foreground">Optional</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-semibold text-foreground">Personal Manager</td>
                    <td className="p-6 text-center text-muted-foreground">-</td>
                    <td className="p-6 text-center text-green-500 bg-gold-500/5"><Check className="w-4 h-4 mx-auto" /></td>
                    <td className="p-6 text-center font-bold text-gold-500">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
