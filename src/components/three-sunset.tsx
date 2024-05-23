import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { GridHelper, ShaderMaterial, Vector2 } from 'three';

// Extend will make GridHelper available as a JSX element called gridHelper for us to use.
extend({ GridHelper });

interface GridProps {
  division: number;
  limit: number;
}

const ThreeSunset: React.FC<GridProps> = ({ division, limit }) => {
  const gridRef = useRef<THREE.GridHelper>(null!);
  const moveable = useMemo(() => {
    const move = [];
    for (let i = 0; i <= division; i++) {
      move.push(1, 1, 0, 0); // move horizontal lines only
    }
    return new Uint8Array(move);
  }, [division]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (gridRef.current) {
      (gridRef.current.material as ShaderMaterial).uniforms.time.value = time;
    }
  });

  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }, [camera]);

  return (
    <gridHelper
      ref={gridRef}
      args={[limit * 2, division, 'cyan', 'cyan']}
      position={[0, 0, 0]}
      onUpdate={(self: THREE.GridHelper) => {
        self.geometry.setAttribute(
          'moveable',
          new THREE.BufferAttribute(moveable, 1)
        );
        self.material = new ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            limits: { value: new Vector2(-limit, limit) },
            speed: { value: 50 },
          },
          vertexShader: `
            uniform float time;
            uniform vec2 limits;
            uniform float speed;
            
            attribute float moveable;
            
            varying vec3 vColor;
          
            void main() {
              vColor = color;
              float limLen = limits.y - limits.x;
              vec3 pos = position;
              if (floor(moveable + 0.5) > 0.5) {
                float dist = speed * time;
                float currPos = mod((pos.z + dist) - limits.x, limLen) + limits.x;
                pos.z = currPos;
              }
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
          
            void main() {
              gl_FragColor = vec4(vColor, 1.);
            }
          `,
          vertexColors: true,
        });
      }}
    />
  );
};

export default ThreeSunset;
