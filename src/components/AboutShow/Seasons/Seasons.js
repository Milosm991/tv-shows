import React from 'react' 
import { Link } from 'react-router-dom'

import './Seasons.scss'

class Seasons extends React.Component {

    
    render() {
        const { seasons } = this.props
        return (
        <div className='seasons' onClick={() => this.props.setClass()}>
            <h3>Seasons ({seasons.length})</h3>
            <div  className='listOfDates'>
            <ol>
                {seasons.map((season, i) => 
                <Link  key={i} to={`season_episodes/${season.id}`}><li>{`${season.premiereDate} - ${season.endDate}`}</li>
                </Link>)}
            </ol>
                <h6>Click on season for episodes</h6>
            </div>
        </div>
        )
    }
}
export { Seasons }