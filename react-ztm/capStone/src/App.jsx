import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.components'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Shop from './routes/shop/shop.components'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
