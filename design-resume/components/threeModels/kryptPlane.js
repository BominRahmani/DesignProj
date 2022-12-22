import React, { Suspense } from "react";
import { useVideoTexture, useTexture } from "@react-three/drei";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return (
    <meshBasicMaterial map={texture} toneMapped={false} color={[1.2, 1.2, 1.2]} />
  );
}

export default function KryptPlane() {
  return (
    <group>
      <mesh position={[0, 0, 1]} rotation={[0, 0, 0]} scale={[5,3]}>
        <planeGeometry />
        <Suspense fallback={null}>
          <VideoMaterial url="/socialMedia/soc.mp4" />
        </Suspense>
      </mesh>
    </group>
  );
}
