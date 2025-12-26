import { useEffect, useRef, memo } from 'react';

function TradingViewTimeline() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        // Clear previous script if any (though React handles unmount, script might persist in DOM if not careful)
        container.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "feedMode": "all_symbols",
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "regular",
            "width": "100%",
            "height": "800",
            "locale": "en",
            "largeChartUrl": "",
            "customerStrategy": {
                "color": "#e6b325",
                "fallbackColor": "#e6b325",
                "labelColor": "#e6b325"
            }
        });

        container.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default memo(TradingViewTimeline);
