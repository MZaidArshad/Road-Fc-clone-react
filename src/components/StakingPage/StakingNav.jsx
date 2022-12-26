import React from "react";
import "./StakingNav.css";
import StakingBtn from "./StakingBtn";

function StakingNav({ activeLink }) {
  return (
    <div className="col-lg-3 mx-xs-10 staking-box mt-3">
      <div className="row d-flex justify-content-center mt-3 mb-3">
        <StakingBtn
          active={activeLink === 1 ? true : false}
          icon="./images/trending.png"
          text="Staking & Point"
          link="/Staking"
        />
        <StakingBtn
          active={activeLink === 2 ? true : false}
          icon="./images/mint.png"
          text="Mint"
          link="/Mint"
        />
        <StakingBtn
          active={activeLink === 3 ? true : false}
          icon="./images/Breed.png"
          text="Breed"
          link="/Breed"
        />
        <StakingBtn
          active={activeLink === 4 ? true : false}
          icon="./images/gift-box.png"
          text="Mystery Box"
          link="/MysteryBox"
        />
        <StakingBtn
          active={activeLink === 5 ? true : false}
          icon="./images/nft.png"
          text="NFT Staking"
          link="/NFTstaking"
        />
        <StakingBtn
          active={activeLink === 6 ? true : false}
          icon="./images/myNft.png"
          text="My NFT"
          link="/MyNFTs"
        />
      </div>
    </div>
  );
}

export default StakingNav;
