//import data from '../../data/cocktails.json'



const CurrentSearch = ({value}) => {

  const {resultadosBusqueda, busqueda} = value;

  console.log(busqueda)
 
  return (
    <div className="current-searcher-container">
      <ul className="current-searcher-list">
        {
         ( resultadosBusqueda.length === 0 && busqueda !== "" && busqueda !== ' ')
          ? <li>
          <span>No encontramos el cocktail: "{busqueda}"</span>
        </li>
          :resultadosBusqueda.map(elem => 
            <li key={elem.id}>
              <img src={elem.foto} alt={elem.titulo}/>
              <span>{elem.titulo}</span>
            </li>
          )
        
        }
      </ul>
    </div>
  )
}

export default CurrentSearch
