import { notFound } from "next/navigation";

interface ReviewDetailsProps {
    params : {
        productId: string;
        reviewId: string;
    }
}

export default function ReviewDetails({params} : ReviewDetailsProps) {
    if(parseInt(params.reviewId) > 100) {
        notFound()  //programatically navigating to custom not found page
    }
    return (
        <h1>Review {params.reviewId} for Product {params.productId}</h1>
    )
}