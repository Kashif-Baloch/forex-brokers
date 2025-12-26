// Price Service - Handles fetching and caching live prices
// Can be easily switched to real API (Alpha Vantage, Finnhub, etc.)

export interface PriceData {
  symbol: string;
  bid: number;
  ask: number;
  change: number;
  changePercent: number;
  type: "forex" | "metal";
  timestamp: number;
}

// Cache for prices
let priceCache: Map<string, PriceData> = new Map();

// Mock data - Replace with real API calls
const mockPriceData: Record<string, Omit<PriceData, "timestamp">> = {
  EURUSD: {
    symbol: "EURUSD",
    bid: 1.0845,
    ask: 1.0847,
    change: 0.0015,
    changePercent: 0.14,
    type: "forex"
  },
  GBPUSD: {
    symbol: "GBPUSD",
    bid: 1.2650,
    ask: 1.2652,
    change: 0.0025,
    changePercent: 0.20,
    type: "forex"
  },
  USDJPY: {
    symbol: "USDJPY",
    bid: 149.85,
    ask: 149.87,
    change: -0.15,
    changePercent: -0.10,
    type: "forex"
  },
  AUDUSD: {
    symbol: "AUDUSD",
    bid: 0.6520,
    ask: 0.6522,
    change: 0.0008,
    changePercent: 0.12,
    type: "forex"
  },
  XAUUSD: {
    symbol: "XAUUSD",
    bid: 2045.30,
    ask: 2045.50,
    change: 5.50,
    changePercent: 0.27,
    type: "metal"
  },
  XAGUSD: {
    symbol: "XAGUSD",
    bid: 24.15,
    ask: 24.17,
    change: 0.35,
    changePercent: 1.47,
    type: "metal"
  }
};

/**
 * Fetch live prices from API
 * TODO: Replace with real API endpoint (Alpha Vantage, Finnhub, or broker API)
 */
export async function fetchLivePrices(): Promise<PriceData[]> {
  try {
    // Option 1: Fetch from your backend API
    // const response = await fetch('/api/prices');
    // if (!response.ok) throw new Error('Failed to fetch prices');
    // return response.json();

    // Option 2: Use real market data API
    // Example: Alpha Vantage, Finnhub, or IQFeed
    // const response = await fetch(
    //   `https://api.example.com/prices?symbols=EURUSD,GBPUSD,XAUUSD`,
    //   { headers: { 'Authorization': `Bearer ${API_KEY}` } }
    // );
    // return response.json();

    // For now, return mock data with slight variations
    return Object.values(mockPriceData).map((price) => ({
      ...price,
      // Add slight random variation to simulate live movement
      bid: price.bid + (Math.random() - 0.5) * 0.0001,
      ask: price.ask + (Math.random() - 0.5) * 0.0001,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.error("Error fetching prices:", error);
    // Return cached data or mock data on error
    return Object.values(mockPriceData).map((price) => ({
      ...price,
      timestamp: Date.now()
    }));
  }
}

/**
 * Subscribe to real-time price updates using WebSocket
 * TODO: Implement with real WebSocket provider
 */
export function subscribeToPrices(
  symbols: string[],
  onUpdate: (prices: PriceData[]) => void,
  interval: number = 2000
): () => void {
  // Polling implementation (replace with WebSocket for production)
  const intervalId = setInterval(async () => {
    const prices = await fetchLivePrices();
    onUpdate(prices);
  }, interval);

  // Return unsubscribe function
  return () => clearInterval(intervalId);
}

/**
 * Get cached price for a symbol
 */
export function getCachedPrice(symbol: string): PriceData | undefined {
  return priceCache.get(symbol);
}

/**
 * Update price cache
 */
export function updatePriceCache(prices: PriceData[]): void {
  prices.forEach((price) => {
    priceCache.set(price.symbol, price);
  });
}
