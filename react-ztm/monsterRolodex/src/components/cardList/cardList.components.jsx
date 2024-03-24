import { Component } from 'react'

class CardList extends Component {
  render() {
    const { monsters } = this.props

    return (
      <div>
        {monsters.map(monster => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default CardList
