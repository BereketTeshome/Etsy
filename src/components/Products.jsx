import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ProductCards from "./ProductCards";
const Products = () => {
  return (
    <Container maxWidth>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Etsy's Picks</Typography>
        <Button
          sx={{
            border: "2px solid #333",
            color: "black",
            borderRadius: "50px",
            padding: "6px 14px",
            "&:hover": {
              backgroundColor: "#000",
              color: "white",
            },
          }}
        >
          <Typography sx={{ fontSize: "0.9rem" }}>See More</Typography>
        </Button>
      </Box>
      <ProductCards />
    </Container>
  );
};

export default Products;
