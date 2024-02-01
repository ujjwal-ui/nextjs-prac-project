
import Links from "../links/Links";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return <div className={styles.container}>
                <div className={styles.logo}> 
                    Logo
                </div>
                <div className={styles.links}>
                    <Links/>
                </div>
            </div>
}