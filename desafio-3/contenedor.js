let fs = require('fs');
let path = require('path');

class Contenedor{
constructor(archivo){
    this.archivo = archivo;
}
async getAll(){
    try {
        let objeto = await fs.promises.readFile(`${this.archivo}`, "utf-8");
        return JSON.parse(objeto);
    } catch (error) {
        console.log("no se puedo leer el archivo");
    }
}
}

module.exports = Contenedor;