import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef } from "react";
import BackgroundVideo from "./backgroundVid";
import Cube from "./threeModels/cube";
import Floor from "./threeModels/floor"

export default function Home() {
  return (
    <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Bomin Rahmani</title>
    </Head>
    {/* <BackgroundVideo/> */}
    <Floor/>
    <Cube/>
    </div>
  );
}
