import { Billboard, Plane, Text, OrbitControls } from "@react-three/drei";
import { useState, useRef } from "react";
import About from "./About";
import Contact from "./Contact";

function BillBoard({
  about,
  contact,
  setContact,
  isOpen,
  pos,
  rotation,
  text,
}) {
  const [open, setIsOpen] = useState(true);

  function handleClick() {
    open ? setIsOpen(false) : setIsOpen(true);
    open ? setContact(true) : setContact(false);
  }

  if (isOpen && open) {
    return (
      <Billboard rotation={rotation} position={pos} follow={true} lockY>
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 4}
          target={[0, 0, 0]}
          position={[0, 1, 0]}
        />
        <Plane onClick={handleClick} args={[0.5, 0.5]}>
          <Text depthOffset={-1} color="black" fontSize={0.2}>
            {text}
          </Text>
        </Plane>
      </Billboard>
    );
  } else if (isOpen && open === false) {
    return (
      <>
        {contact && <Contact />}
        {about && <About />}

        <Billboard
          rotation={rotation}
          position={pos}
          follow={true}
          lockY={true}
        >
          <Plane onClick={handleClick} args={[0.5, 0.5]}>
            <Text depthOffset={-1} color="black" fontSize={0.2}>
              {text}
            </Text>
          </Plane>
        </Billboard>
      </>
    );
  }
}

export default BillBoard;
