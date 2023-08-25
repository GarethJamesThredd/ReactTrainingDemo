import React from 'react';

const MoviePosterDisplay = (props) => {

    return(
        
        <div className="grid-item">
            <div className="product">
                <div className="details">
                    <img src={props.poster} alt={props.title} width="300"/>
                    <h1><a href={props.url}>{props.title}</a></h1>
                    <h2>Synopsis</h2>
                    <p>{props.summary}</p>
                    <h2>Review</h2>
                    <p>{props.review}</p>
                    <h2>Showings</h2>
                    {props.showings.map(title => {
                        return <p key={title}>{title}</p>;
                    })}
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default MoviePosterDisplay;