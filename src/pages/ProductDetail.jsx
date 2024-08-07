import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import productsArray from "../assets/products.json";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation } from "react-router-dom";
import {
  BackHand,
  DoneOutlined,
  Flag,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  SquareFoot,
  Chair,
} from "@mui/icons-material";
import Reviews from "../components/Reviews";

const ProductDetail = () => {
  const [imgNum, setImgNum] = useState(0);
  const id = useLocation().pathname.split("/")[2];
  const filteredProduct = productsArray.products.filter((item) => {
    if (Number(id) === item.id) {
      return item;
    }
  });
  const product = filteredProduct[0];
  const [value, setValue] = useState(product.rating);
  const handleClickLeft = () => {
    if (imgNum < 1) {
      setImgNum(product.images.length - 1);
    } else {
      setImgNum(imgNum - 1);
    }
  };

  const handleClickRight = () => {
    if (imgNum > product.images.length - 2) {
      setImgNum(0);
    } else {
      setImgNum(imgNum + 1);
    }
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            fontSize: "14px",
            color: "#222",
            textTransform: "capitalize",
            textDecoration: "underline",
          }}
        >
          <Link href="/" sx={{ marginRight: 1 }}>
            Home Page
          </Link>{" "}
          &#8250;
        </Button>
        <Button
          sx={{
            fontSize: "14px",
            color: "#222",
            textTransform: "capitalize",
            textDecoration: "underline",
          }}
        >
          jwelery &#8250;
        </Button>
        <Button
          sx={{
            fontSize: "14px",
            color: "#222",
            textTransform: "capitalize",
            textDecoration: "underline",
          }}
        >
          necklaces &#8250;
        </Button>
        <Button
          sx={{
            fontSize: "14px",
            color: "#222",
            textTransform: "capitalize",
            textDecoration: "underline",
          }}
        >
          beaded necklaces
        </Button>
      </Box>
      <Container
        sx={{
          display: "flex",
          marginTop: "40px",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
        maxWidth
      >
        <Box flexGrow={1}>
          <Box
            width={"100%"}
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column-reverse",
                sm: "row",
              },
            }}
            gap={3}
          >
            <Box
              display={"flex"}
              sx={{
                flexDirection: {
                  xs: "row",
                  sm: "column",
                },
                flexWrap: "wrap",
              }}
              gap={1}
            >
              {product.images.map((item, index) => {
                return (
                  <Box
                    component="img"
                    key={index}
                    sx={{
                      height: 50,
                      width: 50,
                      border: 1,
                      borderRadius: 1,
                      borderColor: `${index === imgNum ? "#000" : "#3333"}`,
                      cursor: "pointer",
                    }}
                    alt={product.title}
                    src={item}
                    onClick={() => setImgNum(index)}
                  ></Box>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={"100%"}
              position={"relative"}
            >
              <Box
                component={"img"}
                alt={product.title}
                src={product.images[imgNum]}
                sx={{
                  maxHeight: "100vh",
                  borderRadius: 2,
                  width: "100%",
                }}
              ></Box>
              <Box
                position={"absolute"}
                top={0}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  position={"absolute"}
                  top={0}
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  alignItems={"center"}
                  sx={{
                    px: {
                      sm: "30px",
                      xs: "0px",
                    },
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "#FCC7A2",
                      borderRadius: "50px",
                      color: "#333",
                      height: {
                        sm: "35px",
                        xs: "25px",
                      },
                      fontSize: "12px",
                      textTransform: "capitalize",
                    }}
                  >
                    <IconButton>
                      <AutoAwesomeOutlinedIcon fontSize="small" />
                    </IconButton>
                    esty's pick
                  </Button>
                  <Button>
                    <IconButton
                      sx={{ bgcolor: "#fff", boxShadow: "1px 1px 9px -1px" }}
                    >
                      <FavoriteBorderIcon sx={{ color: "#222" }} />
                    </IconButton>
                  </Button>
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Button onClick={handleClickLeft}>
                    <IconButton
                      sx={{ bgcolor: "#fff", boxShadow: "1px 1px 9px -1px" }}
                    >
                      <KeyboardArrowLeftOutlined sx={{ color: "#222" }} />
                    </IconButton>
                  </Button>
                  <Button onClick={handleClickRight}>
                    <IconButton
                      sx={{ bgcolor: "#fff", boxShadow: "1px 1px 9px -1px" }}
                    >
                      <KeyboardArrowRightOutlined sx={{ color: "#222" }} />
                    </IconButton>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "12px",
              color: "#333",
              marginBottom: "7px",
              width: "100%",
              justifyContent: {
                sm: "end",
                xs: "start",
              },
              pr: "20px",
              mt: "10px",
              textDecoration: "underline",
            }}
          >
            <Flag sx={{ color: "#222", fontSize: "14px" }} />
            Report this item to Etsy
          </Typography>
        </Box>

        <Box
          sx={{
            width: {
              lg: "400px",
              md: "700px",
              sm: "400px",
              xs: "100%",
            },
            px: "15px",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "#D00739", fontWeight: 540 }}
              gutterBottom
            >
              Rare find
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#333" }}
              gutterBottom
            >
              USD {product.price}
            </Typography>
            <Typography variant="body2" color={"#555"} gutterBottom>
              {product.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#222",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
              }}
              gutterBottom
            >
              {product.owner.name}
              <Rating
                name="read-only"
                value={value}
                readOnly
                size="small"
                sx={{ color: "#222", fontSize: "14px" }}
              />
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "10px",
                color: "#444",
              }}
              gutterBottom
            >
              <DoneOutlined sx={{ color: "limegreen", fontSize: "14px" }} />{" "}
              Returns & exchanges accepted
            </Typography>
            <Button
              sx={{
                width: "100%",
                bgcolor: "#111",
                color: "#fff",
                fontSize: "17px",
                textTransform: "capitalize",
                borderRadius: "50px",
                marginTop: "10px",
                ":hover": {
                  color: "#111",
                  bgcolor: "lightblue",
                },
              }}
            >
              Add to cart
            </Button>
          </Box>
          <Box mt={"30px"}>
            <Typography variant="body2" fontSize={"13px"} gutterBottom>
              Item detail
            </Typography>
            <Typography variant="body2" mt={"15px"} gutterBottom>
              Highlight
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "12px",
                color: "#333",
                marginBottom: "7px",
              }}
            >
              <BackHand sx={{ color: "#222", fontSize: "14px" }} /> Made by:
              {product.owner.name}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "12px",
                color: "#333",
                marginBottom: "7px",
              }}
            >
              <AutoAwesomeOutlinedIcon
                sx={{ color: "#222", fontSize: "14px" }}
              />
              Materials: {product.material}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "12px",
                color: "#333",
                marginBottom: "7px",
              }}
            >
              <Chair sx={{ color: "#222", fontSize: "14px" }} /> Chain style:
              Bead
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "12px",
                color: "#333",
                marginBottom: "7px",
              }}
            >
              <SquareFoot sx={{ color: "#222", fontSize: "14px" }} /> Necklace
              length: 42 centimeters
            </Typography>
          </Box>
          <Box mt={"20px"}>
            <Typography variant="body2" fontSize={"13px"} gutterBottom>
              About this item
            </Typography>
            <Typography
              variant="body2"
              fontSize={"12px"}
              color={"#555"}
              gutterBottom
            >
              {product.desc}
            </Typography>
          </Box>
        </Box>
      </Container>
      {/* Reviews */}
      <Reviews value={product.rating} product={product} />

      <br />
    </Box>
  );
};

export default ProductDetail;
