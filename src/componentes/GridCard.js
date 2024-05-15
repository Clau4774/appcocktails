import Card from "./Card"
import data from '../data/cocktails.json'



const GridCard = () => {
    
  return (
    <div className="grid-card box-shadow">
      {data.map(elem => {
        return (
            <Card key={elem.id} value={elem}/>
        )
      })}
    </div>
  )

}

export default GridCard;