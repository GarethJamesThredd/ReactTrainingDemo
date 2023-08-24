import React from "react";
import navigationData from "../config/navigationData.json";
import HeaderItem from "./HeaderItem";
import cccLogo from "../assets/images/cccLogo.png";
import HeaderSearch from "./HeaderSearch";
const Header = () => {
  return (
    <div className="row dark">
      <img alt="cccLogo" src={cccLogo} className="logo" />
      <div className="row header">
        {navigationData.map((item) => (
          <HeaderItem key={item.route} title={item.title} route={item.route} />
        ))}
      </div>
      <HeaderSearch />
    </div>
  );
};

export default Header;
