class SearchedShows {
    constructor (item) {
        this.name = item.show.name;
        this.image = item.show.image ? item.show.image.medium : null;
        this.id = item.show.id;
    }
}

export { SearchedShows }