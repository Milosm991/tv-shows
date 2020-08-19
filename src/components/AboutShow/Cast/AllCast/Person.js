import React from 'react'

import { Col, Card } from 'react-bootstrap'

import './Person.scss'

const Person = ({ name, birthday, country, charName, image, countryCode, deathday }) => {
    return (
    <Col xl={4} lg={4} md={6} xs={12} className='personCol' >
        <Card style={{ width: '100%' }} className='person'>
            <div className='front'>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title><h5>{`${name} - ${charName}`}</h5></Card.Title>
                    </Card.Body>
            </div>
            <div className='back'>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li><h4>{name}</h4></li>
                            {birthday !== null ? <li><b>Born:</b> {birthday}</li> : <b>Born: /</b>}
                            {deathday !== null ? <li><b>Died:</b> {deathday}</li> : null}
                            {country === null ? '/' : <li><b>Country:</b> {`${country}, ${countryCode}`}</li>  }
                        </ul>
                    </Card.Text> 
                </Card.Body>
            </div>
        </Card>
    </Col>
    )
}

export { Person }