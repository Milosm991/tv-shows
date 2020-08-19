class Episodes {
    constructor(episode){
        this.name = episode.name;
        this.number = episode.number;
        this.id = episode.id;
        this.image = episode.image ? episode.image.medium : null;
        this.summary = episode.summary;
        this.season = episode.season;
    }

}

export { Episodes }