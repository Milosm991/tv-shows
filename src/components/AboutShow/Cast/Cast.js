import React from 'react'
import { Link } from 'react-router-dom' 

import './Cast.scss'

const Cast = ({ cast, setClass, id }) => {
    return (
        <div className='cast' onClick={() => setClass()}>
            <h3>Cast</h3>
            <div  className='listOfCast'>
            <ul>
                {cast.slice(0, 6).map((char, i) => 
                <li key={i}>{`${char.name} - ${char.charName}`}</li>
                )}
            </ul>
            <Link to={`all_cast/${id}`}><h6>More Cast</h6></Link>
            </div>
        </div>
    )
}
export { Cast }