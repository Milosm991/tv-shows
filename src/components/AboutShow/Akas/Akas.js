import React from 'react'

import { Link } from 'react-router-dom'

import './Akas.scss'

const Akas = ({ akas, id, setClass }) => {
    return (
        
        <div className='akas' onClick={() => setClass()}>
            <h3>Aka's</h3>
            <div  className='listOfAkas'>
            <ul>
                {akas.slice(0, 3).map((aka, i) => 
                <li key={i}>{`${aka.name} - ${aka.country}`}</li>
                )}
            </ul>
            <Link to={`all_akas/${id}`}><h6>More Aka's</h6></Link>
            </div>
        </div>
    )
}
export { Akas }