import React from 'react';

const HeaderItem = (props) => {

  const handleClick = () => {
    const route = props.route;
    props.navigation(route);
  }

  return (
    <div className='headerLinks'>
      <h2 onClick={handleClick}>{props.title}</h2>
    </div>
  );
}


export default HeaderItem;
