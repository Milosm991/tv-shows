import React from 'react'

import { Card, Col } from 'react-bootstrap'

import './Episode.scss'

const Episode = ({ name, image, summary, number }) => {
    
    return (
        <Col xl={4} lg={4} md={6} xs={12} className='episodesCol' >
            <Card style={{ width: '100%' }} className='episode'>
                <div className='front'>
                    {image !== null ? <Card.Img variant="top" src={image} /> : <p>no image</p>}
                        <Card.Body>
                            <Card.Title><h5>{`${number === null ? 'Extras:' : number} ${name}`}</h5></Card.Title>
                        </Card.Body>
                </div>
                <div className='back'>
                    <Card.Body>
                        <Card.Text>
                            {summary}
                        </Card.Text> 
                    </Card.Body>
                </div>
            </Card>
        </Col>
    )
}
export { Episode }



                