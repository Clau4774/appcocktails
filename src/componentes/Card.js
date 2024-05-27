import { useNavigate } from "react-router-dom";

export default function Card ({value}) {
 
  const {titulo, foto, id} = value;

  const navigate = useNavigate();

  const navigateTo = (e) => {
    const value = e.target.value;
    navigate(`/cocktail/${value}`)
  }

  return (
    <article  className='card card-shadow'> 
      <h3>{titulo}</h3>
      <img src={foto} alt={`Foto de un ${titulo}`}/>
      <button onClick={navigateTo} value={id}>Más info</button>
    </article>
  )
}
