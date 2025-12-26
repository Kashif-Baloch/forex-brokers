import { useState, useEffect } from 'react';
import { useCookie } from '@/context/CookieContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Shield, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const { consent, saveConsent, isSettingsOpen, openSettings, closeSettings } = useCookie();
    const [showBanner, setShowBanner] = useState(false);

    // Local state for preferences inside the modal
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Show banner only if no consent has been saved yet
        const savedConsent = localStorage.getItem('cookie-consent');
        if (!savedConsent) {
            setShowBanner(true);
        }
    }, []);

    // Update local preferences if we have saved consent (for when reopening settings)
    useEffect(() => {
        if (consent) {
            setPreferences(consent);
        }
    }, [consent]);

    const handleAcceptAll = () => {
        const all = { essential: true, analytics: true, marketing: true };
        saveConsent(all);
        setShowBanner(false);
    };

    const handleRejectNonEssential = () => {
        const essentialOnly = { essential: true, analytics: false, marketing: false };
        saveConsent(essentialOnly);
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
        setShowBanner(false);
    };

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isSettingsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSettingsOpen]);

    return (
        <>
            {/* Banner */}
            <AnimatePresence>
                {showBanner && !isSettingsOpen && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                    >
                        <div className="container max-w-5xl mx-auto">
                            <div className="bg-[#021833]/95 backdrop-blur-md border border-gold-500/20 rounded-2xl shadow-2xl p-6 md:flex items-center gap-8 relative overflow-hidden">
                                {/* Decorative background glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <div className="flex-1 space-y-2 mb-6 md:mb-0">
                                    <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-gold-500" />
                                        We use cookies
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                                        We use cookies to enhance your experience, analyze traffic, and personalize content.
                                        You can accept all cookies, reject non-essential cookies, or manage your preferences.
                                        <br className="hidden sm:block" />
                                        <span className="opacity-70 mt-1 inline-block">
                                            <a href="/privacy" className="hover:text-gold-400 underline decoration-gold-500/30 underline-offset-4 transition-colors">Privacy Policy</a>
                                            {" • "}
                                            <a href="/cookies" className="hover:text-gold-400 underline decoration-gold-500/30 underline-offset-4 transition-colors">Cookie Policy</a>
                                        </span>
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                                    <Button
                                        onClick={handleAcceptAll}
                                        className="bg-gold-gradient text-background hover:opacity-90 font-bold min-w-[120px]"
                                    >
                                        Accept All
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={handleRejectNonEssential}
                                        className="border-white/10 text-white hover:bg-white/5 hover:text-white"
                                    >
                                        Reject Non-Essential
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={openSettings}
                                        className="text-gold-400 hover:text-gold-300 hover:bg-gold-500/10"
                                    >
                                        Manage Preferences
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Preferences Modal */}
            <AnimatePresence>
                {isSettingsOpen && (
                    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeSettings}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#021833] border border-gold-500/20 w-full max-w-lg rounded-t-2xl md:rounded-2xl shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
                        >
                            <div className="p-6 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-serif font-bold text-white">Cookie Preferences</h2>
                                    <Button variant="ghost" size="icon" onClick={closeSettings} className="text-gray-400 hover:text-white">
                                        <X className="w-5 h-5" />
                                    </Button>
                                </div>

                                <p className="text-sm text-gray-300">
                                    Manage your cookie settings here. Essential cookies are required for the website to function properly.
                                </p>

                                <div className="space-y-4">
                                    {/* Essential */}
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-white">Essential</span>
                                                <span className="text-xs px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/20">Required</span>
                                            </div>
                                            <p className="text-xs text-gray-400">Strictly necessary for security and core site features.</p>
                                        </div>
                                        <Switch checked={true} disabled className="data-[state=checked]:bg-gold-500 opacity-50" />
                                    </div>

                                    {/* Analytics */}
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/20 transition-colors">
                                        <div className="space-y-1">
                                            <span className="font-bold text-white">Analytics</span>
                                            <p className="text-xs text-gray-400">Help us understand how visitors interact with the website.</p>
                                        </div>
                                        <Switch
                                            checked={preferences.analytics}
                                            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
                                            className="data-[state=checked]:bg-gold-500"
                                        />
                                    </div>

                                    {/* Marketing */}
                                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-gold-500/20 transition-colors">
                                        <div className="space-y-1">
                                            <span className="font-bold text-white">Marketing</span>
                                            <p className="text-xs text-gray-400">Used to deliver relevant advertisements and track performance.</p>
                                        </div>
                                        <Switch
                                            checked={preferences.marketing}
                                            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
                                            className="data-[state=checked]:bg-gold-500"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                                    <Button
                                        onClick={handleAcceptAll}
                                        className="flex-1 bg-gold-gradient text-background hover:opacity-90 font-bold"
                                    >
                                        Accept All
                                    </Button>
                                    <Button
                                        onClick={handleSavePreferences}
                                        variant="outline"
                                        className="flex-1 border-gold-500 text-gold-500 hover:bg-gold-500/10"
                                    >
                                        Save Preferences
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
