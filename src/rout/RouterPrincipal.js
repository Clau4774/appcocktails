import {Routes, Route} from 'react-router-dom'
import Home from '../componentes/Home'
import CocktailPage from '../componentes/CocktailPage';

const RouterPrincipal = () => {

  
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:algo" element={<CocktailPage/>}/>
    </Routes>
  )
}

export default RouterPrincipal
