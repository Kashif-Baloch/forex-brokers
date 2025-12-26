import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Network, Zap, PieChart, Shield, Settings, Users, ArrowRight, BarChart4, Percent, Scale, Activity } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function MAM() {
    const features = [
        {
            icon: Network,
            title: "Unlimited Accounts",
            desc: "Manage hundreds of sub-accounts from a single master interface with zero latency execution."
        },
        {
            icon: PieChart,
            title: "Flexible Allocation",
            desc: "Choose from multiple allocation methods: Lot, Percentage, Proportional by Balance, or Equity."
        },
        {
            icon: Zap,
            title: "Instant Execution",
            desc: "Block orders are executed instantly across all connected accounts, ensuring fair price distribution."
        },
        {
            icon: Shield,
            title: "Real-Time Reporting",
            desc: "Live performance tracking, equity curves, and automated reporting for both managers and investors."
        }
    ];

    const allocationMethods = [
        { name: "Lot Allocation", desc: "Manually specify lot sizes for each sub-account." },
        { name: "Percent Allocation", desc: " Allocate a specific percentage of the master trade volume." },
        { name: "Proportional by Balance", desc: "Auto-scale trades based on sub-account balance ratio." },
        { name: "Proportional by Equity", desc: "Auto-scale trades based on sub-account equity ratio." }
    ];

    return (
        <Layout>
            <Helmet>
                <title>MAM/PAMM Accounts | Celestial Trader</title>
                <meta name="description" content="Professional Multi-Account Management solutions for fund managers. Flexible allocation methods and real-time reporting." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-background/95">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10 text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                        <Settings className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Professional Money Management</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                        Master <span className="text-transparent bg-clip-text bg-gold-gradient">Multi-Account</span> <br />
                        Management
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        The ultimate solution for Professional Traders and Fund Managers. Execute block orders across unlimited managed accounts with precision, speed, and flexibility.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-gold-gradient text-background font-bold text-lg px-8 h-14 hover:opacity-90 transition-opacity">
                            Apply for MAM Account
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/10 text-foreground hover:bg-white/5 h-14 text-lg">
                            View Specifications
                        </Button>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="py-24 border-y border-white/5 bg-secondary/5 backdrop-blur-sm">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <Card key={i} className="bg-card/20 border-white/5 hover:border-gold-500/30 transition-all duration-300 group hover:-translate-y-2">
                                <CardContent className="p-8 text-center space-y-4">
                                    <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto group-hover:bg-gold-500/20 transition-colors">
                                        <feature.icon className="w-7 h-7 text-gold-500" />
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Allocation Methods */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                                <Settings className="w-4 h-4 text-gold-500" />
                                <span className="text-xs font-bold text-gold-500 uppercase tracking-wider">Allocation Logic</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Precision <span className="text-transparent bg-clip-text bg-gold-gradient">Allocation Types</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 text-justify leading-relaxed">
                                Our MAM solution offers versatile allocation methods to suit every money management strategy. Whether you prefer fixed lots or dynamic equity-based scaling, our system handles the math instantly with zero latency.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: BarChart4, name: "Lot Allocation", desc: "Manually specify fixed lot sizes for each individual sub-account." },
                                    { icon: Percent, name: "Percent Allocation", desc: "Allocate a specific percentage of the master trade total volume." },
                                    { icon: Scale, name: "Proportional Balance", desc: "Auto-scale trades based on the ratio of sub-account balance." },
                                    { icon: Activity, name: "Proportional Equity", desc: "Auto-scale trades based on the ratio of sub-account equity." }
                                ].map((method, i) => (
                                    <div key={i} className="group p-5 rounded-xl bg-card/30 border border-white/5 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <method.icon className="w-5 h-5 text-gold-500" />
                                        </div>
                                        <h4 className="font-bold text-foreground mb-2 group-hover:text-gold-500 transition-colors">{method.name}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{method.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gold-500/20 blur-[80px] rounded-full" />
                            {/* Mockup Container */}
                            <div className="relative z-10 bg-[#0B0E14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                                {/* Mockup Header */}
                                <div className="bg-white/5 border-b border-white/5 p-4 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">MAM Admin Console</div>
                                </div>

                                {/* Mockup Body */}
                                <div className="p-6 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-muted-foreground uppercase mb-1">Total Assets Managed</div>
                                            <div className="text-2xl font-mono font-bold text-gold-500">$2,450,890.00</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-muted-foreground uppercase mb-1">Active Accounts</div>
                                            <div className="text-xl font-bold">142</div>
                                        </div>
                                    </div>

                                    {/* Allocation Visualizer */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-xs font-medium">
                                            <span>Allocation Distribution</span>
                                            <span className="text-gold-500">Processing...</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden flex">
                                            <div className="w-[45%] h-full bg-gold-500" />
                                            <div className="w-[30%] h-full bg-blue-500" />
                                            <div className="w-[15%] h-full bg-purple-500" />
                                            <div className="w-[10%] h-full bg-white/20" />
                                        </div>
                                        <div className="grid grid-cols-4 gap-2 text-[10px] text-muted-foreground pt-1">
                                            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Account A</div>
                                            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Account B</div>
                                            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Account C</div>
                                            <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-white/20" /> Others</div>
                                        </div>
                                    </div>

                                    {/* Active Trades Table Mockup */}
                                    <div className="border border-white/5 rounded-lg overflow-hidden">
                                        <table className="w-full text-xs text-left">
                                            <thead className="bg-white/5 text-muted-foreground font-medium">
                                                <tr>
                                                    <th className="p-3">Symbol</th>
                                                    <th className="p-3">Type</th>
                                                    <th className="p-3 text-right">Volume</th>
                                                    <th className="p-3 text-right">P/L</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5 font-mono">
                                                <tr className="bg-green-500/5">
                                                    <td className="p-3 font-bold text-foreground">EURUSD</td>
                                                    <td className="p-3 text-green-500">BUY</td>
                                                    <td className="p-3 text-right">50.0</td>
                                                    <td className="p-3 text-right text-green-500">+$2,450</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 font-bold text-foreground">XAUUSD</td>
                                                    <td className="p-3 text-red-500">SELL</td>
                                                    <td className="p-3 text-right">10.0</td>
                                                    <td className="p-3 text-right text-red-500">-$120</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container">
                    <div className="bg-gold-500 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-background">Scale Your Trading Business</h2>
                            <p className="text-background/80 text-lg">
                                Join the elite network of Fund Managers using our MAM technology.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button size="lg" className="bg-background text-gold-500 hover:bg-background/90 font-bold text-lg px-8 h-12">
                                    Contact Institutional Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
