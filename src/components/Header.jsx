import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const fullText =
    "Football Field Pencil Case, Soccer Field Zipper Pouch, Kid's Pencil Case, Back to School, Sport Lover Gift, Student Gift Idea, Gift For Kids";
  return (
    <Container maxWidth sx={{ marginTop: 2, marginBottom: 2 }}>
      <Box sx={{ display: "flex", gap: { xs: 1, md: 4 }, marginBottom: 2 }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            sx={{
              borderRadius: 1,
              width: 200,
              height: 200,
              maxHeight: { xs: 233, md: 200 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="/soccer.jpg"
          />
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <IconButton>
              <FavoriteBorderOutlinedIcon
                sx={{ color: "black", fontSize: 15 }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ maxWidth: 800 }}>
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 1,
                fontSize: "13px",
              }}
            >
              <Typography
                sx={{ textDecoration: "underline", fontSize: "13px" }}
              >
                efratul{" "}
              </Typography>
              <Rating
                name="size-medium"
                defaultValue={5}
                readOnly
                sx={{ color: "black", fontSize: "15px" }}
              />{" "}
              (224)
            </Typography>
            {isSmallScreen ? (
              fullText.slice(0, 24) + "..."
            ) : (
              <Typography
                sx={{ fontWeight: "bold", color: "#222" }}
                gutterBottom
              >
                {" "}
                {fullText}{" "}
              </Typography>
            )}

            <Typography fontWeight={"bold"} fontSize={"14px"} color={"#333"}>
              USD 19.00
            </Typography>
            <Typography
              sx={{
                background: "#90CF8D",
                width: "fit-content",
                padding: "2px 10px",
                borderRadius: "20px",
                fontSize: "0.8rem",
              }}
            >
              free shipping
            </Typography>
            <Button
              sx={{
                border: "2px solid #333",
                color: "black",
                borderRadius: "50px",
                padding: "6px 14px",
                textTransform: "none",
                fontSize: "13px",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "white",
                },
                marginTop: isSmallScreen ? 6 : 2,
              }}
            >
              Shop this item
            </Button>
          </Box>
        </Box>
      </Box>
      <hr />
    </Container>
  );
};

export default Header;
