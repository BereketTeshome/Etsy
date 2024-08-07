import { Container, Box, Button, Typography } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const ProductsHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth sx={{ marginBottom: 7 }}>
      <Box
        sx={{
          display: isSmallScreen ? "block" : "flex",
          alignItems: "center",
          justifyContent: isSmallScreen ? "flex-end" : "space-between",
          textAlign: isSmallScreen ? "right" : "left",
          padding: isSmallScreen ? "0 1rem" : "0",
        }}
      >
        <Button
          sx={{
            border: "2px solid #333",
            color: "black",
            borderRadius: "50px",
            padding: "6px 14px",
            marginBottom: 1,
            "&:hover": {
              backgroundColor: "#000",
              color: "white",
            },
          }}
        >
          <TuneOutlinedIcon sx={{ fontSize: 15, marginRight: 1 }} />
          {!isSmallScreen && (
            <Typography sx={{ fontSize: "0.9rem" }}>All Filters</Typography>
          )}
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isSmallScreen ? "flex-end" : "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#777",
              display: "flex",
              alignItems: "center",
              marginRight: 1,
              fontSize: "0.8rem",
            }}
          >
            356 results for "Soccer", with Ads <InfoOutlinedIcon />
          </Typography>
          {!isMediumScreen && (
            <Button
              sx={{
                border: "2px solid #333",
                color: "black",
                borderRadius: "50px",
                padding: "6px",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "white",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "0.9rem" }}>Sort by :</Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "0.7rem", marginLeft: "3px" }}
                >
                  Most relevant
                </Typography>{" "}
                <ArrowDropDownOutlinedIcon />
              </Typography>
            </Button>
          )}
        </Box>
      </Box>

      <Button
        sx={{
          color: "black",
          borderRadius: "50px",
          padding: "7px 14px",
          backgroundColor: "#d0d3d9",
          marginTop: 2,
          "&:hover": {
            backgroundColor: "#000",
            color: "white",
          },
        }}
      >
        <Typography sx={{ fontSize: "0.9rem" }}>Etsy's Pick</Typography>
        <CloseOutlinedIcon sx={{ fontSize: 25, marginLeft: 1 }} />
      </Button>
    </Container>
  );
};

export default ProductsHeader;
