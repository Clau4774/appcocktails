import {Routes, Route, useParams} from 'react-router-dom'
import Home from '../componentes/Home'
import CocktailPage from '../componentes/CocktailPage';

const RouterPrincipal = () => {

  const url = useParams();
  console.log(url)
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:algo" element={<CocktailPage/>}/>
    </Routes>
  )
}

export default RouterPrincipal
