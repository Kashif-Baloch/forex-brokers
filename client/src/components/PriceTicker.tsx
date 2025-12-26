import { useEffect, useRef, memo } from "react";

function PriceTicker() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear previous widget if any
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500 Index"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100 Cash CFD"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR to USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "proName": "FX_IDC:GBPUSD",
          "title": "GBP to USD"
        },
        {
          "proName": "FX_IDC:USDJPY",
          "title": "USD to JPY"
        },
        {
          "proName": "TVC:GOLD",
          "title": "Gold"
        },
        {
          "proName": "TVC:SILVER",
          "title": "Silver"
        },
        {
          "proName": "TVC:USOIL",
          "title": "Crude Oil"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "dark",
      "isTransparent": true,
      "displayMode": "adaptive",
      "locale": "en"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-[#020617]/80 backdrop-blur-md border-b border-gold-500/20 shadow-[0_4px_20px_-10px_rgba(234,179,8,0.1)] relative z-40">
      {/* TradingView Widget BEGIN */}
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
      {/* TradingView Widget END */}
    </div>
  );
}

export default memo(PriceTicker);
