import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import logo from "../assets/logo1.png"
import DetailCard from '../Components/DetailCard'
import { fetchCoinChartData,fetchCoinDetails } from '../Service/api'

const CoinsDetails = () => {
  const [currency, setCurrency] = useState('usd')
  const { id } = useParams()//  gets the coin id from the URL
  const [chartData, setChartData] = useState([]);
  const [coinInfo, setCoinInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  
useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const coin = await fetchCoinDetails(id);
        setCoinInfo(coin);

        const chart = await fetchCoinChartData(id, currency, 7);
        setChartData(chart);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id, currency]);
  
  return (
    <div className="w-screen min-h-screen overflow-y-auto bg-[#2d2b4f]">
      <div className="sm:h-2/12 md:h-2/12 lg:h-2/12 bg-[#040230]">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around space-y-3 sm:space-y-0 text-center py-4">
          <NavLink to="/">
            <img src={logo} alt="BitTrakr" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 ml-4 mt-1" />
          </NavLink>

          <div className="flex flex-col items-center space-y-3">
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
        </div>
      </div>

      {loading ? (
        <p className="text-center text-white mt-10">Loading coin data...</p>
      ) : coinInfo ? (
        <div className="flex justify-center items-center py-10">
          <DetailCard chartData={chartData} coinInfo={coinInfo} currency={currency} />
        </div>
      ) : (
        <p className="text-center text-white mt-10">Coin not found.</p>
      )}
    </div>
  )
}

export default CoinsDetails
