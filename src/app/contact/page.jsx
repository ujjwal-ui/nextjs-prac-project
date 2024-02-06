import styles from "./contact.module.css";
import Image from "next/image";

export default function ContactPage() {
    return <div className={styles.container}>
        <div className={styles.formArea}>
            <form action="" >
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Phone Number" required/>
                <textarea type="text" placeholder="Message" required/>
                <button>submit</button>
            </form>
        </div>
        <div className={styles.imageArea}>
            <Image src="/contact.svg" width={200} height={300} alt="error" priority />
        </div>
    </div>
}