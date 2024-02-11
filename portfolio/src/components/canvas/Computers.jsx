import React, { Suspense, useEffect, useRef, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={0.5} />
      <ambientLight intensity={0.6} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={50}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.25, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobie] = useState(false)

  useEffect(() => {
    // adding event listener for screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // setting to according to intital state of screen
    setIsMobie(mediaQuery.matches)

    // function to change screen mobile state
    const handleMediaQueryChange = event => {
      setIsMobie(event.matches)
    }

    // listening to change and set screen accordingly
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // removing the event listeniner to avoid memory leaks
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  })

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={''}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
