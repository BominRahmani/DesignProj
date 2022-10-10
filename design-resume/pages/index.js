import Head from "next/head";
import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, maxPolarAngle, minPolarAngle } from "@react-three/drei";
import Cube from "./threeModels/cube";
import Floor from "./threeModels/floor";
import Portal from "./threeModels/portal";
import TexturePlane from "./threeModels/texturePlane";

export default function Home() {
  return (
    <div className="overlayDiv">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bomin Rahmani</title>
      </Head>
      {/* <BackgroundVideo/> */}
      <Canvas className="mainCanvas">
      <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
        <Floor className="floorCanv" />
        <Suspense fallback={null}>
          <Portal />
        </Suspense>
        <TexturePlane />
      </Canvas>
    </div>
  );
}
