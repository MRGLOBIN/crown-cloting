import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.components'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
