import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

const Scene = () => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.01;
    scene.current.rotation.x += 0.01;
    scene.current.rotation.z += 0.01;
  });
  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial attach="material" color="white" />
      </Box>  
    </group>
  );
};

export default function Cube() {
  return (
    <Canvas className="cubeCanv">
      <directionalLight intensity={0.5} />
      <Scene />
    </Canvas>
  );
}
