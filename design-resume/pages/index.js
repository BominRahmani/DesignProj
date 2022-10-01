import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef } from "react";

export default function Home() {
  return (
    <div>
      <video autoPlay loop muted className="video-container">
        <source src="/animeretro.mp4" type="video/mp4" />
      </video>
      <div className="main-page-content">
        <h1>Bomin Rahmani</h1>
        <p>Software Developer</p>
      </div>
    </div>
  );
}
