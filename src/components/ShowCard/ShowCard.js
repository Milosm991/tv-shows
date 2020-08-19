import React from 'react'

import { Card, ListGroup, ListGroupItem, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { star } from 'react-icons-kit/fa/star'
import { Icon } from 'react-icons-kit'

import style from './ShowCard.module.scss'

const ShowCard = ({ name, image, rating, genres, id }) => {
    return (
        <Col  lg={4} md={6} sm={12} className={style.show}>
            <Card style={{ width: '100%' }} className={style.showCard}>
                <Link to={`/about_show/${id}`}><Card.Img variant="top" src={image} /></Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Icon icon={star} style={{ color: 'gold' }} /> <b>{rating}</b>/10</ListGroupItem>
                    <ListGroupItem>{genres.map((genre, i) => <span className={style.genre} key={i}>{genre}</span>)}</ListGroupItem>
                    
                </ListGroup>
            </Card>
        </Col>
    )
}
export { ShowCard }