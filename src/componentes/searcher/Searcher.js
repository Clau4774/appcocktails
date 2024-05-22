import {useState} from 'react'
import { search } from './search';

const Searcher = () => {

  const [busqueda, setBusqueda] = useState('');

  const inputData = (e) => {
    setBusqueda(e.target.value)
  }

  return (

    <div className="searcher-container" >

      <input value={busqueda} onChange={(e) =>inputData(e)} type="text" placeholder="Busca el cocktail que quieras..."/>

      <button onClick={() => search(busqueda)}>Buscar</button>

    </div>
  )
}

export default Searcher
