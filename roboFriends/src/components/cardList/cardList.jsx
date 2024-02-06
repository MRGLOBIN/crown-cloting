import React from 'react'
import Card from '../card/card'
import { robots } from '../../constants/robots'

const CardList = () => {
  return (
    <div>
      {robots.map(robot => {
        return (
          <Card
            name={robot.name}
            email={robot.email}
            id={robot.id}
            key={robot.id}
          />
        )
      })}
    </div>
  )
}

export default CardList
