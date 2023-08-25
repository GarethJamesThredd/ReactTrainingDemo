import React from 'react';

const MoviePosterDisplay = (props) => {

    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
            <p>{props.rating}</p>
            <img src={props.poster} alt={props.title}></img>

            {props.showings.map(title => {
        return <div key={title}>{title}</div>;
      })}
        </div>
    );
};

export default MoviePosterDisplay;