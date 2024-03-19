import { Component } from 'react'

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
            const filteredSearch = event.target.value.toLowerCase()
            const filteredMonster = this.state.monsters.filter(monster => {
              return monster.name.toLowerCase().includes(filteredSearch)
            })
            this.setState({ monsters: filteredMonster })
          }}
        />
        {this.state.monsters.map(monster => {
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
