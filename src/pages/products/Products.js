import { useRoutes } from "react-router-dom";
import * as React from "react";
import { Container } from "@mui/material";
import productRoutes from "../../routes/productRoutes";

export default function Products() {
  const element = useRoutes(productRoutes);

  return <Container maxWidth="md">{element}</Container>;
}
