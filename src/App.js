import './App.css';
import RouterPrincipal from './rout/RouterPrincipal'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <RouterPrincipal/>
    </BrowserRouter>
  );
}

export default App;
