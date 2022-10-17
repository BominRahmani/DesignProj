import Head from "next/head";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, maxPolarAngle, minPolarAngle } from "@react-three/drei";
import Portal from "./threeModels/portal";
import TexturePlane from "./threeModels/texturePlane";
import Camera from "./camera";
import { Bloom } from "@react-three/postprocessing";
export default function Home(props) {
  return (
    <div className="overlayDiv">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bomin Rahmani</title>
      </Head>
      {/* <BackgroundVideo/> */}
      <Canvas className="mainCanvas">
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={1300} />
        <spotLight intensity={1.2} angle={Math.PI} distance={0} delay={0.1} /> 
        <Camera position={[-500, -700, 900]} />
        <Suspense fallback={"synthBack.jpeg"}>
          <Portal />
        </Suspense>
      </Canvas>
    </div>
  );
}
