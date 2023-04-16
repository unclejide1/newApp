import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/dummyData";
import WalletModal from "./Modal";
import UseEmail from "./UseEmail";

const Discover = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleShow = (name) => {
    setShow(true);
    setName(name);
  };

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="discovery">
      <div className="main-container">
        <div className="container">
          <div className="wallet-block">
            <div className="wallet-block-title">
              <h3>Select a wallet to continue</h3>
            </div>
 
            <div className="wallet-block-list">
            {links &&
              links.map((data, index) => (
                
                // <Link to={`/wallets/${data?.name}`} className="wallet-card box-shadow" key={index}>
                <div
                key={data.id}
      onClick={() => handleShow(data.name)}
      className="col-md-2 col-xs-3 wallets">
                  <div className="wallet-card-icon  ">
                    <img src={data?.endpoint} alt="icon" />
                  </div>
                  <h4 className="wallet-name">{data?.name}</h4>
                  <p className="wallet-type">Dap</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WalletModal show={show} handleClose={handleClose} name={name} />
    </div>
  );
};

export default Discover;
