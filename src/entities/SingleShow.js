class SingleShow {
    constructor (show){
        this.name = show.name;
        this.image = show.image ? show.image.original : null;
        this.summary = show.summary;
        this.id = show.id;
        this.rating = show.rating.average;
    }
}

export { SingleShow }