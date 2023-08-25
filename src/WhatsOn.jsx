import React from 'react'
import MoviePosterDisplay from './components/MoviePosterDisplay'
import movieData from "./movies.json";

const WhatsOn = () => {
    
    return (
        <div className='body'>
            <h1>Whats On Page</h1>
            <div class="grid-container">
                {movieData.movies.map((item) => (
                    <MoviePosterDisplay title={item.title} poster={item.poster} url={item.url} review={item.rating} showings={item.showings} summary={item.summary}/>
                
                ))}
            </div>
        </div>
        
    )
}

export default WhatsOn