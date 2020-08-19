import React from 'react'
import { Container, Row } from 'react-bootstrap'

import { Shows } from '../../services/showService'
import { ShowCard } from '../ShowCard/ShowCard.js'
import { Search } from '../Search/Search'
import { ListOfShows } from '../ListOfShows/ListOfShows'
import { Loader } from '../Loader/Loader'

import style from './Home.module.scss'

class Home extends React.Component {
    constructor() {
        super() 

        this.state = {
            shows: [],
            searchedShows: []
        }
    }

    componentDidMount() {
        Shows.allShows()
        .then(shows => shows.sort((a,b) => a.rating > b.rating ? -1 : 1 ))
        .then(shows => this.setState({ shows: shows.slice(0, 50) }))
    }

    searchForShows = (value) => {
        Shows.searchedShows(value)
        .then(searchedShows => this.setState({ searchedShows }))
    }

    render () {
        return (
            <Container className="d-flex justify-content-between flex-wrap">
                <Search onSearch={this.searchForShows}/>
                {this.state.searchedShows.length ? <ListOfShows shows={this.state.searchedShows}/> : null}
                {this.state.shows.length ? <Row className={style.shows}>
               {this.state.shows.map(show => <ShowCard 
                                              key={show.id}
                                              id={show.id}
                                              name={show.name}
                                              image={show.image}
                                              rating={show.rating}
                                              genres={show.genres}/>)} 
                </Row> : <Loader /> }
            </Container>
        )
    }
}
export { Home }