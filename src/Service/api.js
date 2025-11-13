const API_KEY = "CG-qjuqnU5uQMNYR74jxTo5mCYB";
const BASE_URL = "https://api.coingecko.com/api/v3/";

export const fetchCoinsUSD = async () => {
    const response = await fetch(
        `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    );
    const usdData = await response.json();
    return usdData.map((coin) => ({
        id: coin.id,
        name: coin.name,
        price_usd: coin.current_price,
        marketCap_usd: coin.market_cap,
        rank: coin.market_cap_rank,
    }));
};

export const fetchCoinsINR = async () => {
    const response = await fetch(
        `${BASE_URL}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    );
    const inrData = await response.json();
    return inrData.map((coin) => ({
        id: coin.id,
        name: coin.name,
        price_inr: coin.current_price,
        marketCap_inr: coin.market_cap,
        rank: coin.market_cap_rank,
    }));
};

export const searchCoins = async (query, currency = 'usd') => {
    // Step 1: Search by name
    const response = await fetch(`${BASE_URL}/search?query=${query}`);
    const data = await response.json();

    const results = data.coins; // Fix: define results

    // Step 2: For each result, fetch detailed market data
    const detailedData = await Promise.all(
        results.map(async (coin) => {
            const res = await fetch(`${BASE_URL}/coins/${coin.id}?localization=false&tickers=false&market_data=true`);
            const detail = await res.json();

            return {
                id: detail.id,
                coinname: detail.name,
                rank: detail.market_cap_rank,
                image: detail.image?.small,
                price_usd: detail.market_data?.current_price?.usd || 0,
                price_inr: detail.market_data?.current_price?.inr || 0,
                marketCap_usd: detail.market_data?.market_cap?.usd || 0,
                marketCap_inr: detail.market_data?.market_cap?.inr || 0,
            };
        })
    );

    return detailedData;
};


export const fetchCoinChartData = async (id, currency = 'usd', days = 7) => {
    const response = await fetch(
        `${BASE_URL}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
    const data = await response.json();

    // Check if prices exist
    if (!data || !data.prices) {
        console.warn(`No chart data found for coin ${id} in currency ${currency}`);
        return []; // return empty array if no prices
    }

    return data.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
        price
    }));
};

export const fetchCoinDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true`);
    const data = await res.json();

    return {
        id: data.id,
        coinname: data.name,
        rank: data.market_cap_rank,
        price_usd: data.market_data.current_price.usd,
        price_inr: data.market_data.current_price.inr,
        marketCap_usd: data.market_data.market_cap.usd,
        marketCap_inr: data.market_data.market_cap.inr,
    };
};
