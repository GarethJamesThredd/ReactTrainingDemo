import React from 'react';

function HeaderItem({ title, route }) {
  return (
    <div className='headerLinks'>
      <h2 onClick={()=> {window.location.href = route}}>{title}</h2>
    </div>
  );
}

export default HeaderItem;
