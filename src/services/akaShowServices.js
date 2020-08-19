import { Aka } from '../entities/akas'

class AkasService {
    static fetchAkas (id) {
        return fetch(`https://api.tvmaze.com/shows/${id}/akas`)
        .then(response => response.json())
        .then(akas => akas.map(item => new Aka(item)))
    } 
}

export { AkasService }