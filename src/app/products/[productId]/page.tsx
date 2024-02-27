interface ProductDetailsProps {
    params : {
        productId: string;
    }
}

export default function ProductDetails({params} : ProductDetailsProps) {
    console.log('2==', params);
    return (
        <h1>Details about Product {params.productId}</h1>
    )
}