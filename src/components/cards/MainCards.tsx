import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack, Typography } from "@mui/material";
import { useFood } from "@/context/ShoppingCart";

// import { StarIcon } from "@/icons/StarIcon";

export const FoodCard = () => {
  const { allFood } = useFood();
  // const saleFoods = allFood.filter((food) => food.sale > 0).slice(0, 4);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      width="1200px"
    >
      <Card sx={{ width: "282px", height: "256px" }}>
        <CardMedia
          sx={{
            width: "282px",
            height: "186px",
            borderRadius: "16px",
          }}
        />
        <CardContent>
          <Typography></Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      {allFood.map((a, index) => {
        return (
          <Card key={index} sx={{ width: "282px", height: "256px" }}>
            <CardMedia
              sx={{
                width: "282px",
                height: "186px",
                borderRadius: "16px",
              }}
              src={a.imagePath}
            />
            <CardContent>
              <Typography>{a.foodName}</Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};
