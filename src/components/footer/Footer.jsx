import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return <div className={styles.container}>
        <div className={styles.iconsContainer}>
            <Image src="/insta.svg" width={50} height={30} alt="error" />    
            <Image src="/email.svg" width={50} height={30} alt="error"  />    
            <Image src="/fb.webp" width={50} height={30} alt="error" />    
        </div>
    </div>
}