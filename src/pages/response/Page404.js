import { Container } from "@mui/material";
import React from "react";
import ResponseContent from "../../components/molecules/ResponseContent";

export default function Page404() {
  return (
    <Container maxWidth="md">
      <ResponseContent
        image="/images/404.png"
        title="404"
        subheader="Page not found"
      />
    </Container>
  );
}
