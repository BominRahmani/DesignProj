import React from "react";

export default function FloorDesign() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -2, 0]}>
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
