import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import style from './ListOfShows.module.scss'

const ListOfShows = ({ shows }) => {
    return (
        <div className={style.list}>
        {shows.map(show => <Link key={show.id} to={`/about_show/${show.id}`}><Row className={style.show} >
            <Col xl={3} xs={3}>
                <div className={style.image}>
                    <img src={show.image} alt=''></img>
                </div>
            </Col>
            <Col xl={9} xs={9}>
                <h4>{show.name}</h4>
            </Col>
        </Row></Link>)}
        </div>
    )
}
export { ListOfShows }
