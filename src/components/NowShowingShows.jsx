import React from 'react'

const NowShowingShows = (props) => (
    <div className='now-showing-card'>
        <div className='now-showing-image-container'>
            <img alt='movie-poster' src={props.image} className='now-showing-image' />
        </div>
        <p className='now-showing-title'>{props.title}</p>
    </div>
)

export default NowShowingShows