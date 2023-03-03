import React from "react";
import * as THREE from "three";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { Cloud, Edges, Effects, Sparkles, OrbitControls, OrthographicCamera  } from "@react-three/drei";
import logo from "../images/gatsby-icon.png";

import { UnrealBloomPass } from "three-stdlib";
extend({ UnrealBloomPass })


const CanvasAnimation = () =>{
    const repeatX = 1;
    const repeatY = 1;
    const base = useLoader(THREE.TextureLoader, logo);
    base.wrapS = THREE.RepeatWrapping;
    base.wrapT = THREE.RepeatWrapping;
    base.repeat.set(repeatX, repeatY);
    return(
        <Canvas shadows gl={{antialias:false}}>
            <color attach="background" args={["#202030"]} />
            <mesh scale={1.5}>
                <boxGeometry/>
                <meshPhysicalMaterial map={base}/>
                <Edges 
                    scale={1.1}
                    threshold={2}
                    color="#000000"
                />
            </mesh>
            {/* <directionalLight intensity={1} position={[10, 10, 10]}/> */}
            <OrbitControls autoRotate enableZoom={false}/>
            <OrthographicCamera makeDefault far={500} near={0.1} position={[-10, 2, -10]} zoom={100}/>
            <hemisphereLight intensity={1} color="red" groundColor={"blue"}/>
            {/* <hemisphereLight intensity={1} color="green" groundColor={"purple"}/> */}
            {/* <hemisphereLight intensity={1} color="white" groundColor={"white"}/> */}
            <Sparkles count={200} scale={[20, 20, 20]} size={1} speed={0.01}/>
            <fog attach={"fog"} args={["#202030", 5, 25]}/>
            <Cloud
                opacity={0.1}
                speed={0.1}
                width={30}
                depth={0.1}
                segments={40}
            />
            <Effects disableGamma>
                <unrealBloomPass threshold={1} strength={2.0} radius={0.5} />
            </Effects>
        </Canvas>
    )
}

export default CanvasAnimation