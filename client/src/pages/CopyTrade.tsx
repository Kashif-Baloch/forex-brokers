import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Shield, BarChart3, ArrowRight, Star, Copy } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function CopyTrade() {
    const topTraders = [
        { name: "ForexKing99", return: "+458%", profit: "$124,500", copiers: "1,245", risk: "Low" },
        { name: "CryptoWhale", return: "+1250%", profit: "$892,100", copiers: "3,890", risk: "Medium" },
        { name: "GoldStandard", return: "+89%", profit: "$45,200", copiers: "890", risk: "Low" },
        { name: "AggressiveGrowth", return: "+210%", profit: "$67,800", copiers: "560", risk: "High" },
    ];

    return (
        <Layout>
            <Helmet>
                <title>Copy Trading | Celestial Trader</title>
                <meta name="description" content="Copy top-performing traders automatically. Join the social trading revolution and earn like the best." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-background/95">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                        <Users className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Social Trading Revolution</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-roboto font-bold mb-6">
                        Copy the <span className="text-transparent bg-clip-text bg-gold-gradient">Best</span>, <br />
                        Earn Like the <span className="text-foreground">Rest</span>.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        Automatically mirror the trades of top-performing investors. No experience needed—just select, copy, and profit.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-gold-gradient text-background font-bold text-lg px-8 h-14 hover:opacity-90 transition-opacity">
                            Start Copying Now
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/10 text-foreground hover:bg-white/5 h-14 text-lg">
                            View Top Traders
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Active Copiers", value: "50,000+" },
                            { label: "Total Profit Paid", value: "$12M+" },
                            { label: "Top Traders", value: "500+" },
                            { label: "Avg. Return", value: "35%" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-gold-500">{stat.value}</h3>
                                <p className="text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">How It Works</h2>
                        <p className="text-muted-foreground text-lg">
                            Start earning in three simple steps. Our platform handles the complex execution while you sit back and watch your portfolio grow.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "1. Choose a Trader", desc: "Browse our leaderboard of top performers. Filter by risk, return, and asset class to find your perfect match." },
                            { icon: Copy, title: "2. Allocate Funds", desc: "Decide how much capital you want to invest. You retain full control and can stop copying at any time." },
                            { icon: TrendingUp, title: "3. Auto-Copy", desc: "Every trade they make is automatically replicated in your account proportional to your investment." },
                        ].map((step, i) => (
                            <Card key={i} className="bg-card/20 border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:-translate-y-2">
                                <CardContent className="p-8 text-center space-y-6">
                                    <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto group-hover:bg-gold-500/20 transition-colors">
                                        <step.icon className="w-8 h-8 text-gold-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Traders Showcase */}
            <section className="py-24 bg-gradient-to-b from-secondary/10 to-transparent">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Top Performers</h2>
                            <p className="text-muted-foreground">Real-time performance of our elite strategy providers.</p>
                        </div>
                        <Button variant="link" className="text-gold-500 hover:text-gold-400 gap-2">
                            View Leaderboard <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {topTraders.map((trader, i) => (
                            <Card key={i} className="bg-card/30 border-white/10 hover:border-gold-500/50 transition-all cursor-pointer group">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center font-bold text-gold-500">
                                                {trader.name[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-bold group-hover:text-gold-500 transition-colors">{trader.name}</h4>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Users className="w-3 h-3" /> {trader.copiers} copiers
                                                </div>
                                            </div>
                                        </div>
                                        {i === 0 && <Star className="w-5 h-5 text-gold-500 fill-gold-500 animate-pulse" />}
                                    </div>

                                    <div className="py-4 border-y border-white/5 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Return (All Time)</span>
                                            <span className="font-bold text-green-500">{trader.return}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Profit</span>
                                            <span className="font-bold text-foreground">{trader.profit}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className={`text-xs px-2 py-1 rounded-full border ${trader.risk === 'Low' ? 'border-green-500/30 text-green-500 bg-green-500/10' :
                                            trader.risk === 'Medium' ? 'border-yellow-500/30 text-yellow-500 bg-yellow-500/10' :
                                                'border-red-500/30 text-red-500 bg-red-500/10'
                                            }`}>
                                            Risk: {trader.risk}
                                        </span>
                                        <Button size="sm" className="bg-white/10 hover:bg-gold-500 hover:text-background h-8">
                                            Copy
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container">
                    <div className="bg-gold-500 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-background">Ready to Start Earning?</h2>
                            <p className="text-background/80 text-lg">
                                Join thousands of investors who are automating their wealth creation. Open your account today.
                            </p>
                            <Button size="lg" className="bg-background text-gold-500 hover:bg-background/90 font-bold text-lg px-8 h-12">
                                Create Account
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
