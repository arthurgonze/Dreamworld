import React from 'react';

import { Canvas } from '@react-three/fiber';

import ThreeStars from './three-stars';
import ThreeSunset from './three-sunset';

const HomePageCanvas = ({ className }) => {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false }}
      camera={{ position: [0, 100, 200], fov: 90, near: 0.1, far: 10000}}>
      <color attach="background" args={['#12071f']} />
      {/* <ThreeStars />  */}
      <ThreeSunset division={50} limit={10000}/>
    </Canvas>
  );
};

export default HomePageCanvas;