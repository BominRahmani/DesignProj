import React from "react";
import Gallery from "./Gallery";

export default function Detection() {
  const images = [
    { position: [-0.8, 0, 1], rotation: [0, 0, 0], url: "objectDetection/detectionExample.mp4" }
  ];
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
