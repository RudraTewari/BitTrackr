import React from 'react'
import CoinChart from './CoinChart'

const DetailCard = ({ chartData, coinInfo, currency }) => {

    const price = currency === 'inr'
        ? coinInfo.price_inr.toLocaleString('en-IN')
        : coinInfo.price_usd.toLocaleString('en-US');

    const marketCap = currency === 'inr'
        ? coinInfo.marketCap_inr.toLocaleString('en-IN')
        : coinInfo.marketCap_usd.toLocaleString('en-US');
    return (
        <>
            <div className="flex flex-col items-center w-full px-4">

                {/* Responsive chart container */}
                <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 bg-slate-950 rounded-lg p-3 mt-4 shadow-md min-h-[300px]">
                    {chartData.length > 0 ? (
                        <CoinChart data={chartData} color="#0ff" />
                    ) : (
                        <p className="text-white text-center py-4">Chart data not available</p>
                    )}
                </div>

                {/* Coin Info Section */}
                <div className="max-w-5xl w-full bg-[#0b0725] mt-6 rounded-lg shadow-md px-2">
                    <div className="flex flex-col text-white text-sm sm:text-base font-semibold px-4 py-3 border-b border-gray-700 space-y-2">
                        <div className="text-center">Rank: {coinInfo.rank}</div>
                        <div className="text-center">Currency Name: {coinInfo.coinname}</div>
                        <div className="text-center">Price: {currency === 'inr' ? `₹${price}` : `$${price}`}</div>
                        <div className="text-center">Market Cap: {currency === 'inr' ? `₹${marketCap}` : `$${marketCap}`}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCard
