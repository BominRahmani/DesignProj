import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bounds, useBounds } from "./api/Bounds";
import {
  MeshReflectorMaterial,
  Image,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import TexturePlane from "./threeModels/texturePlane";
import DetectionPlane from "./threeModels/detectionPlane";
import KryptPlane from "./threeModels/kryptPlane";

const GOLDENRATIO = 1.61803398875;

export default function Gallery({ images }) {
  let childrenLength = images.length;
  function SelectToZoom({children, target}) {
    const api = useBounds();
    // scale={[2.4, 5, 1]}
    return (
      <group
        onClick={(e) => {
          e.stopPropagation();
          if(childrenLength == 1){
            e.button === 0 && api.to({ position: [0.3, 0, 5], target: [0, 0, 0] });
          }
          else{
            e.delta <= 2 && api.refresh(e.object).fit();
          }
        }}
        onPointerMissed={(e) => {
          e.button === 0 && api.to({ position: [0.3, 0, 5], target: [0, 0, 0] });
        }}
      >
      {children}
      </group>
    );
  }
  return (
    <Canvas
      className="gallery-canvas"
      gl={{ alpha: false }}
      dpr={[1, 1.5]}
      camera={{ fov: 70, position: [0.3, 0, 5] }}
    >
      <color attach="background" args={["#1f1f1f"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      <Environment preset="city" />
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={1300}
      />
      <group position={[0, -0.5, 0]}>
        <Bounds observe margin={1.3} damping={4}>
          <SelectToZoom childrenLength={images.length}>
            <Suspense fallback={"/obj_mock.png"}>
              <Frames images={images} />
            </Suspense>
          </SelectToZoom>
        </Bounds>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </group>
    </Canvas>
  );
}

function Frames({ images }) {
  return (
    <group>
      {images.map(
        (props) => <Frame key={props.url} {...props} /> /* prettier-ignore */
      )}
    </group>
  );
}

function Frame({ url, ...props }) {
  const image = useRef();
  const frame = useRef();
  if (!url.includes(".mp4")) {
    useFrame((state) => {
      image.current.material.zoom = 1
      image.current.scale.x = THREE.MathUtils.lerp(
        image.current.scale.x,
        0.91,
        0.1
      );
      image.current.scale.y = THREE.MathUtils.lerp(
        image.current.scale.y,
        0.93,
        0.1
      );
    });
  }
  return (
    <group {...props}>
      <mesh
        url={url}
        scale={[1, 1.79, 0.02]}
        position={[1, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
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
        {url.includes("detectionExample") ? <DetectionPlane /> : url.includes("soc") ? <KryptPlane /> : url.includes("vid7") ? (
          <TexturePlane />
        ) : (
          <Image
            raycast={() => null}
            ref={image}
            position={[0, 0, 0.7]}
            scale={[1, 1.79, 0.05]}
            url={url}
          />
        )}
      </mesh>
    </group>
  );
}
