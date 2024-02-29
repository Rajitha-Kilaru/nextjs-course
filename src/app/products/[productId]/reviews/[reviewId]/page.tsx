"use client";
import { notFound } from "next/navigation";

interface ReviewDetailsProps {
    params : {
        productId: string;
        reviewId: string;
    }
}

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default function ReviewDetails({params} : ReviewDetailsProps) {

    const random = getRandomInt(2)

    if(random === 1) {
        throw new Error("Error Loading Review")
    }

    if(parseInt(params.reviewId) > 100) {
        notFound()  //programatically navigating to custom not found page
    }
    return (
        <h1>Review {params.reviewId} for Product {params.productId}</h1>
    )
}