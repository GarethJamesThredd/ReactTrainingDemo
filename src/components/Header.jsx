import React, { useState } from "react";
import navigationData from "../config/navigationData.json";
import HeaderItem from "./HeaderItem";
import cccLogo from "../assets/images/cccLogo.png";
import HeaderSearch from "./HeaderSearch";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    console.log(search)
  }

  const navigateTo = (route) => {
    navigate(route)
  }

  return (
    <div className="row dark header">
      <img alt="cccLogo" src={cccLogo} className="logo" onClick={() => navigateTo('/')}/>
      <div className="row">
        {navigationData.map((item) => (
          <HeaderItem key={item.route} title={item.title} route={item.route} navigation={navigateTo}/>
        ))}
      </div>
      <HeaderSearch value={search} onChange={(event) => setSearch(event.target.value)} handleSearch={handleSearch}/>
    </div>
  );
};

export default Header;
