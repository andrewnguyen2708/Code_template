import * as React from "react";
import { Box, Button, Container, Grid, Toolbar } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        })}
      >
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="contained" color="primary">
                Button primary
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="newColor">
                Button custom color
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </Container>
  );
}
