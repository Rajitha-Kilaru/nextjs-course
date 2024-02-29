"use client";
import { useRouter } from "next/navigation";

export default function OrderProducts() {
    const router = useRouter();
    const handleButtonClick = () => {
        router.push('/blog')
        // router.replace('/blog')
        // router.back()
        // router.forward()
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleButtonClick}>Place Order</button>
        </>
    )
}