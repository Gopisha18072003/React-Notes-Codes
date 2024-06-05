import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsDetails from "./pages/ProductDetails";

// Method 1
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // alternative of having path: ''
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductsDetails /> },
    ],
  },
]);

// Method 2
// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={< HomePage/>}/>
//     <Route path="/products" element={< ProductsPage/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routerDefinition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
