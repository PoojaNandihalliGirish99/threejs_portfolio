/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState} from 'react'
import CanvasLoader from '../Loader';


const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={2.9} groundColor="black"/>
      <pointLight intensity={1.5}/>
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={ isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2]:[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    //listener to changes in screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //set isMobile
    setIsMobile(mediaQuery.matches);

    //callback to handle changes in mediaQuery
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    //add the above defined callback as a eventlistener for mediaQuery
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  },[])
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera = {{position: [20, 3, 5], fov: 25}}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputerCanvas;