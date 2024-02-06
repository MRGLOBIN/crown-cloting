import React, { Component } from 'react'
import CardList from './components/cardList/cardList'

import 'tachyons'
import './App.css'

import { robots } from './constants/robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots,
      searchField: '',
    }
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    )
  }
}
export default App
