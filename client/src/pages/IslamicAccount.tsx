import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Globe, Scale, BookOpen, Star, AlertCircle, Moon, Zap, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

export default function IslamicAccount() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const benefits = [
        {
            icon: Scale,
            title: "Sharia Compliant",
            desc: "100% interest-free trading with no Riba on overnight positions, fully certified."
        },
        {
            icon: Shield,
            title: "Transparent & Ethical",
            desc: "Zero hidden fees. We prioritize ethical trading conditions for all our clients."
        },
        {
            icon: Globe,
            title: "Global Markets",
            desc: "Access forex, commodities, and indices with halal trading conditions."
        },
        {
            icon: Award,
            title: "Premium Execution",
            desc: "Experience the same institutional-grade execution speed as our Pro accounts."
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Islamic Swap-Free Accounts | Celestial Trader</title>
                <meta name="description" content="Trade with integrity. Our Islamic Accounts are 100% Sharia compliant with no swap fees on overnight positions." />
            </Helmet>

            {/* Hero Section - Executive & Refined */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0F1C]">
                {/* Animated Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Spotlight Effect */}
                    <div
                        className="absolute inset-0 z-10 transition-opacity duration-300 opacity-30 mix-blend-screen"
                        style={{
                            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,175,55,0.1), transparent 40%)`
                        }}
                    />

                    {/* Ambient Glows */}
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />

                    {/* Geometric Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                </div>

                <div className="container relative z-20 text-center max-w-5xl px-4">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8 backdrop-blur-md animate-fade-in-up">
                        <Moon className="w-4 h-4 text-gold-500 fill-gold-500/20" />
                        <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.2em]">Ethical Trading Standards</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Trade with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            Absolute Integrity
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Uphold your values without compromising on performance. <br className="hidden md:block" />
                        Our <span className="text-white font-medium">Swap-Free Islamic Accounts</span> are engineered for traders observing Sharia law, offering complete transparency and compliance.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a href="https://client.celestialtrader.com/register">
                            <Button size="lg" className="bg-gold-gradient text-background font-bold text-lg px-10 h-14 rounded-full shadow-[0_0_40px_-10px_rgba(212,175,55,0.4)] hover:shadow-gold-500/20 hover:scale-105 transition-all duration-300">
                                Open Islamic Account
                            </Button>
                        </a>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-full text-lg backdrop-blur-sm">
                            View Certifications
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Grid - Glassmorphism */}
            <section className="py-24 relative bg-[#0A0F1C]">
                <div className="container relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((item, i) => (
                            <Card key={i} className="bg-white/[0.03] border-white/5 hover:border-gold-500/30 backdrop-blur-sm transition-all duration-500 group hover:-translate-y-2 hover:bg-white/[0.05]">
                                <CardContent className="p-8 space-y-5">
                                    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/10 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-500">
                                        <item.icon className="w-7 h-7 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-serif mb-2 text-white/90 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive / How it works */}
            <section className="py-32 relative overflow-hidden bg-[#05080f]">
                {/* Background Decorative Blob */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-gold-500/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Mechanism & Compliance
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Designed for <br />
                                <span className="text-transparent bg-clip-text bg-gold-gradient">Sharia Compliance</span>
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                                <p>
                                    In traditional forex trading, positions held overnight accrue "swap" fees based on interest rate differentials. Because <span className="text-white font-medium">Riba (interest)</span> is strictly prohibited in Islamic finance, standard accounts are not suitable for observant traders.
                                </p>
                                <p>
                                    Celestial Trader's Islamic Accounts eliminate interest entirely. Instead of swaps, we utilize a flat administration fee structure (applied only after 5 days), ensuring your trading remains 100% Halal while accurate to market movements.
                                </p>
                            </div>

                            <div className="pt-6 grid sm:grid-cols-2 gap-4">
                                {[
                                    "No Rollover Interest",
                                    "No Hidden Commissions",
                                    "Indefinite Holding",
                                    "Instant Activation",
                                    "Halal Certified",
                                    "Global Liquidity"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors duration-300">
                                            <Check className="w-3.5 h-3.5 text-gold-500 group-hover:text-black transition-colors" />
                                        </div>
                                        <span className="text-sm font-medium text-white/80">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Abstract Visual Representation */}
                            <div className="relative z-10 bg-gradient-to-br from-[#1a1f2e] to-[#0A0F1C] border border-white/10 rounded-3xl p-1 shadow-2xl">
                                <div className="bg-[#0A0F1C] rounded-[22px] overflow-hidden border border-white/5 relative h-[500px] flex flex-col">
                                    {/* Card Header */}
                                    <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Swap-Free Verification</div>
                                    </div>

                                    {/* Card Body - Content */}
                                    <div className="p-8 flex-1 flex flex-col justify-center items-center text-center space-y-8 relative">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />

                                        <div className="relative w-32 h-32">
                                            <div className="absolute inset-0 border-2 border-dashed border-gold-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                                            <div className="absolute inset-2 border border-gold-500/30 rounded-full" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Moon className="w-12 h-12 text-gold-500 fill-gold-500/10" />
                                            </div>
                                        </div>

                                        <div className="space-y-2 relative z-10">
                                            <h3 className="text-2xl font-bold text-white">Islamic Standard Account</h3>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider">
                                                <Check className="w-3 h-3" /> Certified Compliant
                                            </div>
                                        </div>

                                        <div className="w-full grid grid-cols-2 gap-4 pt-4">
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                                <div className="text-xs text-muted-foreground uppercase mb-1">Swap Long</div>
                                                <div className="text-xl font-mono text-gold-500 font-bold">0.00</div>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                                <div className="text-xs text-muted-foreground uppercase mb-1">Swap Short</div>
                                                <div className="text-xl font-mono text-gold-500 font-bold">0.00</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-4 bg-gold-500/5 border-t border-gold-500/10 flex items-center gap-3 text-xs text-gold-200/80 px-6">
                                        <AlertCircle className="w-4 h-4 shrink-0 text-gold-500" />
                                        <span>Interest is completely disabled on the server level.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 border-t border-white/5 relative bg-[#0A0F1C]">
                <div className="container text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white">
                        Ethical Trading, <span className="text-gold-500">Global Reach.</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
                        Join a brokerage that respects your values. Open your Islamic Account today and trade with complete peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="https://client.celestialtrader.com/register">
                            <Button size="lg" className="h-16 px-12 text-xl bg-gold-gradient text-background hover:opacity-90 font-bold rounded-full shadow-lg hover:shadow-gold-500/20 hover:-translate-y-1 transition-all duration-300">
                                Start Trading Today
                            </Button>
                        </a>
                        <a href="/contact">
                            <Button variant="ghost" size="lg" className="h-16 px-10 text-lg text-white hover:bg-white/5 border border-white/10 rounded-full">
                                Contact Support
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
