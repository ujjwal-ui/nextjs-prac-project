import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
      <div className={styles.container}>
          <div className={styles.textArea}>
            text jdk fsfmkldjfkl fdklfndklnfvd fkdfkl  
            text jdk fsfmkldjfkl fdklfndklnfvd fkdfkl  
            text jdk fsfmkldjfkl fdklfndklnfvd fkdfkl  
          </div>
          <div className={styles.imageArea}>
            <Image src="/home1.svg" width={200} height={300} alt="error" priority/>
          </div>
      </div>
  );
}
