import "../styles/globals.css";
import { Canvas } from "@react-three/fiber";
import { MarchingCubes, Environment, Sky, Bounds } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Test from "../components/Test";
import MetaBall from "../components/MetaBall";
import Pointer from "../components/Pointer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <Test />
        <directionalLight
          intensity={10}
          position={[-10, -10, -10]}
          color="purple"
        />
        <Physics gravity={[0, 2, 0]}>
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
            <MetaBall color="orange" position={[-2, -2, -0.5]} />
            <MetaBall color="hotpink" position={[3, 3, 0.5]} />
            <MetaBall color="aquamarine" position={[-3, -3, -0.5]} />
            <Pointer />
          </MarchingCubes>
        </Physics>
        <Sky />
        <Environment files="adamsbridge.hdr" />
        {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
        <Bounds fit clip observe margin={1}>
          <mesh visible={false}>
            <boxGeometry />
          </mesh>
        </Bounds>
      </Canvas>
    </>
  );
}

export default MyApp;
