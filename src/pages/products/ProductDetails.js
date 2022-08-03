import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Toolbar,
  Typography
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_IMG } from "../../constants/cdn";
import { getProducts } from "../../services/products";

export default function ProductDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

  const productData = getProducts().filter((item) => item.id === productId);
  const productItemData = productData.length > 0 ? productData[0] : null;

  const { id, name, image, desc } = productItemData;

  return (
    <>
      <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={() => navigate("../")}>
          Back
        </Button>
      </Toolbar>
      <Card>
        <CardMedia
          component="img"
          src={image || DEFAULT_IMG}
          sx={{ height: 250, backgroundColor: "#ddd" }}
        />
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
          <Typography variant="body2">
            ID: {productId}
            <br />
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
