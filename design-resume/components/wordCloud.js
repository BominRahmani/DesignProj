import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
    >
      {children}
    </Text>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  let re = 0;
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const tech = [
      "C++",
      "C",
      "React.js",
      "Vue.js",
      "Python",
      "Javascript",
      "Java",
      "SQL",
      "Three.js",
      "Haskell",
      "Lisp",
      "R",
      "AWS",
      "Docker",
      "Heroku",
      "Firebase",
      "Pandas",
      "TensorFlow",
      "Pytorch",
      "Git",
      "Kotlin",
      "Latex",
      "NPM",
      "Bash",
      "P5.js",
    ];

    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          tech[re++],
        ]);
    return temp;
  }, [count, radius, re]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ));
}

export default function WordCloud() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 45], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Cloud count={5} radius={20} />
      <TrackballControls />
    </Canvas>
  );
}
