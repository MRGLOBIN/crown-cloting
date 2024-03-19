import { Component } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      filter: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  render() {
    return (
      <>
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={event => {
            this.setState({ filter: event.target.value })
          }}
        />
        {this.state.monsters.filter(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </>
    )
  }
}

export default App
