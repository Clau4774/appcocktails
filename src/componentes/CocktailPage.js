import { useParams } from "react-router-dom"
import Searcher from "./searcher/Searcher"
import data from '../data/cocktails.json'
import ReturnHome from "./ReturnHome";


const CocktailPage = () => {

  const url = useParams();
  const {id} = url;
  const cocktail = data[id];
  let forKey = 0;
  let forKey2 = 0;
  let forKey3 = 0;
  return (
    <div className="cocktail-page-container">
      <header>
        <div className="navigation-search-div">
          <ReturnHome />
          <Searcher />
        </div>
        <h1 className="title">{cocktail.titulo}</h1>
      </header>
      <article className="cocktail-article-container box-shadow rounded">
        <section className="presentation">
          <img src={cocktail.foto} alt={`Foto de un ${cocktail.titulo}`}/>
          <div>
            <h3>Ingredientes:</h3>
            <ul>
              {cocktail.ingredientes.alcoholes &&
              cocktail.ingredientes.alcoholes.map(elem =>
              <li key={forKey++}>
                {elem.cantidad} {elem.medida} de {elem.nombre}
              </li>)}
              {cocktail.ingredientes.jugos && 
              cocktail.ingredientes.jugos.map(elem =>
              <li key={forKey++}>
                {elem.cantidad} {elem.medida} de {elem.nombre}
              </li>)}
              {cocktail.ingredientes.endulzantes && 
              cocktail.ingredientes.endulzantes.map(elem =>
              <li key={forKey++}>
                {elem.cantidad} {elem.medida} de {elem.nombre}
              </li>)}
              {cocktail.garnish && 
              cocktail.garnish.map(elem =>
              <li key={forKey++}>
                {elem}
              </li>)}
              <li>Cristalería: {cocktail.cristaleria}</li>
            </ul>
            </div> 
        </section>
        <section>
          <h3>Historia:</h3>
          <div>
            {cocktail.historia &&
            cocktail.historia.map(elem => 
              <p key={forKey2++}>
                {elem}
              </p>
            )}
          </div>
        </section>
        <section>
          <h3>Receta:</h3>
          <div>
            {cocktail.receta &&
            cocktail.receta.map(elem => 
              <p key={forKey3++}>{elem}</p>
            )}
          </div>
        </section>
      </article>
    </div>
  )
}

export default CocktailPage
