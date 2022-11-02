import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import getUuid from "uuid-by-string";
import TexturePlane from "./threeModels/texturePlane";

const GOLDENRATIO = 1.61803398875;

export default function Gallery({ images }) {
  return (
    <Canvas
      className="gallery-canvas"
      gl={{ alpha: false }}
      dpr={[1, 1.5]}
      camera={{ fov: 70, position: [0, 2, 15] }}
    >
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <Environment preset="city" />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
    </Canvas>
  );
}
function handleClick() {
  console.log("hello");
}

function Frames({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  //console.log(images)
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state) => {
    state.camera.position.lerp(p, 0.025);
    state.camera.quaternion.slerp(q, 0.025);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        )
      )}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map(({ Scene, ...props }) => (
        <Frame key={props.url} {...props}>
          <TexturePlane />
        </Frame>
      ))}
    </group>
  );
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const image = useRef();
  const frame = useRef();
  const name = getUuid(url);
  if (url.includes(".mp4")) {
    console.log("hahahaha", image);
  }
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  useCursor(hovered);
  if (!url.includes("pexel")) {
    useFrame((state) => {
      image.current.scale.x = THREE.MathUtils.lerp(
        image.current.scale.x,
        0.85 * (hovered ? 0.85 : 1),
        0.1
      );
      image.current.scale.y = THREE.MathUtils.lerp(
        image.current.scale.y,
        0.9 * (hovered ? 0.905 : 1),
        0.1
      );
      frame.current.material.color.lerp(
        c.set(hovered ? "orange" : "white"),
        0.1
      );
    });
  }
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={1}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        {url.includes("pexel") ? (
          <TexturePlane />
        ) : (
          <Image
            raycast={() => null}
            ref={image}
            position={[0, 0, 0.7]}
            scale={[2, 5, 1]}
            url={url}
          />
        )}
      </mesh>
    </group>
  );
}
