import React from "react";

export default function BackgroundVideo() {
  return (
    <div>
      <video autoPlay loop muted className="video-container">
        <source src="/nature.mp4" type="video/mp4" />
      </video>
      <div className="main-page-content">
        <h1>Bomin Rahmani</h1>
        <p>Software Developer</p>
      </div>
    </div>
  );
}
