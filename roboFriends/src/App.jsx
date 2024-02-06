import React, { Component } from 'react'
import CardList from './components/card/cardList'
import SearchBox from './components/searchBox/searchBox'
import Scroll from './components/scroll/scroll'

import 'tachyons'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredSearch = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredSearch} />
        </Scroll>
      </div>
    )
  }
}
export default App
