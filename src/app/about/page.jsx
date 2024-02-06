import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
    return <div className={styles.container}>
        <div className={styles.textArea}>
            dmksc skcndjkc dsjkvndjk vsdmnvkldjnvsmd vkldjvkld svndklsn
            dmksc skcndjkc dsjkvndjk vsdmnvkldjnvsmd vkldjvkld svndklsn
            dmksc skcndjkc dsjkvndjk vsdmnvkldjnvsmd vkldjvkld svndklsn
            dmksc skcndjkc dsjkvndjk vsdmnvkldjnvsmd vkldjvkld svndklsn
        </div>
        <div className={styles.imageArea}>
            <Image src="/about.svg" width={200} height={300} alt="error" priority />
        </div>
    </div>
}