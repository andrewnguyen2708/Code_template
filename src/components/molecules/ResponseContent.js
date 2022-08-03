import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function ResponseContent({ image, title, subheader, actions }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        p: 3
      }}
    >
      {image && (
        <Box
          component="img"
          src={image}
          sx={(theme) => ({
            display: "inline-block",
            maxWidth: theme.spacing(30),
            width: "100%",
            margin: "auto"
          })}
        />
      )}
      {title && <Typography variant="h1">{title}</Typography>}
      {subheader && <Typography variant="h4">{subheader}</Typography>}
      {actions && <Toolbar>{actions}</Toolbar>}
    </Box>
  );
}
ResponseContent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.node,
  subheader: PropTypes.node,
  actions: PropTypes.node
};
// ResponseContent.defaultProps = {
//   image: "/images/404.jpg"
// };
