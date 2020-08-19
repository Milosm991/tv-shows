import React from 'react' 

import { Col, Card } from 'react-bootstrap'

import './Aka.scss'

const Aka = ({ name, country, code }) => {
    return (
        <Col xs={12}>
            <Card style={{ width: '100%' }} className='aka'>
                <Card.Body>
                    <Card.Title>{name} - {country}, {code}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}
export { Aka }