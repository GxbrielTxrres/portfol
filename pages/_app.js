import "../styles/globals.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MarchingCubes,
  Environment,
  Sky,
  Bounds,
  PerspectiveCamera,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Menu from "../components/Menu";
import MetaBall from "../components/MetaBall";
import Pointer from "../components/Pointer";
import { useState } from "react";
import BillBoard from "../components/BillBoard";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);

  function setIsOpen() {
    setOpen(!open);

    console.log(open);
  }

  return (
    <>
      <Component {...pageProps} />
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        {open && (
          <PerspectiveCamera
            fov={30}
            aspect={1.4703947368421053}
            up={[0, 1, 0]}
            makeDefault
            position={(0, 0, 1)}
          />
        )}
        <ambientLight intensity={0.4} />
        <directionalLight intensity={0.5} />
        <Menu setIsOpen={setIsOpen} />

        <BillBoard
          contact={contact}
          setContact={setContact}
          isOpen={open}
          setOpen={setIsOpen}
          pos={[-0.8, 0, 0.01]}
          rotation={[0, Math.PI * -1.75, 0.001]}
          text="Contact"
        />

        <BillBoard
          about={about}
          setContact={setAbout}
          isOpen={open}
          setOpen={setIsOpen}
          pos={[0.8, 0, 0.01]}
          rotation={[0, Math.PI * 1.75, 0.001]}
          text="About"
        />
        <directionalLight
          intensity={10}
          position={[-10, -10, -10]}
          color="purple"
        />
        <Physics timeStep={"vary"} gravity={[0, 4, 0]}>
          <MarchingCubes
            resolution={64}
            maxPolyCount={20000}
            enableUvs={false}
            enableColors
          >
            <meshStandardMaterial vertexColors roughness={0} />
            <MetaBall color="red" position={[1, 1, 0.5]} />
            <MetaBall color="blue" position={[-1, -1, -0.5]} />
            <MetaBall color="green" position={[2, 2, 0.5]} />
            <MetaBall color="orange" position={[-2, -4, -0.5]} />
            <MetaBall color="hotpink" position={[3, 3, 0.5]} />
            <MetaBall color="aquamarine" position={[-3, -3, -0.5]} />
            <Pointer />
          </MarchingCubes>
        </Physics>
        <Sky />
        <Environment files="adamsbridge.hdr" />
        {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
        <Bounds fit clip observe margin={open ? 1.75 : 1}>
          <mesh visible={false}>
            <boxGeometry />
          </mesh>
        </Bounds>
      </Canvas>
    </>
  );
}

export default MyApp;
