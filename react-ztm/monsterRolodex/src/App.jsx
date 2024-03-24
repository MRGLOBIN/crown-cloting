import { Component } from 'react'

import CardList from './components/cardList/cardList.components'
import './App.css'
import SearchBox from './components/searchBox/searchBox.components'

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

  onSearchChange = event => {
    const searchString = event.target.value.toLowerCase()
    this.setState({ searchString })
  }

  render() {
    const { monsters, searchString } = this.state
    const { onSearchChange } = this
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })

    return (
      <>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonster} />
      </>
    )
  }
}

export default App
