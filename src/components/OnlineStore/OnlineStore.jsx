import React from "react";
import "./OnlineStore.css";
import shopeeLogo from "../../assets/shopee-logo.jpg";
import tokopediaLogo from "../../assets/tokopedia-logo.jpg";

const OnlineStore = () => {
  return (
    <div className="online-store">
      <div className="container-store">
        <a
          href="https://shopee.co.id"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-box"
        >
          <img src={shopeeLogo} alt="Shopee" />
        </a>
        <a
          href="https://tokopedia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-box"
        >
          <img src={tokopediaLogo} alt="Tokopedia" />
        </a>
      </div>
    </div>
  );
};

export default OnlineStore;
