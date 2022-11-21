import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RigidBody, BallCollider } from "@react-three/rapier";
import { MarchingCube } from "@react-three/drei";
import { Vector3 } from "three";
function Pointer() {
  const vec = new Vector3();
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    const { width, height } = viewport.getCurrentViewport();
    vec.set(mouse.x * (width / 2), mouse.y * (height / 2), 0);
    ref.current.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0.8} subtract={50} color="white" />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

export default Pointer;
