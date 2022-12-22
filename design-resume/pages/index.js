import Head from "next/head";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Portal from "../components/threeModels/portal";
import Navigation from "../components/navigation";

export default function Home(props) {
  const [dist, setDist] = useState(-130);
  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setDist(-80);
    }
  })
  return (
    <div className="overlayDiv">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bomin Rahmani</title>
      </Head>
      <Canvas className="mainCanvas">
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          maxDistance={750}
        />
        {/* <PerspectiveCamera makeDefault position={[-500, -700, 900]} /> */}
        <PerspectiveCamera makeDefault position={[dist, -200, 600]} />
        <spotLight angle={Math.PI} decay={2} intensity={2} />
        <Suspense fallback={null}>
          <Portal className="portalCanv" />
        </Suspense>
      </Canvas>
      <Navigation />
    </div>
  );
}
