import React from 'react'
import { NavLink } from 'react-router-dom'

const CoinsCard = ({ coin }) => {
  return (
    <>
      <NavLink to={`/coin/${coin.id}`}>
        <div className="flex justify-between items-center text-white text-sm sm:text-base font-semibold px-4 py-3 border-b border-gray-700 hover:bg-gray-500">
          <div className="w-1/6 text-center text-white">{coin.rank}</div>
          <div className="w-2/6 text-center text-white">{coin.name}</div>
          <div className="w-1/6 text-center text-white">{coin.price_usd
            ? `$${coin.price_usd.toLocaleString()}`
            : `₹${coin.price_inr?.toLocaleString()}`}
          </div>
          <div className="w-2/6 text-center text-white">{coin.marketCap_usd
            ? `$${coin.marketCap_usd.toLocaleString()}`
            : `₹${coin.marketCap_inr?.toLocaleString()}`}
          </div>
        </div>
      </NavLink>
    </>
  )
}

export default CoinsCard