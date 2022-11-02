import React, { Suspense } from "react";
import { useVideoTexture, useTexture } from "@react-three/drei";
import * as THREE from "three";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return (
    <meshBasicMaterial
      map={texture}
      toneMapped={false}
    />
  );
}
function handleClick(){
  console.log("haha");
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function TexturePlane() {
  return (
    <mesh position={[0, 0, 0.7]} rotation={[0, 0, 0]} scale={0.2}>
      <planeGeometry args={[10, 20]}/>
      <Suspense fallback={<FallbackMaterial url="synthBack.jpeg" />}>
        <VideoMaterial url="/google/vid7.mp4" />
      </Suspense>
    </mesh>
  );
}
