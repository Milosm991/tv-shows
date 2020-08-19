class AllShows {
    constructor(show){
        this.name = show.name;
        this.image = show.image ? show.image.original : null;
        this.imageMed = show.image.medium;
        this.rating = show.rating.average;
        this.id = show.id;
        this.summary = show.summary;
        this.genres = show.genres.map(genre => genre);
    }
}

export { AllShows }