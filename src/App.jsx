import React from "react"
import Home from "./Pages/Home"
import CoinsCard from "./Components/CoinsCard"
import CoinsDetails from "./Pages/CoinsDetails"
import Notfound from "./Notfound"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/coincard" element={<CoinsCard/>}></Route>
          <Route path="/coindetail" element={<CoinsDetails/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
