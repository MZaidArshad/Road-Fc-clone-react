import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Staking from "./components/StakingPage/Staking";
import Mint from "./components/MintPage/Mint";
import Breed from "./components/BreedPage/Breed";
import MysteryBox from "./components/MysteryBoxPage/MysteryBox";
import NFTstaking from "./components/NFTstakingPage/NFTstaking";
import MyNFT from "./components/MyNTFpage/MyNFT";
import Presale from "./components/Presale/Presale";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Staking" element={<Staking />} />
          <Route path="/Mint" element={<Mint />} />
          <Route path="/Breed" element={<Breed />} />
          <Route path="/MysteryBox" element={<MysteryBox />} />
          <Route path="/NFTstaking" element={<NFTstaking />} />
          <Route path="/MyNFTs" element={<MyNFT />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
