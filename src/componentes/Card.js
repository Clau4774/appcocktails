
export default function Card ({value}) {
 
  const {titulo, foto, id} = value;

  return (
    <div  className='card card-shadow'> 
      <h3>{titulo}</h3>
      <img src={foto} alt={`Foto de un ${titulo}`}/>
      <button value={id}>Más info</button>
    </div>
  )
}
