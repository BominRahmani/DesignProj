import Floor from "./threeModels/floor";
import VideoPlane from "./threeModels/texturePlane";
import React from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";

function ImagePlane() {
  const [t1, t2, t3, t4, t5, t6] = useLoader(THREE.TextureLoader, [
    "google/1.webp",
    "google/2.webp",
    "google/3.webp",
    "google/4.webp",
    "google/5.webp",
    "google/6.webp",
  ]);
  return (
    <group>
      <mesh rotation={[0, 5, 0]} position={[4, 0, 1]} scale={0.17}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshBasicMaterial attach="material" map={t5} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, 5, 0]} position={[6, 0, 4]} scale={0.17}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshBasicMaterial attach="material" map={t2} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, 5, 0]} position={[10, 0, 5]} scale={0.17}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshBasicMaterial attach="material" map={t3} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, 5, 0]} position={[10, 0, 6]} scale={0.17}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshBasicMaterial attach="material" map={t4} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, -5, 0]} position={[-4, 0, 3]} scale={0.17}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshBasicMaterial attach="material" map={t6} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, -5, 0]} position={[-4, 0, 6]} scale={0.17}>
        <planeBufferGeometry attach="geometry" args={[10, 20]} />
        <meshBasicMaterial attach="material" map={t1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}
export default function ProjectScene() {
  return (
    <Canvas className="project-scene">
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} target={[0,0,4]} />
        <ImagePlane />
        <VideoPlane />
        <Floor />
    </Canvas>
  );
}
