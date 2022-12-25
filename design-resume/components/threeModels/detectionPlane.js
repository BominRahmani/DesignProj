import React, { Suspense } from "react";
import { useVideoTexture } from "@react-three/drei";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  texture.source.data.playsInline = true;
  texture.source.data.muted = true;
  texture.source.data.autoplay = true;
  console.log(texture.source);
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
