import React, { Component } from 'react'
import CardList from '../components/card/cardList'
import SearchBox from '../components/searchBox/searchBox'
import Scroll from '../components/scroll/scroll'
import ErrorBoundry from '../components/errorBoundry/errorBoundry'

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
    const { robots, searchField } = this.state
    const filteredSearch = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredSearch} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}
export default App
