import { AllShows } from '../entities/AllShows'
import { SearchedShows } from '../entities/searchedShows'
import { SingleShow } from '../entities/SingleShow'
import { Cast } from '../entities/Cast'

class Shows {
    static allShows = () => {
        return fetch('https://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(shows => shows.map(show => new AllShows(show)))
        
    }

    static searchedShows = (value) => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(shows => shows.map(item => new SearchedShows(item)))
    }

    static singleShow = (id) => {
        return fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(show => new SingleShow(show))
    }

    static showCast = (id) => {
        return fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        .then(response => response.json())
        .then(cast => cast.map(char => new Cast(char)))
    }
}

export { Shows }