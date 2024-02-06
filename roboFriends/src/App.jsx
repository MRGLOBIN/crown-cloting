import React from 'react'
import Card from './components/card'
import { robots } from './constants/robots'

import './App.css'

function App() {
  return (
    <div>
      <Card name={robots[0].name} />
      <Card />
      <Card />
    </div>
  )
}

export default App
