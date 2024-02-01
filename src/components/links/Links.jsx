"use client";

import Link from "next/link"
import styles from "./Links.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import menuImage from "../../../public/menu.svg";

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Blog",
        path: "/blog"
    }
]

export default function Links() {
    const [openMenu, setOpenMenu] = useState(false);
    const pathName = usePathname();
    console.log(pathName);

    return (
        <>
            <div className={styles.container}>
                { links.map((link) => <Link className={link.path === pathName ? styles.active : styles.link} key={link.title} href={link.path} >{link.title}</Link>) }
                <button onClick={() => setOpenMenu(prev => !prev)}>
                    <Image width={30} height={20} priority alt="error" src={menuImage}/>
                </button>
            </div>
            {openMenu && <div className={styles.mobileMenu}>
                { links.map((link) => <Link className={link.path === pathName ? styles.active : styles.link} key={link.title} href={link.path} >
                    {link.title}
                    </Link>)
                }
                <button onClick={() => setOpenMenu(prev => !prev)}>
                    close
                </button>

            </div> }
        </>
    )
}