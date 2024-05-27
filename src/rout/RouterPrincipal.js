import {Routes, Route} from 'react-router-dom'
import Home from '../componentes/Home'
import CocktailPage from '../componentes/CocktailPage';
import NotFound from '../componentes/NotFound';

const RouterPrincipal = () => {

    
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cocktail/:id" element={<CocktailPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RouterPrincipal
