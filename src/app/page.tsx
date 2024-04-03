import Link from "next/link"

export default function Home() {
    return (
        <>
        <h1>Welcome Home</h1>
        <h1><Link href="/blog">Blog</Link></h1>
        <h1><Link href="/products">Products</Link></h1>
        </>
    )
}