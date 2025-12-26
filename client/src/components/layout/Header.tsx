import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const tradingMenu = [
  { label: "Account Types", href: "/accounts" },
  { label: "Instruments", href: "/instruments" },
  { label: "Trading Platforms", href: "/platforms" },
  { label: "Spreads & Commissions", href: "/spreads" },
  { label: "Copy Trading", href: "/copy-trade" },
  { label: "Multi-Account Manager", href: "/mam" },
  { label: "EA & HFT Trading", href: "/ea-hft" },
  { label: "Islamic Account", href: "/islamic-account" },
  { label: "Promotions (100% Bonus)", href: "/promotions" },
];

const discoverMenu = [
  { label: "About Us", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "News & Analysis", href: "/news" },
];

const companyMenu = [
  { label: "Contact Us", href: "/contact" },
  { label: "Deposit & Withdrawal", href: "/funding" },
  { label: "IB & Affiliates", href: "/partners" },
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.svg" alt="Celestial Trader Alliance" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Trading Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-gold-400 transition-colors">
                Trading
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-card border-white/10">
              {tradingMenu.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer text-muted-foreground hover:text-gold-400">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Discover Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-gold-400 transition-colors">
                Discover
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-card border-white/10">
              {discoverMenu.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer text-muted-foreground hover:text-gold-400">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Company Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-gold-400 transition-colors">
                Company
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-card border-white/10">
              {companyMenu.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer text-muted-foreground hover:text-gold-400">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="https://client.celestialtrader.com/login">
            <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
              Login
            </Button>
          </a>
          <a href="https://client.celestialtrader.com/register">
            <Button className="bg-gold-gradient text-background hover:opacity-90 font-bold">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background border-l border-white/10 overflow-y-auto">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              {/* Trading Section */}
              <div>
                <h3 className="text-sm font-semibold text-gold-500 mb-3">Trading</h3>
                <nav className="flex flex-col gap-2">
                  {tradingMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-gold-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Discover Section */}
              <div>
                <h3 className="text-sm font-semibold text-gold-500 mb-3">Discover</h3>
                <nav className="flex flex-col gap-2">
                  {discoverMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-gold-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Company Section */}
              <div>
                <h3 className="text-sm font-semibold text-gold-500 mb-3">Company</h3>
                <nav className="flex flex-col gap-2">
                  {companyMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-gold-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a href="https://client.celestialtrader.com/login" className="w-full">
                  <Button variant="outline" className="w-full border-gold-500 text-gold-500">
                    Login
                  </Button>
                </a>
                <a href="https://client.celestialtrader.com/register" className="w-full">
                  <Button className="w-full bg-gold-gradient text-background font-bold">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
