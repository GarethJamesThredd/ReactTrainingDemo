import React from "react";
import searchIcon from "../assets/images/searchIcon.png";

const HeaderSearch = () => {
  return (
    <div className="row">
      <input type="text" className="text-input"/>
      <img alt="searchIcon" src={searchIcon} className="logo" onClick={() => {console.log("Search")}}/>
    </div>
  );
};

export default HeaderSearch;
