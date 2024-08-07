import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
// Data for reviews

const Reviews = ({ value, product }) => {
  const reviews = [
    {
      rating: 5,
      text: "Packaged well and arrived quickly! The item was exactly as described and exceeded my expectations. I am very pleased with the purchase and would highly recommend.",
      details: [
        { label: "Item quality", value: 5 },
        { label: "Shopping", value: 4 },
        { label: "Customer service", value: 4.5 },
      ],
    },
    {
      rating: 5,
      text: "The customer service was exceptional. They were responsive and very helpful with all of my inquiries. The overall shopping experience was smooth and enjoyable.",
      details: [
        { label: "Item quality", value: 3 },
        { label: "Shopping", value: 4 },
        { label: "Customer service", value: 5 },
      ],
    },
    {
      rating: 4,
      text: "Satisfied!",
      details: [
        { label: "Item quality", value: 4 },
        { label: "Shopping", value: 3 },
        { label: "Customer service", value: 4 },
      ],
    },
  ];
  return (
    <Container maxWidth>
      <Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "13px",
          }}
          fontWeight={"bold"}
        >
          Other reviews from this shop |
          <Box display={"flex"} alignItems={"center"}>
            <Rating
              name="read-only"
              value={value}
              readOnly
              size="small"
              sx={{ color: "#222", fontSize: "15px" }}
            />
            <Box fontWeight={200} fontSize={"12px"} color={"#555"}>
              ({product.reviewNumber})
            </Box>
          </Box>
        </Typography>
        <Box
          mt={"20px"}
          sx={{
            width: {
              lg: "70%",
              md: "90%",
              xs: "100%",
            },
          }}
        >
          {reviews.map((review, index) => (
            <Box
              key={index}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              pb={"10px"}
              borderBottom={1}
              borderColor={"#888"}
              mb={"10px"}
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  size="small"
                  sx={{ color: "#222", fontSize: "15px" }}
                />
                <Typography
                  sx={{
                    width: {
                      lg: "55%",
                      md: "70%",
                      xs: "95%",
                    },
                  }}
                  mt={"3px"}
                  fontSize="14px"
                  color={"#333"}
                >
                  {review.text}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "350px",
                    md: "230px",
                  },
                }}
              >
                {review.details.map((detail, detailIndex) => (
                  <Typography
                    key={detailIndex}
                    display={"flex"}
                    alignItems={"center"}
                    sx={{
                      justifyContent: {
                        sm: "end",
                        xs: "start",
                      },
                    }}
                    mr={"10px"}
                    gap={1}
                    fontSize={"13px"}
                    color={"#222"}
                    gutterBottom
                  >
                    {detail.label} <Box>{detail.value}</Box>{" "}
                    <Star fontSize="16px" />
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Reviews;
