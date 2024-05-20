import GridCard from './GridCard';
import Searcher from './searcher/Searcher';

export default function Home() {


  return (
    <div className="home-container">
      <header>
        <h1 className="home-title">Recetario de Cocktails</h1>
        <Searcher/>
      </header>
      <GridCard />
    </div>
  )
}
