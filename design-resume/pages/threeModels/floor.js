import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, maxPolarAngle, minPolarAngle } from "@react-three/drei";
const FloorDesign = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -2, 0]}>
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default function Floor() {
  return (
    <Canvas className="floorCanv">
    <fog attach="fog" args={["black", 1, 7]}></fog>
      <directionalLight intensity={0.5} />
      <FloorDesign />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
    </Canvas>
  );
}
