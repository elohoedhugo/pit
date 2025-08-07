import React from "react";
import "../SecondHome/SecondHome.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import newImage from "../../assets/newImage.svg";
import cloudImage from "../../assets/cloudImage.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SecondHome = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <div id="homepage2">
      <div id="hheadingdiv">
        <FaArrowLeftLong className="react-icon" onClick={handleNavigate}/>
        <p id="hheadingp">Import / Recover Your Wallet</p>
        <FaRegQuestionCircle className="react-icon" id="question-icon" />
      </div>

      <div id="div2" className="otherdiv">
        <div className="imagecontainer" id="imgcon1">
          <img src={newImage} alt="" id="newimage" />
        </div>

        <div className="textdiv">
          <p className="textdivheading">
            Import your Seed Phrase / Private Key Wallet
          </p>
          <p className="textdivp">
            Import an existing wallet using a seed phrase or private key, or
            recover your wallet from the cloud
          </p>
        </div>
        <MdKeyboardArrowRight className="arrow-right"/>
      </div>

      <div id="div3" className="otherdiv">
        <div className="imagecontainer" id="imgcon2">
          <img src={cloudImage} alt="" id="newimage" />
        </div>
        <div className="textdiv">
          <p className="textdivheading">
            Cloud Wallet / Keyless Wallet
          </p>
          <p className="textdivp">Log in to your Blockpit account to recover your wallet.</p>
        </div>
        <MdKeyboardArrowRight className="arrow-right"/>
      </div>
    </div>
  );
};

export default SecondHome;
