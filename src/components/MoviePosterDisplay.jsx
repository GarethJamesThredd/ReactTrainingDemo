import React from 'react';

const MoviePosterDisplay = (props) => {

    return(
        <>
        <div className='whats-on-card'>
            <div className='whats-on-image-container'>
                <img src={props.poster} alt={props.title} className='whats-on-image' />
            </div>
            <p className='whats-on-title'>{props.title}</p>
            <p className="whats-on-synopsis">{props.summary}</p>
            
            <div className="row"> 
            <p className='whats-on-rating'>{props.review}</p>
            <div className="row whats-on-shows">
                {props.showings.map(show => {
                    return <p key={show}>{show}</p>;
                })}
            </div>
            
            </div>
        </div>

        </>
    );
};

export default MoviePosterDisplay;