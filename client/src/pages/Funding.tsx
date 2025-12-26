import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Shield, Clock, CheckCircle2, Bitcoin, Coins } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Funding() {
  const methods = [
    {
      category: "Cryptocurrencies",
      icon: Coins,
      description: "Secure, anonymous, and instant transactions via blockchain.",
      items: [
        { name: "USDT (TRC20)", fee: "0%", time: "Instant", limit: "$25 - Unlimited", currencies: "USD" },
        { name: "USDT (BEP20)", fee: "Network Fee", time: "Instant", limit: "$25 - Unlimited", currencies: "USD" }
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Funding & Withdrawal | Celestial Trader</title>
        <meta name="description" content="Secure deposit and withdrawal methods with zero fees on most options. Instant crypto funding available." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-background/95">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
            <Zap className="w-4 h-4 text-gold-500" />
            <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Instant 24/7 Withdrawals</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Crypto-First <span className="text-transparent bg-clip-text bg-gold-gradient">Ambition</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Experience the future of funding. Deposit and withdraw instantly, 7 days a week, using USDT.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-card/50 border border-white/10 flex items-center gap-2">
              <span className="font-bold text-green-500">$</span>
              <span className="font-bold">USDT (TRC20)</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-card/50 border border-white/10 flex items-center gap-2">
              <Coins className="w-5 h-5 text-gold-500" />
              <span className="font-bold">USDT (BEP20)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: "Instant 24/7 Withdrawals" },
              { icon: Shield, label: "Blockchain Security" },
              { icon: Clock, label: "Instant Deposits" },
              { icon: CheckCircle2, label: "Anonymous Funding" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <s.icon className="w-6 h-6 text-gold-500" />
                </div>
                <span className="font-serif text-lg font-bold text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="deposit" className="space-y-16">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-transparent p-1">
                <TabsTrigger value="deposit" className="text-lg py-3 data-[state=active]:bg-gold-500 data-[state=active]:text-background font-bold transition-all rounded-full data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-gold-500">
                  Deposits
                </TabsTrigger>
                <TabsTrigger value="withdrawal" className="text-lg py-3 data-[state=active]:bg-gold-500 data-[state=active]:text-background font-bold transition-all rounded-full data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-gold-500">
                  Withdrawals
                </TabsTrigger>
              </TabsList>
            </div>

            {["deposit", "withdrawal"].map((type) => (
              <TabsContent key={type} value={type} className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-4xl font-serif font-bold mb-4 capitalize">{type} Methods</h2>
                  <p className="text-muted-foreground">
                    {type === 'deposit'
                      ? "Fund your account instantly using secure blockchain transactions."
                      : "Enjoy our signature Instant Withdrawal service, available 7 days a week."}
                  </p>
                </div>

                <div className="grid gap-8">
                  {methods.map((category, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex flex-wrap justify-center gap-6">
                        {category.items.map((item, i) => (
                          <Card key={i} className="bg-card/20 border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:-translate-y-1 w-full max-w-md">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-6">
                                <h4 className="text-xl font-bold group-hover:text-gold-500 transition-colors">{item.name}</h4>
                                <div className="px-2 py-1 rounded bg-white/5 text-xs font-mono border border-white/10">
                                  {item.currencies}
                                </div>
                              </div>

                              <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-muted-foreground">Processing Time</span>
                                  <span className="font-bold text-gold-500">{item.time}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-muted-foreground">Network Fee</span>
                                  <span className="font-bold text-foreground">{item.fee}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-muted-foreground">Limits</span>
                                  <span className="font-bold text-foreground">{item.limit}</span>
                                </div>
                              </div>

                              <Button asChild className="w-full mt-6 bg-white/5 hover:bg-gold-500 hover:text-background transition-all font-bold">
                                <a href="https://client.celestialtrader.com/login">
                                  {type === 'deposit' ? 'Deposit Now' : 'Withdraw'}
                                </a>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-gradient-to-t from-secondary/20 to-transparent">
        <div className="container">
          <div className="bg-card/30 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Secure <br /> Blockchain Funding</h2>
                <p className="text-lg text-muted-foreground mb-8 text-justify">
                  Leverage the power of decentralized finance. Your funds are secured by state-of-the-art encryption and segregated cold storage protocols, ensuring maximum safety for your digital assets.
                </p>
                <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
                  Learn More About Security
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Cold Storage", "Multi-Sig Wallets", "Instant Processing", "No Hidden Fees"].map((item, i) => (
                  <div key={i} className="p-6 bg-background/50 rounded-xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-gold-500/30 transition-colors">
                    <Shield className="w-8 h-8 text-gold-500" />
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
