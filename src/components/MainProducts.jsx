import React, { useEffect } from "react";
import { Box, Typography, Link, Container, Button } from "@mui/material";
import mainProductsArray from "../assets/mainProducts.json";
import { Star, StarsOutlined } from "@mui/icons-material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AOS from "aos";
import "aos/dist/aos.css";
const MainProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container maxWidth sx={{ marginTop: 5 }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
            gap: 2,
          }}
        >
          {mainProductsArray.mainProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              sx={{ textDecoration: "none" }}
              key={product.id}
            >
              <Box
                sx={{
                  marginBottom: 4,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: 1,
                  bgcolor: "#f2f3f785",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "scale(1.05)",
                  },
                  width: 310,
                }}
                className="animation"
                data-aos="zoom-in"
              >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: 280,
                    // maxHeight: { xs: 233, md: 367 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt={product.title}
                  src={product.images[0]}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    border: "1px solid #999",
                    color: "black",
                    background: "#fff",
                    borderRadius: "50px",
                    padding: "2px 8px",
                  }}
                >
                  Popular
                </Typography>
                <Box px={1} pb={1}>
                  <Typography
                    sx={{ fontSize: "0.9rem", color: "#222" }}
                    gutterBottom
                  >
                    {product.title.length > 40
                      ? `${product.title.slice(0, 40)}...`
                      : product.title}
                  </Typography>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <Star sx={{ color: "#000" }} />
                    <Typography
                      sx={{
                        color: "gray",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      ({product.reviewNumber}) &#183;{" "}
                      <StarsOutlined sx={{ color: "purple", scale: "0.8" }} />{" "}
                      {product.owner.name}
                    </Typography>
                  </Typography>
                  <Typography
                    fontSize={"17px"}
                    fontWeight={"bold"}
                    color={"green"}
                  >
                    USD {product.price}
                  </Typography>

                  <Box sx={{ marginTop: 3 }}>
                    <Button
                      sx={{
                        border: "2px solid #333",
                        color: "black",
                        borderRadius: "50px",
                        padding: "4px 8px",
                        marginRight: 1,
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "white",
                        },
                        textTransform: "capitalize",
                      }}
                    >
                      <AddOutlinedIcon /> Add To Cart
                    </Button>

                    <Button
                      sx={{
                        color: "black",
                        borderRadius: "50px",

                        "&:hover": {
                          backgroundColor: "#000",
                          color: "white",
                        },
                        textTransform: "capitalize",
                      }}
                    >
                      More like this <ArrowForwardOutlinedIcon />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default MainProducts;
