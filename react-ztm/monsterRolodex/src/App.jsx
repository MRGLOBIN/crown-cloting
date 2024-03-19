import { Component } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          id: 1,
          name: 'linda',
        },
        {
          id: 2,
          name: 'jackey',
        },
        {
          id: 3,
          name: 'Frank',
        },
        {
          id: 4,
          name: 'Goblin',
        },
      ],
    }
  }

  render() {
    return (
      <>
        {this.state.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </>
    )
  }
}

export default App
