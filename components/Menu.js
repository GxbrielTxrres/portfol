import { Html } from "@react-three/drei";
function Menu({ setIsOpen }) {
  return (
    <mesh>
      <Html
        style={{
          fontSize: 15,
          zIndex: -1,
          boxShadow: "-2px 5px 10px -2px rgba(0,0,0,0.79)",
        }}
        rotation={[0, -0.2, 0.2]}
        position={[-0.5, -0.35, 0.01]}
        scale={1}
        distanceFactor={1}
        transform
      >
        <button onClick={setIsOpen}>Details</button>
      </Html>
      <Html
        style={{
          fontSize: 15,
          zIndex: -1,
          boxShadow: "2px 5px 10px -2px rgba(0,0,0,0.79)",
        }}
        rotation={[0, 0.2, -0.2]}
        position={[0.5, -0.35, 0.01]}
        scale={1}
        distanceFactor={1}
        transform
      >
        <button onClick={setIsOpen}>Projects</button>
      </Html>
    </mesh>
  );
}

export default Menu;
