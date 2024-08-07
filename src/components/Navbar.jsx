import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Button,
  Link,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MyAppBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
      elevation={1}
    >
      <Toolbar
        sx={{ height: isMediumScreen ? "auto" : "10px", paddingTop: "20px" }}
        variant="dense"
      >
        {isSmallScreen && <MenuSharpIcon />}
        <Typography variant="h4" sx={{ color: "#F1641E", marginRight: "2px" }}>
          <Link href="/" sx={{ textDecoration: "none", color: "orange" }}>
            Etsy
          </Link>
        </Typography>
        {!isSmallScreen && (
          <Typography
            sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}
          >
            <MenuSharpIcon sx={{ marginRight: "8px" }} />
            Categories
          </Typography>
        )}
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            variant="outlined"
            placeholder="soccer"
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "white",
              border: "#222",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      borderRadius: "50%",
                      padding: "2px",
                      marginRight: "5px",
                    }}
                  >
                    <CloseSharpIcon color="black" />
                  </IconButton>
                  <IconButton
                    sx={{
                      backgroundColor: "#F1641E",
                      borderRadius: "50%",
                      padding: "5px",
                      position: "relative",
                      left: "10px",
                      "&:hover": {
                        backgroundColor: "darkorange",
                      },
                    }}
                  >
                    <SearchSharpIcon style={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                borderRadius: "25px",
              },
            }}
          />
        </Box>
        <Box
          py={3}
          width={"250px"}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {!isSmallScreen && (
            <Button
              sx={{
                fontSize: "14px",
                color: "#222",
                textTransform: "lowercase",
              }}
            >
              sign in
            </Button>
          )}
          {!isSmallScreen && (
            <IconButton>
              <FavoriteBorderIcon sx={{ color: "#222" }} />
            </IconButton>
          )}
          {isSmallScreen && (
            <IconButton>
              <AccountCircleSharpIcon sx={{ color: "#222" }} />
            </IconButton>
          )}
          <IconButton>
            <CardGiftcardIcon sx={{ color: "#222" }} />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlinedIcon sx={{ color: "#222" }} />
          </IconButton>
        </Box>
      </Toolbar>
      {!isMediumScreen && (
        <Toolbar sx={{ height: "10px" }} variant="dense">
          <Box display={"flex"} justifyContent={"center"} width={"100%"}>
            <Button
              sx={{
                fontSize: "14px",
                color: "#222",
                textTransform: "capitalize",
              }}
            >
              <IconButton>
                <CardGiftcardIcon sx={{ color: "#222" }} />
              </IconButton>
              Gift Mode
            </Button>
            <Button
              sx={{
                fontSize: "14px",
                color: "#222",
                textTransform: "capitalize",
              }}
            >
              Back-to-school Savings
            </Button>
            <Button
              sx={{
                fontSize: "14px",
                color: "#222",
                textTransform: "capitalize",
              }}
            >
              Home Favorites
            </Button>
            <Button
              sx={{
                fontSize: "14px",
                color: "#222",
                textTransform: "capitalize",
              }}
            >
              Fasion Finds
            </Button>
            <Button
              sx={{
                fontSize: "14px",
                color: "#222",
                textTransform: "capitalize",
              }}
            >
              Registry
            </Button>
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default MyAppBar;
