import { useNavigate } from "react-router-dom";
import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
  Link
} from "@mui/material";
import { DEFAULT_IMG } from "../../constants/cdn";
import { getProducts } from "../../services/products";
import AtomRouterLink from "../../components/atoms/AtomRouterLink";

export default function ProductList() {
  const navigate = useNavigate();
  const productData = getProducts(8);

  return (
    <>
      <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => navigate("create")}>
          Create product
        </Button>
      </Toolbar>
      <Grid container spacing={3}>
        {productData.map((product) => {
          const { id, name, image, desc } = product;

          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Link component={AtomRouterLink} to={id} underline="none">
                <Card
                // onClick={() => navigate("details")}
                >
                  <CardMedia
                    component="img"
                    src={image || DEFAULT_IMG}
                    sx={{ height: 150, backgroundColor: "#ddd" }}
                  />
                  <CardContent>
                    <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
                    <Typography variant="body2">{desc}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
