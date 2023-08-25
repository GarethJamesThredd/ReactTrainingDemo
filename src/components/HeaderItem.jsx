import React from 'react';
import {useNavigate} from 'react-router-dom'

const HeaderItem = ({title, route}) => {
  const navigate = useNavigate()

  const navigateTo = (route) => {
    navigate(route)
  }

  return (
    <div className='headerLinks'>
      <h2 onClick={()=> {navigateTo(route)}}>{title}</h2>
    </div>
  );
}

export default HeaderItem;
