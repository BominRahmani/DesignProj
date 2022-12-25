import React, { Suspense } from "react";
import { useVideoTexture } from "@react-three/drei";
function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  texture.source.data.playsInline = true;
  texture.source.data.muted = true;
  texture.source.data.autoplay = true;
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function TexturePlane() {
  return (
    <group>
      <mesh position={[0, 0, 1]} rotation={[0, 0, 0]} scale={0.94}>
        <planeGeometry />
        <Suspense fallback={null}>
          <VideoMaterial url="/google/vid7.mp4" />
        </Suspense>
      </mesh>
    </group>
  );
}
