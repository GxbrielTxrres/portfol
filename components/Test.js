import { useRef, useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function Test() {
  let text = useRef();

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const detectKeyDown = (event) => {
      if (event.key) {
        setHidden(true);
      }
    };
    document.addEventListener("keydown", detectKeyDown);
  }, []);

  return (
    <mesh rotation={[-0.5, 0, 0.01]}>
      <Html
        style={{
          display: hidden === true ? "block" : "none",
          fontSize: 15,
          zIndex: -1,
          boxShadow: "3px 7px 10px -2px rgba(0,0,0,0.79)",
        }}
        position={[0, -0.45, 0.01]}
        ref={text}
        scale={1}
        distanceFactor={1}
        transform
      >
        <button onClick={() => setHidden(false)}>Play</button>
        <button>Projects</button>
        <button>About</button>
        <button>Contact</button>
      </Html>
      <Html
        style={{ display: hidden === true ? "none" : "block", fontSize: 15 }}
        position={[0, -0.45, 0.01]}
        scale={1}
        distanceFactor={1}
        transform
      >
        <h1 onClick={() => setHidden(true)}>Press Any Button/Tap Here</h1>
      </Html>
    </mesh>
  );
}

export default Test;
