import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, DollarSign, TrendingUp, Shield, BarChart3, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Promotions() {
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

    const steps = [
        {
            number: "01",
            title: "Account Registration",
            description: "Establish your Standard trading account with Celestial Trader Alliance to begin."
        },
        {
            number: "02",
            title: "Capital Funding",
            description: "Securely fund your account. Deposits up to $100 match the bonus criteria."
        },
        {
            number: "03",
            title: "Bonus Allocation",
            description: "The 100% credit is automatically applied, instantly doubling your trading equity."
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Promotions & Bonuses | Celestial Trader</title>
                <meta name="description" content="Boost your trading potential with our latest promotions and deposit bonuses. Terms and conditions apply." />
            </Helmet>
            {/* Hero Section - Executive & Refined */}
            <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
                {/* Background Image & Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/promotions-hero-bg.png"
                            alt="Financial Background"
                            className="w-full h-full object-cover opacity-20 mix-blend-luminosity filter blur-[1px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>

                    {/* Sophisticated Spotlight Overlay */}
                    <div
                        className="absolute inset-0 z-10 transition-opacity duration-500 opacity-60 mix-blend-overlay"
                        style={{
                            background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212,175,55,0.15), transparent 50%)`
                        }}
                    />

                    {/* Fine Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-10" />

                    {/* Ambient Aurora - Deep Blue Hues */}
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen z-10" />
                </div>

                <div className="container relative z-20">
                    <div className="max-w-4xl">
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-800/20 backdrop-blur-md mb-8 shadow-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                            </span>
                            <span className="tracking-[0.2em] uppercase text-[10px] font-bold text-gold-200">Exclusive Client Offer</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6 leading-[1.1] tracking-tight text-white/95 drop-shadow-lg">
                            Elevate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 drop-shadow-md">
                                Capital Efficiency
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground/90 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md">
                            Experience the advantage of expanded equity. Receive a matching <span className="text-white font-medium">100% Deposit Bonus</span> up to <span className="text-gold-400 font-medium">$100</span> to enhance your market exposure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href="https://client.celestialtrader.com/register">
                                <Button size="lg" className="bg-white text-[#042c62] hover:bg-gold-50 font-semibold text-base px-8 h-12 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 w-full sm:w-auto">
                                    Claim Bonus Offer
                                </Button>
                            </a>
                            <a href="#terms">
                                <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-white hover:bg-white/5 text-base px-8 h-12 rounded-sm w-full sm:w-auto border border-white/10 backdrop-blur-sm">
                                    View Conditions
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Sophisticated */}
            <section className="py-24 border-y border-white/[0.03] bg-[#0f172a]/20"> {/* Dark Slate Blue tint */}
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Elegant Connector */}
                        <div className="hidden md:block absolute top-[1.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 group">
                                <div className="flex flex-col h-full bg-transparent p-6 transition-all duration-300">
                                    <div className="w-12 h-12 bg-[#1e293b] border border-white/10 flex items-center justify-center text-lg font-serif text-gold-500 mb-6 relative z-10 group-hover:border-gold-500/50 transition-colors shadow-2xl rounded-sm">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-medium mb-3 text-white/90 font-serif">{step.title}</h3>
                                    <p className="text-muted-foreground/60 leading-relaxed text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Advantage - Clean Grid */}
            <section className="py-32 bg-background">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-serif font-medium leading-tight text-white">
                                    Strategic <span className="text-gold-500">Advantage</span>
                                </h2>
                                <p className="text-lg text-muted-foreground/70 font-light">Leveraging additional capital provides distinct tactical benefits for the discerning trader.</p>
                            </div>

                            <div className="grid gap-8">
                                {[
                                    { icon: BarChart3, title: "Position Sizing", desc: "Execute larger volume trades with optimized margin maintenance." },
                                    { icon: Shield, title: "Drawdown Resilience", desc: "Strengthened account equity offers superior capability to weather market volatility." },
                                    { icon: Star, title: "Immediate Allocation", desc: "Bonus credit is allocated instantaneously upon qualifying deposit confirmation." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="mt-1">
                                            <item.icon className="w-6 h-6 text-gold-500/80 group-hover:text-gold-400 transition-colors" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium mb-2 text-white/90">{item.title}</h3>
                                            <p className="text-muted-foreground/60 leading-relaxed text-sm font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual - Minimalist Financial Card */}
                        <div className="lg:w-1/2 flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 bg-gold-500/10 blur-[80px] rounded-full opacity-40" />
                                <Card className="relative bg-[#1e293b] border border-white/10 rounded-sm shadow-2xl overflow-hidden">
                                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-gold-600 to-gold-300" />
                                    <CardContent className="p-8 md:p-12">
                                        <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-8">
                                            <div>
                                                <div className="text-[10px] text-gold-500 uppercase tracking-[0.2em] font-semibold mb-2">Total Equity</div>
                                                <div className="text-5xl font-serif text-white">$200.00</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="inline-flex items-center px-2 py-1 bg-green-900/20 border border-green-900/30 text-green-500 text-xs rounded">
                                                    <TrendingUp className="w-3 h-3 mr-1" />
                                                    +100%
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground/60">Initial Deposit</span>
                                                <span className="text-white font-mono">$100.00</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground/60">Bonus Credit</span>
                                                <span className="text-gold-400 font-mono font-medium">$100.00</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms - Fine Print */}
            <section id="terms" className="py-16 border-t border-white/5 bg-[#0f172a]/40">
                <div className="container max-w-5xl">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 mb-8 border-b border-white/5 pb-4">Terms & Conditions</h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-xs text-muted-foreground/50 leading-relaxed font-light">
                        <div className="space-y-4">
                            <p>
                                1. The 100% Deposit Bonus is available exclusively for new clients upon their initial deposit. Existing accounts are not eligible for this specific promotional offer.
                            </p>
                            <p>
                                2. The maximum cumulative bonus amount awarded per client is capped at $100 USD (or currency equivalent). Deposits exceeding $100 will receive the maximum cap of $100.
                            </p>
                            <p>
                                3. Bonus funds are strictly for trading purposes (margin support) and cannot be withdrawn directly. Profits generated from trading with the bonus are withdrawable.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p>
                                4. This offer is valid solely for Standard Account types. ECN, Pro, and Institutional accounts are excluded from participation in this promotion due to their specific commission structures.
                            </p>
                            <p>
                                5. Celestial Trader Alliance Ltd. reserves the right to modify, suspend, or terminate this promotion at any time without prior notice. Standard Terms of Business apply.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
