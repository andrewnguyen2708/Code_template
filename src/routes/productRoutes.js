import CreateProduct from "../pages/products/CreateProduct";
import ProductDetails from "../pages/products/ProductDetails";
import ProductList from "../pages/products/ProductList";

const productRoutes = [
  {
    path: "",
    element: <ProductList />,
    label: "Product details"
  },
  { path: "create", element: <CreateProduct />, label: "Create product" },
  {
    path: ":id",
    element: <ProductDetails />,
    label: "Product details"
  }
];

export default productRoutes;
