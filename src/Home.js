import GridCard from './componentes/GridCard';
import Searcher from './componentes/Searcher';

export default function Home() {


  return (
    <div className="home-container">
      <header>
        <h1>Recetario de Cocktails</h1>
        <Searcher/>
      </header>
      <GridCard />
    </div>
  )
}
