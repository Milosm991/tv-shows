class Aka {
    constructor(aka) {
        this.name = aka.name;
        this.country = aka.country ? aka.country.name : '/';
        this.countryCode = aka.country ? aka.country.code : '/';

    }
}

export { Aka }