import Link from "next/link";

export default function ProductsList() {
    const productId = 100
    return (
        <>
        <h1><Link href="/">HOME</Link></h1>
        <h1>Products List</h1>
        <h2><Link href="/products/1">product 1</Link></h2>
        <h2><Link href="/products/2">product 2</Link></h2>
        <h2><Link href="/products/3" replace>product 3</Link></h2>  {/* replace will take to initial url */}
        <h2><Link href={`/products/${productId}`}>product {productId}</Link></h2>
        </>
    )
}