import { Outlet } from 'react-router-dom'

import DirectoryMenu from '../../components/directoryMenu/directoryMenu.components'

const Home = () => {
  return (
    <>
      <DirectoryMenu />
      <Outlet />
    </>
  )
}

export default Home
