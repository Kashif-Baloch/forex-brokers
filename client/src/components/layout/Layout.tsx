import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PriceTicker from "@/components/PriceTicker";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-gold-500/30">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
