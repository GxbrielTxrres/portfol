import styles from "../styles/Contact.module.css";
import { Html, Plane } from "@react-three/drei";
function Contact() {
  return (
    <Plane args={[0.6, 0.8]}>
      <Html center depthOffset={-1} color="black" fontSize={0.2}>
        <div className={styles.rotate}>
          <h1>Contact</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" cols="30" rows="10"></textarea>
          <button className={styles.btn}>Submit</button>
        </div>
      </Html>

      <meshStandardMaterial
        roughness={1}
        transparent
        opacity={0.3}
        color="lightblue"
      />
    </Plane>
  );
}

export default Contact;
