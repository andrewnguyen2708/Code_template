import About from "../pages/about/About";
import HomePage from "../pages/home/HomePage";
import Products from "../pages/products/Products";
import Page404 from "../pages/response/Page404";

const appRoutes = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "product/*",
    element: <Products />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "*",
    element: <Page404 />
  }
];

const topMenu = [
  {
    path: "/",
    label: "Home"
  },
  {
    path: "product",
    label: "Products"
  },
  {
    path: "about",
    label: "About"
  },
  {
    path: "not-found",
    label: "404"
  }
];

export { appRoutes, topMenu };
