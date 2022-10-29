import Floor from "./threeModels/floor";
import VideoPlane from "./threeModels/texturePlane";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

export default function ProjectScene() {
  return (
    <Canvas className="project-scene">
      <ambientLight intensity={0.5} />
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[1, 2]}
      >
      </Float>
      <VideoPlane />
      <Floor />
    </Canvas>
  );
}
