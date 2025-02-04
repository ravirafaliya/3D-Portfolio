import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'
import { OrbitControls, Stage } from '@react-three/drei'

const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="Loading...">
            <Stage environment={'night'} intensity={0.5}>
            <ComputerModel />
            </Stage>
           
            <OrbitControls enableZoom={false}autoRotate/>
            <perspectiveCamera makeDefault position={[-1,0,1,8]} zoom={0.8}/>
        </Suspense>
    </Canvas>
  )
}

export default ComputerModelContainer