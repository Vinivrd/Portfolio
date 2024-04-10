import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, Environment, Lightformer, ContactShadows, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Aero = ({isMobile}) => {
  const aero = useGLTF('./aeronave/scene.gltf');
  return (
    <mesh>
      {<hemisphereLight intensity={0.15} groundColor='black' />}
      {<pointLight intensity ={1}/>}
      <spotLight
        position={[-20,50,10]}
        angle = {0.12}
        penumbra = {1}
        intensity = {1}
        constShadow
        shadow-mapSize= {1024}
      />
     
      <primitive
        object={aero.scene} 
        scale = {isMobile ? 2:1.9}
        position = {isMobile?[2,2]:[0,-1.25,0]}
        rotation = {[0.2,3.40,0.2]}
      />
    </mesh>
  )
}


const AeroCanvas = () => {
  const [isMobile,setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])


  return(
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]}
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      >
        <hemisphereLight intensity={0.001} />
        <Environment resolution={512}>
       
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        
          <Lightformer intensity={1} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
          <Lightformer intensity={1} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
       
          <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
        

        <Suspense fallback ={<CanvasLoader/>}>
          
          <OrbitControls
           enableZoom = {false}
           maxPolarAngle = {Math.PI/2}
           minPolarAngle = {Math.PI/2}
          />
           
          <Aero isMobile = {isMobile}/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default AeroCanvas;