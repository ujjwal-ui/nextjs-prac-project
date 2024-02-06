

async function getPost(postId)   {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/"+postId, {cache: "no-store"});
    return data.json();
}

export default async function PostData({params}) {
    const post = await getPost(params.slug);

    return <>
            <h2>{post.title}</h2>
            <p>{post.body}</p> 
        </>
}