import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody, BallCollider } from "@react-three/rapier";
import { MarchingCube } from "@react-three/drei";
import { Vector3 } from "three";

function MetaBall({ color, ...props }) {
  const vec = new Vector3();
  const api = useRef();
  useFrame((state, delta) => {
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.05)
    );
  });
  return (
    <RigidBody
      ref={api}
      colliders={true}
      linearDamping={4}
      angularDamping={0.95}
      {...props}
    >
      <MarchingCube strength={0.35} subtract={6} color={color} />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

export default MetaBall;
