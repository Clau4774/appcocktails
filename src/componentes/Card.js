
export default function Card ({value}) {
 
  const {titulo, foto} = value;

  return (
    <div  className='card card-shadow'> 
      <h3>{titulo}</h3>
      <img src={foto} alt={`Foto de un ${titulo}`}/>
      <button>Más info</button>
    </div>
  )
}
