import { Suspense } from "react";
import styles from "./SinglePost.module.css";
import Image from "next/image";
import PostData from "@/components/PostData/PostData";


export default async function SinglePostPage({params}) {

    return <div className={styles.container}>
        <div className={styles.imageArea}>
            <Image width={200}  height={300} src="/home1.svg" alt="error"/>
        </div>
        <div className={styles.descArea}>
            <Suspense fallback={<div>loading....</div>}>
                <PostData params={params}/>
            </Suspense>
        </div>
    </div>
}