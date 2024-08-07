import { Box, Typography, Link } from "@mui/material";
import productsArray from "../assets/products.json";
import Rating from "@mui/material/Rating";

const ProductCards = () => {
  return (
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
        {productsArray.products.map((product) => (
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
                "&:hover": {
                  boxShadow: 3,
                  transform: "scale(1.05)",
                },
                width: {
                  xs: 160,
                  sm: 200,
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: 150,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt={product.title}
                src={product.images[0]}
              />
              <Box px={1} pb={1}>
                <Typography
                  sx={{ fontSize: "0.9rem", color: "#222" }}
                  gutterBottom
                >
                  {product.title.length > 24
                    ? `${product.title.slice(0, 24)}...`
                    : product.title}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name="size-medium"
                    defaultValue={product.rating}
                    sx={{ color: "black", fontSize: "17px" }}
                  />{" "}
                  <Typography sx={{ color: "gray" }}>
                    ({product.reviewNumber})
                  </Typography>
                </Typography>
                <Typography
                  fontSize={"12px"}
                  fontWeight={"bold"}
                  color={"#222"}
                >
                  USD {product.price}
                </Typography>
                <Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
                  {product.owner.name}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ProductCards;
