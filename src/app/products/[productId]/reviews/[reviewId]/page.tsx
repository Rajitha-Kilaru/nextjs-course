interface ReviewDetailsProps {
    params : {
        productId: string;
        reviewId: string;
    }
}

export default function ReviewDetails({params} : ReviewDetailsProps) {
    return (
        <h1>Review {params.reviewId} for Product {params.productId}</h1>
    )
}