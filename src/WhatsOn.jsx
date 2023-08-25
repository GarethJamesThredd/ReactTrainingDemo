import React from 'react'
import MoviePosterDisplay from './components/MoviePosterDisplay'

const WhatsOn = () => {
    
    return (
        <div> 
            <h1>What is On</h1>
            <div>
                <MoviePosterDisplay title="The Pool" poster="" rating="12A" showings={['12:30', '14:00', '20:00']} summary="suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis"/>
            </div>
        </div>
        
    )
}

export default WhatsOn