const {v4: uuid} = require('uuid');

class Band{

    constructor(name = 'no.name'){


        this.id= uuidv4();  ///Identificadpr unico
        this.name = name;
        this.votes = 0;
    }


}

module.exports = Band;