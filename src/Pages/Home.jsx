import React from 'react'
import logo from '../assets/logo1.png'
import { useState } from 'react'
import CoinsDetails from './CoinsDetails'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [currency, setCurrency] = useState('')
  const [query, setQuery] = useState('')
  const handleSearch = (e) => { setQuery(e.target.value) }
  return (
    <>
      <div className=" w-screen h-screen overflow-y-auto p-0 m-0">
        <div className=" sm:h-2/12 md:h-2/12  lg:h-2/12 bg-[#040230]">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-3 ">
            <img src={logo} alt="BitTrakr" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32  ml-4 mt-1" />
            <div className="flex flex-col items-start space-y-3 ">
              <label htmlFor="framework" className="text-white font-medium">
                Choose Currency:
              </label>
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-white border border-gray-300 rounded-lg p-2 w-64 "
              >
                <option value="" className="text-gray-900">Select an option</option>
                <option value="usd" className="text-gray-900">USD</option>
                <option value="inr" className="text-gray-900">INR</option>
              </select>
            </div>
            <div className="flex mr-10 sm:w-40 md:w-64 lg:w-96">
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder='Search Coins'
                className=" w-full text-gray-900 bg-white border-2 border-gray-400 py-2 rounded-xl px-3 mt-2 "
              />
            </div>
          </div>
        </div>
        <div className="h-full sm:8/12 md:8/12 lg:8/12 bg-[#2d2b4f]">
          <div className="flex flex-col items-center justify-center text-center px-6 py-12">
            <h1 className="text-white text-3xl font-semibold mb-4">
              Welcome to BitTrackr
            </h1>
            <p className="text-white text-base md:text-lg max-w-3xl leading-relaxed">
              BitTrakr is a real-time crypto tracker that delivers live prices, market trends, and currency conversions through a clean,
              intuitive interface — helping users make smarter trading decisions.
            </p>
          </div>
          <div className="max-w-5xl bg-[#0b0725] mt-6 rounded-lg shadow-md mx-auto px-2">
            <div className="flex justify-between items-center text-white text-sm sm:text-base font-semibold px-4 py-3 border-b border-gray-700">
              <div className="w-1/6 text-center">Rank</div>
              <div className="w-2/6 text-center">Currency Name</div>
              <div className="w-1/6 text-center">Price</div>
              <div className="w-2/6 text-center">Market Cap</div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home