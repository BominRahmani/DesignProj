import React, { Suspense } from "react";
import { useVideoTexture, useTexture } from "@react-three/drei";
import * as THREE from "three";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return (
    <meshBasicMaterial
      map={texture}
      toneMapped={false}
      side={THREE.DoubleSide}
    />
  );
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function TexturePlane() {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, 0]} scale={0.17}>
      <circleGeometry args={[8.7, 30]} />
      <Suspense fallback={<FallbackMaterial url="synthBack.jpeg" />}>
        <VideoMaterial url="nature.mp4" />
      </Suspense>
    </mesh>
  );
}
