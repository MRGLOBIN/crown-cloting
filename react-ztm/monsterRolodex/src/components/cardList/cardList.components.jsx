import Card from '../card/card.components'

import './cardList.styles.css'

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => {
      return <Card monster={monster} />
    })}
  </div>
)

export default CardList
