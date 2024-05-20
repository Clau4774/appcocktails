import {useState} from 'react'
import { searchType } from './searchType';
import { search } from './search';

const Searcher = () => {

  const [busqueda, setBusqueda] = useState('');
  const [tipoBusqueda, setTipoBusqueda] = useState('');

  const inputData = (e) => {
    setBusqueda(e.target.value)
  }

  return (

    <div className="searcher-container" >

      <select onChange={(e) => setTipoBusqueda(e.target.value)}>
        <option value={searchType.titulo}>Nombre</option>
        <option value={searchType.ingrediente}>Ingrediente</option>
        <option value={searchType.alcohol}>Alcohol</option>
      </select>

      <input value={busqueda} onChange={(e) =>inputData(e)} type="text" placeholder="Busca el cocktail que quieras..."/>

      <button onClick={() => search(busqueda, tipoBusqueda)}>Buscar</button>

    </div>
  )
}

export default Searcher
