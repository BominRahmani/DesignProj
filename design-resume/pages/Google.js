import Floor from "./threeModels/floor";
import VideoPlane from "./threeModels/texturePlane";
import React, { lazy } from "react";
import Gallery from "./Gallery";
import Trial from "./trial"


export default function Google() {
  const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
  const images = [
    // Front<mesh position={[1.75, 0.85, 0.25]} rotation={[0, -Math.PI / 2.5, 0]} scale={0.16}>
    { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "google/1.webp" },
    { position: [0, 0, 1.46], rotation: [0, 0, 0], url: pexel(1103970)},
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
    }
  ];
  const imes = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970), Scene: lazy(() => import('./threeModels/texturePlane')) }
  ]

  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
