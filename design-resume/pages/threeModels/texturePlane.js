import React, { Suspense } from "react";
import { useVideoTexture, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return (
    <meshBasicMaterial map={texture} toneMapped={false} color={[1.2, 1.2, 1.2]} />
  );
}

export default function TexturePlane() {
  return (
    <group>
      <EffectComposer>
        {/* Threshhold has to be 1, so nothing at all glows by default */}
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          levels={9}
          radius={0.5}
          intensity={1}
        />
      </EffectComposer>
      <mesh position={[0, 0, 1]} rotation={[0, 0, 0]} scale={0.94}>
        <planeGeometry />
        <Suspense fallback={null}>
          <VideoMaterial url="/google/vid7.mp4" />
        </Suspense>
      </mesh>
    </group>
  );
}
