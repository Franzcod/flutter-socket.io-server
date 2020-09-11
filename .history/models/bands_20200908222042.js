const Band = require("./band");


class Bands{
    constructor () {
        this.bands = [];
    }

    addBnd(band = new Band()) {
        this.bands.push(band);
    }

    getBands(){
        return this.bands;
    }

    deleteBand(id =''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    voteBand(id=''){
        this.bands = this.bands.map( band => {
            if(this.bands.id == id) {
                band.votes++;
                return band;
            }
        } );
    }
}