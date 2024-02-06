import React, { Component } from 'react'
import CardList from './components/card/cardList'
import SearchBox from './components/searchBox/searchBox'

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
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredSearch} />
      </div>
    )
  }
}
export default App
