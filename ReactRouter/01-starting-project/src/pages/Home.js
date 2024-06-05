import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
    
    // useNavigate hook is used to navigate to different links programatically
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return <>
        <h1>The Home Page</h1>
         {/* using this approach we can change the link without sending the http request  */}
        <Link to='/products' >The List of Products</Link>
        <button onClick={navigateHandler}>Products</button>
    </>
}