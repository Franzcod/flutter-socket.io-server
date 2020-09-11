const Band = require("./band");


class Bands{

    constructor () {
        this.bands = [];
    }

    // Se pueden gregar movimientos de base de datos aca

    ///Agregar Banda
    addBnd(band = new Band()) {
        this.bands.push(band);
    }
    ///Obteneer bandas
    getBands(){
        return this.bands;
    }
    ///Elimina banda
    deleteBand(id =''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }
    ///Votar banda
    voteBand(id=''){
        this.bands = this.bands.map( band => {
            if(this.bands.id == id) {
                band.votes++;
                return band;
            }else{
                return band;
            }
        } );
    }
}

module.exports = Bands;