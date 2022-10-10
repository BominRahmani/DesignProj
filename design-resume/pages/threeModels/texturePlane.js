import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function TexturePlane() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "nature.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    return vid;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <circleGeometry args={[8.7, 60]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture atach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
}
