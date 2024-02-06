import Image from "next/image";
import styles from "./Blogs.module.css";
import Link from "next/link";

const getData = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
    return data.json();
}

export default async function BlogPage() {

    const posts = await getData();

    return <div className={styles.container}>
            
            {posts.map((data) => {
                return <div className={styles.blog}>
                    <div className={styles.imageArea}>
                        <Image width={200} height={300} alt="error" src="/insta.svg" />
                    </div>
                    <div className={styles.descArea}>
                        <p>
                           {data.title}
                        </p>
                        <Link href={`/blog/${data.id}`} >read more</Link>
                    </div>
                </div>
            })}
            
    </div>
}