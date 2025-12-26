import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCookie } from "@/context/CookieContext";
import { Shield, Lock, Eye, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Cookies() {
    const { openSettings } = useCookie();

    return (
        <Layout>
            <Helmet>
                <title>Cookie Policy | Celestial Trader</title>
                <meta name="description" content="Information about how we use cookies to improve your browsing experience. manage your preferences." />
            </Helmet>
            <section className="pt-24 pb-16 min-h-screen bg-background">
                <div className="container max-w-4xl">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            At Celestial Trader Alliance, we believe in transparency. This policy explains how and why we use cookies to improve your trading experience.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* What are cookies */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-gold-500 flex items-center gap-3">
                                <Shield className="w-6 h-6" />
                                What Are Cookies?
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground">
                                <p>
                                    Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, enhanced site security, and analyze how our platform is used to provide you with the best possible trading environment.
                                </p>
                            </div>
                        </section>

                        {/* Types of Cookies */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-gold-500 flex items-center gap-3">
                                <Eye className="w-6 h-6" />
                                How We Use Cookies
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-card/30 border border-white/5 p-6 rounded-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Lock className="w-5 h-5 text-gold-500" />
                                        <h3 className="text-lg font-bold">Essential Cookies</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Strictly necessary for the website to function. They enable core features like security, network management, and accessibility. You cannot switch these off.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded w-fit">
                                        <Check className="w-3 h-3" /> Always Active
                                    </div>
                                </div>

                                <div className="bg-card/30 border border-white/5 p-6 rounded-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Eye className="w-5 h-5 text-blue-400" />
                                        <h3 className="text-lg font-bold">Analytics Cookies</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our platform.
                                    </p>
                                    <Button
                                        variant="link"
                                        onClick={openSettings}
                                        className="p-0 h-auto text-gold-500 hover:text-gold-400 text-xs"
                                    >
                                        Manage Preference
                                    </Button>
                                </div>

                                <div className="bg-card/30 border border-white/5 p-6 rounded-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Shield className="w-5 h-5 text-purple-400" />
                                        <h3 className="text-lg font-bold">Marketing Cookies</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
                                    </p>
                                    <Button
                                        variant="link"
                                        onClick={openSettings}
                                        className="p-0 h-auto text-gold-500 hover:text-gold-400 text-xs"
                                    >
                                        Manage Preference
                                    </Button>
                                </div>
                            </div>
                        </section>

                        {/* Managing Cookies */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-gold-500">Managing Your Preferences</h2>
                            <p className="text-muted-foreground">
                                You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer or by clicking the button below. You can also control cookies through your browser settings.
                            </p>
                            <div className="pt-4">
                                <Button
                                    onClick={openSettings}
                                    size="lg"
                                    className="bg-gold-gradient text-background hover:opacity-90 font-bold"
                                >
                                    Open Cookie Settings
                                </Button>
                            </div>
                        </section>

                        {/* Updates */}
                        <section className="pt-8 border-t border-white/10">
                            <p className="text-sm text-muted-foreground/60">
                                Last Updated: December 2025. We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
