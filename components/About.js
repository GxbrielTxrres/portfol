import { Html, Plane } from "@react-three/drei";
import styles from "../styles/contact.module.css";
function About() {
  return (
    <>
      <Plane args={[0.6, 0.8]}>
        <Html center depthOffset={-1} color="black" fontSize={0.2}>
          <div className={styles.rotate}>
            <h1 style={{ textAlign: "center" }}>Web Dev</h1>
          </div>
        </Html>

        <meshStandardMaterial
          roughness={1}
          transparent
          opacity={0.3}
          color="lightblue"
        />
      </Plane>
    </>
  );
}

export default About;
