import Floor from "./threeModels/floor";
import VideoPlane from "./threeModels/texturePlane";
import React from "react";
import Gallery from "./Gallery";


export default function Google() {
  const images = [
    // Front<mesh position={[1.75, 0.85, 0.25]} rotation={[0, -Math.PI / 2.5, 0]} scale={0.16}>
    { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "google/1.webp" },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "google/2.webp" },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "google/3.webp" },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: "google/4.webp",
    },
    {
      position: [-2.15, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      url: "google/5.webp",
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      url: "google/6.webp",
    },
    // Right
    //position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
    // position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
    //position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
  ];
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
