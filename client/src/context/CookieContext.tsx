import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookieConsent {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
}

interface CookieContextType {
    consent: CookieConsent | null;
    saveConsent: (consent: CookieConsent) => void;
    isSettingsOpen: boolean;
    openSettings: () => void;
    closeSettings: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function useCookie() {
    const context = useContext(CookieContext);
    if (!context) {
        throw new Error('useCookie must be used within a CookieProvider');
    }
    return context;
}

interface CookieProviderProps {
    children: ReactNode;
}

export function CookieProvider({ children }: CookieProviderProps) {
    const [consent, setConsent] = useState<CookieConsent | null>(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookie-consent');
        if (savedConsent) {
            try {
                setConsent(JSON.parse(savedConsent));
            } catch (e) {
                console.error('Failed to parse cookie consent', e);
            }
        }
    }, []);

    const saveConsent = (newConsent: CookieConsent) => {
        localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
        localStorage.setItem('cookie-consent-timestamp', new Date().toISOString());
        setConsent(newConsent);
        setIsSettingsOpen(false);
    };

    const openSettings = () => setIsSettingsOpen(true);
    const closeSettings = () => setIsSettingsOpen(false);

    return (
        <CookieContext.Provider value={{ consent, saveConsent, isSettingsOpen, openSettings, closeSettings }}>
            {children}
        </CookieContext.Provider>
    );
}
