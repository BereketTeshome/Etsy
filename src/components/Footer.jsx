import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const Footer = () => {
  const linkStyle = {
    color: "white",
    mb: "8px",
    cursor: "pointer",
    fontSize: "12px",
    ":hover": {
      textDecoration: "underline",
    },
  };
  return (
    <Box>
      <Box sx={{ background: "#3B67D9" }}>
        <Typography
          sx={{
            textDecoration: "underline",
            textDecorationStyle: "dashed",
            textUnderlineOffset: "4px",
            py: 3,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <LanguageOutlinedIcon fontSize="large" /> Etsy is powered by 100%
          renewable electricity.
        </Typography>
      </Box>
      <Box
        maxWidth
        sx={{
          display: "flex",
          flexWrap: "wrap",
          bgcolor: "#2638C0",
          gap: 1,
          justifyContent: {
            xs: "normal",
            md: "space-between",
          },
          pr: {
            md: "30px",
            xs: "0px",
          },
        }}
      >
        <Box
          sx={{
            width: {
              md: "500px",
              xs: "100%",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: {
              md: "column",
              xs: "row",
            },
            bgcolor: "#122868",
            py: "20px",
            gap: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              bgcolor: "#F1641E",
              color: "white",
              py: "15px",
              px: "10px",
              borderRadius: 2,
            }}
          >
            Etsy
          </Typography>
          <Button
            sx={{
              bgcolor: "#2638C0",
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
              py: "10px",
              px: "10px",
              borderRadius: "50px",
            }}
          >
            Download the Etsy App
          </Button>
        </Box>
        <Box sx={{ py: "25px", pl: "10px" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: "15px",
              fontSize: "15px",
            }}
          >
            Shop
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Gift cards
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Etsy Registry
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Sitemap
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Etsy blog
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Etsy United Kingdom
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Etsy Germany
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Etsy Canada
          </Typography>
        </Box>
        <Box sx={{ py: "25px", pl: "10px" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: "15px",
              fontSize: "15px",
            }}
          >
            Sell
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Sell on Etsy
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Teams
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Forums
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Affiliates & Creators
          </Typography>
        </Box>
        <Box sx={{ py: "25px", pl: "10px" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: "15px",
              fontSize: "15px",
            }}
          >
            About
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Etsy, Inc.
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Policies
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Investors
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Careers
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Press
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Impact
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Legal imprint
          </Typography>
        </Box>
        <Box sx={{ py: "25px", pl: "10px" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: "15px",
              fontSize: "15px",
            }}
          >
            Help
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Help Center
          </Typography>
          <Typography variant="body2" sx={linkStyle}>
            Privacy settings
          </Typography>
        </Box>
      </Box>
      <Box
        bgcolor={"#222222"}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          py: "20px",
          gap: 2,
        }}
      >
        <Typography sx={{ color: "white", fontSize: "12px" }}>
          &copy; 2024 Etsy, Inc.
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "poiter",
          }}
        >
          Terms of use
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "poiter",
          }}
        >
          Privacy
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "poiter",
          }}
        >
          Interest-based ads
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "poiter",
          }}
        >
          Interest-based ads
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "12px",
            textDecoration: "underline",
            cursor: "poiter",
          }}
        >
          Regions
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
