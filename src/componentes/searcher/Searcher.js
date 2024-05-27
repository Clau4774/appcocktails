import {useState} from 'react'
import CurrentSearch from './CurrentSearch';
import data from '../../data/cocktails.json'


const Searcher = () => {

  const [busqueda, setBusqueda] = useState('');
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const inputData = (inputValue) => {
    setBusqueda(inputValue);
  }

  const searchResult = () => {
    setResultadosBusqueda(
      busqueda && busqueda !== ' '
      ?data.filter(elem => elem.titulo.toLowerCase().includes(busqueda.toLowerCase()))
      : []
    )
  }
  
  return (

    <div className="searcher-container" >

      <input value={busqueda} onChange={(e) =>{
        inputData(e.target.value)
        searchResult();
        }} type="text" placeholder="Busca el cocktail que quieras..."/>

      <button onClick={() => console.log('click')}>Buscar</button>
      <CurrentSearch  value={{resultadosBusqueda: resultadosBusqueda, busqueda: busqueda}}/>
    </div>
  )
}

export default Searcher
