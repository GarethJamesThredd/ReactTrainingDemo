import React from 'react'
import MoviePosterDisplay from './components/MoviePosterDisplay'
import homepageImg from './assets/images/homePage.png'
import movieData from "./movies.json";

const WhatsOn = () => {
    
    return (
        <div className='container'>
            <div className='homepage'>
                <img alt='homepageImage' src={homepageImg} id='homepageImg'/>
            </div>
            <div className='whats-on'>
                <h2>What's On</h2>
                <div className='whats-on-card-container'>
                    {movieData.movies.map((item) => (
                        <MoviePosterDisplay key={item._id} title={item.title} poster={item.poster} url={item.url} review={item.rating} showings={item.showings} summary={item.summary}/>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default WhatsOn;