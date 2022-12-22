import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Galaxy(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
