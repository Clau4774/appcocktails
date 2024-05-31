import { useNavigate } from "react-router-dom";



const CurrentSearch = ({value}) => {

  const {resultadosBusqueda, setResultadosBusqueda, busqueda, setBusqueda} = value;

  const navigate = useNavigate();

  const navigateTo = (e) => {
    const element = e.target;
    element.value  === undefined
    ? navigate(`../cocktail/${element.parentNode.value}`)
    : navigate(`../cocktail/${element.value}`)
    
    setBusqueda('');
    setResultadosBusqueda([])
  }
 
  return (
    <div className="current-searcher-container">
      <ul className="current-searcher-list">
        {
         ( resultadosBusqueda.length === 0 && busqueda !== "" && busqueda !== ' ')
          ? <li>
          <span>No encontramos el cocktail: "{busqueda}"</span>
        </li>
          :resultadosBusqueda.map(elem => 
            <li className="rounded" onClick={navigateTo} value={elem.id} key={elem.id}>
              <img src={elem.foto} alt={'Foto de un '+elem.titulo}/>
              <span>{elem.titulo}</span>
            </li>
          )
        
        }
      </ul>
    </div>
  )
}

export default CurrentSearch
