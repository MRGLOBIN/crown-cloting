import Logo from './componets/Logo/logo'
import Rank from './componets/rank/rank'
import Navigation from './componets/navigation/navigation'
import ImageLinkForm from './componets/imageLineForm/imageLinkForm'

import ParticlesBg from 'particles-bg'

import './App.css'

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#F8F8FF" num={180} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  )
}

export default App
