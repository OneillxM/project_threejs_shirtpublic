import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {

  const shadows = useRef();

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal //smoothing the edges of the shadows over time
    frames={60}   //frames rendered at 60 fps
    alphaTest={0.85}  //transparency of the shadows
    scale={10}
    rotation={[Math.PI /2, 0,0]}
    position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={2.25}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.85}
        ambient={0.55}
        position={[-5, 5, -9]}
      />

     
    </AccumulativeShadows>
  )
}

export default Backdrop