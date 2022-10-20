import Head from "next/head";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Portal from "./threeModels/portal";
import Camera from "./camera";
import Navigation from "./navigation";

export default function Home(props) {
  return (
    <div className="overlayDiv">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bomin Rahmani</title>
      </Head>
      {/* <BackgroundVideo/> */}
      <Canvas className="mainCanvas">
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          maxDistance={1300}
        />
        <spotLight intensity={1.2} angle={Math.PI} decay={1} />
        <Camera position={[-500, -700, 900]} />
        <Suspense fallback={null}>
          <Portal />
        </Suspense>
      </Canvas>
      <Navigation />
    </div>
  );
}
