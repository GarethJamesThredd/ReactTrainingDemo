import React from "react";
import searchIcon from "../assets/images/searchIcon.png";

const HeaderSearch = (props) => {
  return (
    <div className="row">
      <input type="text" className="text-input" value={props.value} onChange={props.onChange}/>
      <img alt="searchIcon" src={searchIcon} className="logo" onClick={props.handleSearch}/>
    </div>
  );
};

export default HeaderSearch;
