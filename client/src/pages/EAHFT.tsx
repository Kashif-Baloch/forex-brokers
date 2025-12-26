import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Cpu, Server, Wifi, Activity, Lock, ArrowRight, Gauge, Layers, Shield, Network } from "lucide-react";
import { useEffect, useState } from "react";
import PriceTicker from "@/components/PriceTicker";
import { Helmet } from "react-helmet-async";

export default function EAHFT() {
    const [mounted, setMounted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const specs = [
        { label: "Execution Speed", value: "< 20ms" },
        { label: "Uptime Guarantee", value: "99.99%" },
        { label: "VPS Latency", value: "1ms" },
        { label: "Liquidity Providers", value: "25+" },
    ];

    return (
        <Layout>
            <Helmet>
                <title>HFT & Algo Trading | Celestial Trader</title>
                <meta name="description" content="Ultra-low latency infrastructure for High Frequency Trading and Algorithmic strategies. LD4 Equinix colocation." />
            </Helmet>
            {/* Hero Section - Compact Redesign */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 pb-10">
                {/* Advanced Background Effects - Scaled Down */}
                <div className="absolute inset-0 bg-background pointer-events-none">
                    {/* Perspective Grid Floor with Movement */}
                    <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[100vh] bg-[linear-gradient(to_right,rgba(234,179,8,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,179,8,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom animate-grid-movement" />

                    {/* Interactive Mouse Spotlight */}
                    <div
                        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234,179,8,0.08), transparent 40%)`
                        }}
                    />

                    {/* Digital Horizon Glow */}
                    <div className="absolute top-1/2 left-0 right-0 h-[400px] bg-gradient-to-t from-gold-500/10 to-transparent blur-[80px] -translate-y-1/2 pointer-events-none" />

                    {/* Scanning Laser Beam - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent h-[20vh] w-full blur-md animate-scanline pointer-events-none" style={{ mixBlendMode: 'plus-lighter' }} />

                    {/* Circuit Board Traces (SVG) */}
                    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none overflow-visible">
                        <path d="M0,100 Q400,150 800,100 T1600,150" fill="none" stroke="#d4af37" strokeWidth="2" className="animate-pulse" style={{ animationDuration: '3s' }} />
                        <circle cx="800" cy="100" r="3" fill="#d4af37" className="animate-ping" style={{ animationDuration: '3s' }} />
                    </svg>

                    {/* Floating Data Particles (Hex Code Style) */}
                    <div className="absolute inset-0 font-mono text-xs text-gold-500/30">
                        <div className="absolute top-[20%] left-[20%] animate-pulse">0x4F2A</div>
                        <div className="absolute bottom-[20%] right-[10%] animate-pulse" style={{ animationDelay: '1.5s' }}>&lt;HFT/&gt;</div>
                    </div>

                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)]" />
                </div>

                <div className="container relative z-10 text-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/5 border border-gold-500/20 mb-6 backdrop-blur-md animate-fade-in-up shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)]`} style={{ animationDelay: '0.1s' }}>
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-500"></span>
                        </span>
                        <span className="text-xs font-bold text-gold-500 uppercase tracking-[0.2em]">Institutional Execution</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tighter animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
                        <span className="text-foreground drop-shadow-xl inline-block mr-3">Ultra-Low</span>
                        <span className="text-transparent bg-clip-text bg-gold-gradient drop-shadow-[0_0_30px_rgba(234,179,8,0.4)] animate-pulse" style={{ animationDuration: '3s' }}>Latency</span>
                    </h1>

                    <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-in-up font-light" style={{ animationDelay: '0.3s' }}>
                        Engineered for <span className="text-gold-200 font-medium">HFT</span> and <span className="text-gold-200 font-medium">Algorithmic</span> trading. <br className="hidden md:block" />
                        Direct market access with <span className="text-white border-b border-gold-500/50">zero restrictions</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Button size="lg" className="bg-gold-gradient text-background font-bold text-lg px-8 h-12 rounded-full hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.6)] hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                            <span className="relative z-10">Deploy Strategy</span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                        </Button>
                        <Button size="lg" variant="ghost" className="text-gold-100 hover:text-white hover:bg-gold-500/10 h-12 text-base rounded-full px-6 border border-gold-500/20 backdrop-blur-sm transition-all duration-300">
                            View Infrastructure
                        </Button>
                    </div>
                </div>
            </section>

            {/* Price Ticker */}
            <PriceTicker />

            {/* Transition Strip: Live Specs (Moved out of Hero) */}
            <div className="border-y border-white/5 bg-white/[0.01] relative z-20">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
                        {specs.map((spec, i) => (
                            <div key={i} className="py-6 text-center group hover:bg-white/5 transition-colors duration-300 cursor-default">
                                <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-1 group-hover:text-gold-500 transition-colors">{spec.value}</div>
                                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{spec.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Infrastructure Section */}
            <section className="py-20 relative overflow-hidden bg-[#05080f]">
                <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-gold-500/5 rounded-full blur-[150px] -translate-y-1/2 opacity-50" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-3 py-1 rounded bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-wider">Infrastructure</div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                <span className="text-transparent bg-clip-text bg-gold-gradient">LD4</span> Equinix <br />
                                Colocation
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                                Your algorithms deserve the fastest possible connection to the market. Our servers are co-located in the Equinix LD4 data center. We are cross connected with our LPs to eliminate network latency, ensuring your HFT strategies execute at the speed of light.
                            </p>

                            <ul className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Direct Cross-Connects to LPs",
                                    "Redundant Fiber Optic Lines",
                                    "DDoS Protection Standard",
                                    "Sub-millisecond Internal Latency"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/30 transition-colors">
                                        <div className="p-1.5 rounded-full bg-gold-500/20 text-gold-500"><Zap className="w-3.5 h-3.5" /></div>
                                        <span className="font-medium text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gold-gradient rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                            <Card className="bg-[#0A0F1C] border-gold-500/20 relative z-10 overflow-hidden shadow-2xl shadow-black/50">
                                <CardContent className="p-0">
                                    {/* Server Rack Visual Visualization */}
                                    <div className="grid grid-cols-4 gap-1 p-8 bg-black/80 border-b border-white/5">
                                        {Array.from({ length: 16 }).map((_, i) => (
                                            <div key={i} className="h-2 bg-gold-900/40 rounded-full flex items-center overflow-hidden relative">
                                                <div className="absolute inset-0 shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]" />
                                                <div className="h-full bg-gold-500 animate-pulse shadow-[0_0_5px_rgba(234,179,8,0.8)]" style={{ width: `${Math.random() * 60 + 20}%`, animationDuration: `${Math.random() * 1.5 + 0.5}s` }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-8 space-y-8 bg-gradient-to-b from-[#0A0F1C] to-[#05080f]">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                                                    <Server className="w-6 h-6 text-gold-500" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg text-foreground">HK3-Dedicated</div>
                                                    <div className="text-xs text-green-500 flex items-center gap-1.5 font-medium">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                        </span>
                                                        Online Status
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-mono text-gold-500 font-bold tracking-tighter">2.4<span className="text-base text-muted-foreground font-sans ml-1">ms</span></div>
                                                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Ping to LP</div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-xs font-medium uppercase tracking-wider">
                                                <span className="text-muted-foreground">Network Throughput</span>
                                                <span className="font-mono text-gold-500">10 GB/s</span>
                                            </div>
                                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div className="w-[85%] h-full bg-gold-gradient relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_1s_infinite] -skew-x-12" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Designed for Bots</h2>
                        <p className="text-muted-foreground text-lg">
                            We don't just tolerate automated trading; we built our entire infrastructure to support it.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Lock, title: "Zero Restrictions", desc: "No minimum trade times. No scalping bans. Run any EA, HFT, or arbitrage strategy freely." },
                            { icon: Layers, title: "Raw Spreads", desc: "Spreads from 0.0 pips. Essential for scraping strategies where every point counts." },
                            { icon: Gauge, title: "Deep Liquidity", desc: "Fill large orders without slippage. Our aggregation engine handles high-volume flow seamlessly." }
                        ].map((item, i) => (
                            <Card key={i} className="bg-card/20 border-white/5 hover:border-gold-500/40 relative overflow-hidden transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <CardContent className="p-8 space-y-4 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300 border border-gold-500/10">
                                        <item.icon className="w-6 h-6 text-gold-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold group-hover:text-gold-500 transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* VPS Section */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-gradient-to-br from-[#0c1220] to-[#05080f] border border-gold-500/20 rounded-3xl p-12 relative overflow-hidden group">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] group-hover:bg-gold-500/10 transition-colors duration-700" />

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-500 font-bold text-xs uppercase mb-6 border border-gold-500/20">Free Service</div>
                                    <h2 className="text-4xl font-serif font-bold mb-6">Dedicated VPS Hosting</h2>
                                    <p className="text-lg text-muted-foreground mb-8">
                                        Keep your EAs running 24/7. We provide free, low-latency VPS hosting for high-volume traders, ensuring your strategies never miss a tick even when your computer is off.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <li className="flex items-center gap-3 text-sm font-medium"><Wifi className="w-5 h-5 text-green-500" /> <span>99.99% Uptime</span></li>
                                        <li className="flex items-center gap-3 text-sm font-medium"><Activity className="w-5 h-5 text-green-500" /> <span>Low Latency</span></li>
                                        <li className="flex items-center gap-3 text-sm font-medium"><Shield className="w-5 h-5 text-green-500" /> <span>DDoS Protected</span></li>
                                        <li className="flex items-center gap-3 text-sm font-medium"><Cpu className="w-5 h-5 text-green-500" /> <span>High Performance</span></li>
                                    </ul>
                                </div>
                                <Button size="lg" className="bg-gold-gradient text-background font-bold px-8 h-12 hover:opacity-90 transition-opacity hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)]">Claim Your VPS</Button>
                            </div>
                            <div className="relative h-[400px] flex items-center justify-center">
                                {/* Elaborate VPS Visual */}
                                <div className="relative w-80 h-80 flex items-center justify-center">
                                    <div className="absolute inset-0 border border-gold-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-4 border border-gold-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                    <div className="absolute inset-12 border border-gold-500/20 rounded-full animate-pulse" />

                                    {/* Central Hub */}
                                    <div className="w-32 h-32 bg-gold-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-500/30 relative z-10 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                        <Network className="w-12 h-12 text-gold-500" />
                                    </div>

                                    {/* Floating Nodes */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-12 bg-[#0A0F1C] border border-gold-500/30 rounded-xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                                        <Server className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div className="absolute bottom-10 right-0 w-10 h-10 bg-[#0A0F1C] border border-gold-500/30 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                                        <Activity className="w-4 h-4 text-green-500" />
                                    </div>
                                    <div className="absolute bottom-10 left-0 w-10 h-10 bg-[#0A0F1C] border border-gold-500/30 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                                        <Shield className="w-4 h-4 text-gold-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
