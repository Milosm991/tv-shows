class Cast {
    constructor(char){
        this.charName = char.character.name;
        this.birthday = char.person.birthday;
        this.deathday = char.person.deathday;
        this.country = char.person.country ? char.person.country.name : '/';
        this.countryCode = char.person.country ? char.person.country.code : '/';
        this.image = char.person.image ? char.person.image.medium : null;
        this.name = char.person.name;
    }
}

export { Cast }