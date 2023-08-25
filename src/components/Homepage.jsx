import React from 'react';
import homepageImg from '../assets/images/homePage.png'
import NowShowing from './NowShowing';

const Homepage = () => {
    return (
        <div className='container'>
            <div className='homepage'>
                <img alt='homepageImage' src={homepageImg} id='homepageImg'/>
            </div>
            <NowShowing />
        </div>
    )
}

export default Homepage