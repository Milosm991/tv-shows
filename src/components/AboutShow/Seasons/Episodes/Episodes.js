import React from 'react' 

import { Episodess } from '../../../../services/seasonEpisodesService'

import { Container, Row } from 'react-bootstrap'
import { Episode } from './Episode/Episode'
import { Loader } from '../../../Loader/Loader'

import './Episodes.scss'

class Episodes extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            episodes: []
        }
    }
    
    componentDidMount() {
        Episodess.seasonEpisodes(this.props.match.params.id)
        .then(episodes => this.setState({episodes}))
    }
    
    render () {
        
        return (
            <Container className="d-flex justify-content-between flex-wrap episodesCont">
                {this.state.episodes.length ? <Row >
                    {this.state.episodes.map(episode => <Episode
                                                        key={episode.id}
                                                        name={episode.name}
                                                        image={episode.image}
                                                        number={episode.number}
                                                        summary={episode.summary} 
                                                        />)}
                </Row> : <Loader />}
            </Container>
        )
    }
}

export { Episodes }