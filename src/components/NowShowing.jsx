import React from 'react'
import NowShowingShows from './NowShowingShows'
import movieData from '../movies.json'

const NowShowing = () => {
    return (
        <div className='now-showing'>
            <h2>NOW SHOWING</h2>
            <div className='now-showing-card-container'>
                {movieData.movies.map((movie) => (
                    <NowShowingShows key={movie._id} image={movie.poster} title={movie.title} />
                ))}
                
            </div>
        </div>
    )
}

export default NowShowing