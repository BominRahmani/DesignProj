import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
export default function Camera(props) {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => void set({ camera: ref.current }), [set]);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
}
