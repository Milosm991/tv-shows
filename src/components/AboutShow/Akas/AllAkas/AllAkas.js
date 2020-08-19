import React from 'react'

import { AkasService } from  '../../../../services/akaShowServices'
import { Container, Row } from 'react-bootstrap'
import { Aka } from './Aka'
import { Loader } from '../../../Loader/Loader'

import './AllAkas.scss'

class AllAkas extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            akas: []
        }
    }

    componentDidMount() {
        AkasService.fetchAkas(this.props.match.params.id)
        .then(akas => this.setState({ akas }))
    }
    render () {
        return(
            <Container className='cont'>
                <h2>Aka's</h2>
                {this.state.akas.length ? <Row>
                    {this.state.akas.map((aka, i) => <Aka key={i} 
                                                          name={aka.name}
                                                          country={aka.country}
                                                          code={aka.countryCode} />)}
                </Row> : <Loader />}
            </Container>
        )
    }
}
export { AllAkas }