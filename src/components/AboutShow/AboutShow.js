import React from 'react'

import { Seasons } from './Seasons/Seasons'
import { Search } from '../Search/Search'
import { Cast } from './Cast/Cast'
import { Akas } from './Akas/Akas'
import { ListOfShows } from '../ListOfShows/ListOfShows'

import { Shows } from '../../services/showService'
import { SeasonsFetch } from '../../services/seasonsService'
import { AkasService } from '../../services/akaShowServices'
import { Container, Row, Col } from 'react-bootstrap'
import { star } from 'react-icons-kit/fa/star'
import { Icon } from 'react-icons-kit'

import style from './AboutShow.module.scss'

class AboutShow extends React.Component {
    constructor() {
        super ()

        this.state = {
            show: [],
            seasons: [],
            cast: [],
            akas: [],
            searchedShows: []
        }
    }

    componentDidMount() {
        Shows.singleShow(this.props.match.params.id)
        .then(show => this.setState({ show }))

        SeasonsFetch.AllSeasons(this.props.match.params.id)
        .then(seasons => this.setState({ seasons }))

        Shows.showCast(this.props.match.params.id)
        .then(cast => this.setState({ cast }))

        AkasService.fetchAkas(this.props.match.params.id)
        .then(akas => this.setState({ akas }))
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.componentDidMount()
            this.setState({ searchedShows: [] })
        }
        
    }


    setActiveClass = () => {
        let list = document.querySelector('.listOfDates');
        list.classList.toggle('show')
    }

    setClassCast = () => {
        let cast = document.querySelector('.listOfCast')
        cast.classList.toggle('active')
    }

    setAkasClass = () => {
        let akas = document.querySelector('.listOfAkas')
        akas.classList.toggle('active')
    }

    searchForShows = (value) => {
        Shows.searchedShows(value)
        .then(searchedShows => this.setState({ searchedShows }))
    }

    render() {
        return (
            <Container>
                <Search onSearch={this.searchForShows}/>
                {this.state.searchedShows.length ? <ListOfShows shows={this.state.searchedShows}/> : null}
                <div>
                    <Row>
                        <Col lg={12} md={12} xs={12} className={style.title}>
                            <h2>{this.state.show.name} (<Icon icon={star} style={{ color: 'gold' }} /> <b>{this.state.show.rating}</b>)</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} xs={12} className={style.pic}>
                            <img src={this.state.show.image} alt=''></img>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <Seasons seasons={this.state.seasons}
                                    setClass={this.setActiveClass}/>
                            <Cast cast={this.state.cast}
                                setClass={this.setClassCast}
                                id={this.props.match.params.id}/>
                            <Akas akas={this.state.akas}
                                id={this.props.match.params.id}
                                setClass={this.setAkasClass}/>
                        </Col>
                    </Row>
                    <Row className={style.summary}>
                        <Col lg={12} md={12} xs={12}>
                            <p>{this.state.show.summary}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
export { AboutShow }