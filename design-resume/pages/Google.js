import React from "react";
import Gallery from "../components/Gallery";

export default function Google() {
  const images = [
    {
      position: [2, 0, -0.55],
      rotation: [0, -Math.PI / 3.4, 0],
      url: "google/1.webp",
    },
    { position: [2.75, 0, 0.6], rotation: [0, -1, 0], url: "google/2.webp" },
    // Back
    { position: [-0.8, 0, 2], rotation: [0, 0, 0], url: "google/vid7.mp4" },
    { position: [0.5, 0, -0.7], rotation: [0, -0.2, 0], url: "google/3.webp" },
    // Left
    {
      position: [-1.75, 0, 0.3],
      rotation: [0, Math.PI / 5, 0],
      url: "google/4.webp",
    },
    {
      position: [-2.1, 0, 1.9],
      rotation: [0, Math.PI / 3, 0],
      url: "google/5.webp",
    },
    {
      position: [-2.15, 0, 3.2],
      rotation: [0, Math.PI / 2.5, 0],
      url: "google/6.webp",
    },
  ];
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
