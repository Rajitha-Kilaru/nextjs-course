import { Metadata } from "next";

interface ProductDetailsProps {
    params : {
        productId: string;
    }
}

export const generateMetadata = async({ params }: ProductDetailsProps): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`android ${params.productId}`)
        }, 1000)
    })
    return {
        title : `product ${title}`
    }
}

export default function ProductDetails({params} : ProductDetailsProps) {
    return (
        <h1>Details about Product {params.productId}</h1>
    )
}