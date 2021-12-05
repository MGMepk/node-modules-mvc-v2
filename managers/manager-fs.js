import fs from 'fs';
//Ruta del JSON que volem llegir
const path = './data/movies.json'
//Array buida de movies
let movies = []

try{
    //Llegim les dades del JSON
    let data = fs.readFileSync(path, "utf-8")
    //Les parsejem a objectes i els fiquem dins l'array
    movies = JSON.parse(data);
} catch(error){
    console.log(error);
}

//Exportem l'array de movies.
export default movies
