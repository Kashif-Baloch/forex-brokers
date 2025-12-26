import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/About";
import AccountTypes from "@/pages/AccountTypes";
import Contact from "@/pages/Contact";
import Funding from "@/pages/Funding";
import Home from "@/pages/Home";
import Instruments from "@/pages/Instruments";
import NotFound from "@/pages/NotFound";
import Partners from "@/pages/Partners";
import Platforms from "@/pages/Platforms";
import Education from "@/pages/Education";
import News from "@/pages/News";
import Spreads from "@/pages/Spreads";
import CopyTrade from "@/pages/CopyTrade";
import MAM from "@/pages/MAM";
import EAHFT from "@/pages/EAHFT";
import Promotions from "@/pages/Promotions";
import Cookies from "@/pages/Cookies";
import Privacy from "@/pages/Privacy";
import IslamicAccount from "@/pages/IslamicAccount";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { CookieProvider } from "./context/CookieContext";
import CookieConsent from "./components/CookieConsent";
import { HelmetProvider } from "react-helmet-async";

import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/accounts" component={AccountTypes} />
        <Route path="/instruments" component={Instruments} />
        <Route path="/funding" component={Funding} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
        <Route path="/platforms" component={Platforms} />
        <Route path="/education" component={Education} />
        <Route path="/news" component={News} />
        <Route path="/spreads" component={Spreads} />
        <Route path="/copy-trade" component={CopyTrade} />
        <Route path="/mam" component={MAM} />
        <Route path="/ea-hft" component={EAHFT} />
        <Route path="/promotions" component={Promotions} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/islamic-account" component={IslamicAccount} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <CategoryProvider>
          <CookieProvider>
            <TooltipProvider>
              <HelmetProvider>
                <Toaster />
                <CookieConsent />
                <Router />
              </HelmetProvider>
            </TooltipProvider>
          </CookieProvider>
        </CategoryProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
