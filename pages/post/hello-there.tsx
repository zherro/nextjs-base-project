import Image from "next/image"


const Hello = () => {
    return ( 
        <article>
            <h1>Hello There!</h1>
            <Image 
                src="/post/hello-there/image-to-post.jpeg"
                width={640}
                height={427}
            />
        </article>
     );
}
 
export default Hello;