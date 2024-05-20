import { searchType } from "./searchType";
import data from '../../data/cocktails.json'


export const search = (busqueda, tipoBusqueda) => {

    switch(tipoBusqueda) {

      case searchType.titulo : return console.log(tipoBusqueda);
      case searchType.ingrediente : return console.log(tipoBusqueda);
      case searchType.alcohol : return console.log(tipoBusqueda);
      default: console.log('wiii');
    }

    console.log(data.find(elem => (elem.titulo.toLowerCase()) === busqueda))
  }