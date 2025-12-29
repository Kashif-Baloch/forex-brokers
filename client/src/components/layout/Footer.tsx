import { Link } from "wouter";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useCookie } from "@/context/CookieContext";
import { toast } from "sonner";

export default function Footer() {
  const { openSettings } = useCookie();
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img
              src="/logo.svg"
              alt="Celestial Trader Alliance"
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your financial future deserves a reliable partner. At Celestial
              Trader Alliance Ltd., we offer more than just a trading platform –
              we offer an alliance built on trust and opportunity.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-gold-500 hover:text-background transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-gold-500 hover:text-background transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-gold-500 hover:text-background transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-gold-500 hover:text-background transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-500">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/accounts"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/platforms"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/copy-trade"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Copy Trading
                </Link>
              </li>
              <li>
                <Link
                  href="/mam"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  MAM / PAMM
                </Link>
              </li>
              <li>
                <Link
                  href="/ea-hft"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  EA & HFT
                </Link>
              </li>
              <li>
                <Link
                  href="/islamic-account"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Islamic Account
                </Link>
              </li>
              <li>
                <Link
                  href="/promotions"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <button
                  onClick={openSettings}
                  className="text-muted-foreground hover:text-gold-400 transition-colors text-sm text-left"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-500">
              Contact Us
            </h4>
            <ul className="space-y-6 text-sm text-muted-foreground">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-500">
                  📍
                </div>
                <span className="leading-relaxed">
                  Ground floor, The Sotheby Building, Rodney Bay, Gros-Islet,
                  Saint Lucia
                  <br />
                  PO Box 838, Castries Saint Lucia
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-500">
                  ✉️
                </div>
                <a
                  href="mailto:support@celestialtrader.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  support@celestialtrader.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-500">
                  📞
                </div>
                <a
                  href="tel:+17587163861"
                  className="hover:text-gold-400 transition-colors"
                >
                  +17587163861
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-500">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to stay updated with market news and special offers.
            </p>
            <form
              className="space-y-3"
              onSubmit={async e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const emailInput = form.elements.namedItem(
                  "email"
                ) as HTMLInputElement;
                const email = emailInput.value;

                if (!email) return;

                const btn = form.querySelector("button");
                if (btn) btn.disabled = true;

                try {
                  const res = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });

                  const data = await res.json();

                  if (data.success) {
                    // Show simple alert or toast if available, for now just reset
                    form.reset();
                    toast.success("Thank you for subscribing!");
                  } else {
                    toast.error(data.error || "Subscription failed");
                  }
                } catch (err) {
                  toast.error("Something went wrong. Please try again.");
                } finally {
                  if (btn) btn.disabled = false;
                }
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 text-sm transition-all"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gold-gradient text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider disabled:opacity-50"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Risk Warning & Disclaimer */}
        <div className="border-t border-white/5 pt-8 space-y-6">
          <div className="text-xs text-muted-foreground/60 text-center leading-relaxed space-y-4">
            <p>
              <strong>Risk Warning:</strong> Trading leveraged products,
              including Forex and CFDs, carries a significant level of risk to
              your capital and may not be appropriate for all investors. Prior
              to trading, please make sure you fully understand the risks
              involved, taking into consideration your investment objectives and
              level of experience, and get independent advice if necessary. In
              addition to accepting customers from the United States, UAE,
              India, Canada, Belgium, Sudan, Syria, and North Korea, Celestial
              Trader Alliance Ltd. does not provide binary options. You should
              be fully informed of the dangers associated with trading on margin
              and in the currency market before you begin, as well as your
              degree of experience.
            </p>
            <p>
              <strong>Disclaimer:</strong> An investment in derivatives may mean
              investors may lose an amount even greater than their original
              investment. Anyone wishing to invest in any of the products
              mentioned in celestialtrader.com should seek their own financial
              or professional advice. Trading of securities, forex, stock
              market, commodities, options and futures may not be suitable for
              everyone and involves the risk of losing part or all of your
              money. Trading in the financial markets has large potential
              rewards, but also large potential risk. You must be aware of the
              risks and be willing to accept them in order to invest in the
              markets. Don’t invest and trade with money which you can’t afford
              to lose. Forex Trading are not allowed in some countries, before
              investing your money, make sure whether your country is allowing
              this or not.
            </p>
            <p>
              You are strongly advised to obtain independent financial, legal
              and tax advice before proceeding with any currency or spot metals
              trade. Nothing in this site should be read or construed as
              constituting advice on the part of Celestial Trader Alliance Ltd.
              or any of its affiliates, directors, officers or employees.
            </p>
            <p>
              <strong>Restricted Regions:</strong> Celestial Trader Alliance
              Ltd. does not provide services for citizens/residents of the
              United States, Cuba, Iraq, UAE, India, Myanmar, North Korea,
              Sudan. The services of Celestial Trader Alliance Ltd. are not
              intended for distribution to, or use by, any person in any country
              or jurisdiction where such distribution or use local law or
              regulation. OR Information on this site is not directed at
              residents in any country or jurisdiction where such distribution
              or use would be contrary to local law or regulation.
            </p>
          </div>

          <div className="text-center text-xs text-muted-foreground/40 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Celestial Trader Alliance Ltd. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
