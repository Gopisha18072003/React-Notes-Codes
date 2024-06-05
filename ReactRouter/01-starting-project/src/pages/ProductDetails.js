import { useParams, Link } from "react-router-dom"
export default function ProductsDetails() {
    const params = useParams();

    return <>
        <h1>The Product details</h1>
        <h2>{params.productId}</h2>
        <Link to=".." relative="path">Back</Link>
        {/* Back relative to the path- go back 1 level based on path
        Back relative to the root - go back path relative to root */}
    </>
}