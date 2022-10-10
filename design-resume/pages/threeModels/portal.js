import React, { useRef, useState } from "react";
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";

export default function Portal(props) {
    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = './nature.mp4';
        vid.crossOrigin = "Anonymous"
        vid.loop = true;
        vid.muted = true;
        return vid;
    });

  const group = useRef();
  const { nodes, materials } = useGLTF("portal.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.17}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        
      </group>
    </group>
  );
}

useGLTF.preload("portal.gltf");
