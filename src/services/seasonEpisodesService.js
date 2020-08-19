import { Episodes } from '../entities/Episodes'

class Episodess {
    static seasonEpisodes  (id) {
       return fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
       .then(response => response.json())
       .then(episodes => episodes.map(episode => new Episodes(episode)))
    }
}

export { Episodess }