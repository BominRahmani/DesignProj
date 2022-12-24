import React, { Suspense } from "react";
import { useVideoTexture } from "@react-three/drei";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function DetectionPlane() {
  return (
    <group>
      <mesh position={[0, 0, 1]} rotation={[0, 0, 0]}>
        <planeGeometry />
        <Suspense fallback={null}>
          <VideoMaterial url="/objectDetection/detectionExample.mp4" />
        </Suspense>
      </mesh>
    </group>
  );
}
