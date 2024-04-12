import { Monster } from '../../App'
import Card from '../card/card.components'

import './cardList.styles.css'

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <Card monster={monster} key={monster.id} />
    })}
  </div>
)

export default CardList
