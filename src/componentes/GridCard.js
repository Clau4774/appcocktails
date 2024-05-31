import Card from "./Card"
import data from '../data/cocktails.json'



const GridCard = () => {
    
  return (
    <section className="grid-card box-shadow rounded">
      {data.map(elem => {
        return (
            <Card key={elem.id} value={elem}/>
        )
      })}
    </section>
  )

}

export default GridCard;