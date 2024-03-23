import { Component } from 'react'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchString: '',
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
    const filteredMonster = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchString)
    })

    return (
      <>
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={event => {
            const searchString = event.target.value.toLowerCase()
            this.setState({ searchString })
          }}
        />
        {filteredMonster.map(monster => {
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
