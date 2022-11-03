import React, { Suspense } from "react";
import { useVideoTexture, useTexture } from "@react-three/drei";
import {
  Selection,
  Select,
  EffectComposer,
  SelectiveBloom,
} from "@react-three/postprocessing";

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return (
    <Selection>
      <EffectComposer multisampling={0}>
        <SelectiveBloom
          mipmapBlur
          radius={0.4}
          luminanceThreshold={1}
          intensity={2}
        />
      </EffectComposer>
      <meshBasicMaterial map={texture} toneMapped={false} />
    </Selection>
  );
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function TexturePlane() {
  return (
    <mesh position={[0, 0, 1]} rotation={[0, 0, 0]} scale={0.94}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="synthBack.jpeg" />}>
        <VideoMaterial url="/google/vid7.mp4" />
      </Suspense>
    </mesh>
  );
}
