import React, { Suspense } from "react";
import { useVideoTexture } from "@react-three/drei";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  texture.source.data.playsInline = true;
  texture.source.data.muted = true;
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function KryptPlane() {
  return (
    <group>
      <mesh position={[0, 0.04, 1]} rotation={[0, 0, 0]}>
        <planeGeometry />
        <Suspense fallback={null}>
          <VideoMaterial url="/socialMedia/soc.mp4" />
        </Suspense>
      </mesh>
    </group>
  );
}
