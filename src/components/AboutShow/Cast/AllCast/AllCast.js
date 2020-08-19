import React from 'react'

import { Shows } from '../../../../services/showService'
import { Person } from './Person'
import { Loader } from '../../../Loader/Loader'

import { Container, Row } from 'react-bootstrap'

import './AllCast.scss'

class AllCast extends React.Component {
    constructor() {
        super()
        
        this.state = {
            cast: []
        }
    }

    componentDidMount(){
        
        Shows.showCast(this.props.match.params.id)
        .then(cast => this.setState({ cast }))
    }
    render () {
        return (
            <Container className="d-flex justify-content-between flex-wrap castCont">
                {this.state.cast.length ? <Row>
                    {this.state.cast.map((char, i) => <Person 
                                                         charName={char.charName}
                                                         name={char.name}
                                                         birthday={char.birthday}
                                                         country={char.country}
                                                         countryCode = {char.countryCode}
                                                         image={char.image}
                                                         deathday={char.deathday}
                                                         key={i}/>)}
                </Row> : <Loader />}
            </Container>
        )
    }
}
export { AllCast }