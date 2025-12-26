import Layout from "@/components/layout/Layout";
import { Shield, Lock, FileText, UserCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
    return (
        <Layout>
            <Helmet>
                <title>Privacy Policy | Celestial Trader</title>
                <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
            </Helmet>
            <section className="pt-24 pb-16 min-h-screen bg-background">
                <div className="container max-w-4xl">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-6 border border-gold-500/20">
                            <Shield className="w-8 h-8 text-gold-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Your privacy is paramount. This policy outlines how Celestial Trader Alliance Ltd. collects, uses, and protects your personal information.
                        </p>
                    </div>

                    <div className="space-y-12 bg-card/30 border border-white/5 rounded-2xl p-8 md:p-12">
                        {/* Introduction */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-gold-500 flex items-center gap-3">
                                <FileText className="w-6 h-6" />
                                1. Introduction
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    Celestial Trader Alliance Ltd. ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our trading services.
                                </p>
                                <p>
                                    By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                                </p>
                            </div>
                        </section>

                        {/* Information Collection */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-gold-500 flex items-center gap-3">
                                <UserCheck className="w-6 h-6" />
                                2. Information We Collect
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site.</li>
                                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                                    <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you verify your account.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Use of Information */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-gold-500 flex items-center gap-3">
                                <Lock className="w-6 h-6" />
                                3. Use of Your Information
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Create and manage your account.</li>
                                    <li>Process transactions and send related information, including transaction confirmations and invoices.</li>
                                    <li>Verify your identity and prevent fraud.</li>
                                    <li>Email you regarding your account or order.</li>
                                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                                    <li>Comply with legal obligations and regulatory requirements.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Security */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-gold-500 flex items-center gap-3">
                                <Shield className="w-6 h-6" />
                                4. Security of Your Information
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="pt-8 border-t border-white/10">
                            <p className="text-sm text-muted-foreground/60">
                                If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:support@celestialtrader.com" className="text-gold-500 hover:underline">support@celestialtrader.com</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
