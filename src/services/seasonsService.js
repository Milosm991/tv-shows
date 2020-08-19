import { Seasons } from '../entities/Seasons'

class SeasonsFetch {
    static AllSeasons (id) {
        return fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
        .then(response => response.json())
        .then(seasons => seasons.map(season => new Seasons(season)))
    }
}

export { SeasonsFetch }