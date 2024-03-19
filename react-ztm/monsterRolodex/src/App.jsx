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
          name: 'linda',
        },
        {
          name: 'jackey',
        },
        {
          name: 'Frank',
        },
        {
          name: 'Goblin',
        },
      ],
    }
  }

  render() {
    return (
      <>
        {this.state.monsters.map(monster => {
          return <h1>{monster.name}</h1>
        })}
      </>
    )
  }
}

export default App
