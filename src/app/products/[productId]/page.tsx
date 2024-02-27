interface ProductDetailsProps {
    params : {
        productId: string;
    }
}

export default function ProductDetails({params} : ProductDetailsProps) {
    return (
        <h1>Details about Product {params.productId}</h1>
    )
}