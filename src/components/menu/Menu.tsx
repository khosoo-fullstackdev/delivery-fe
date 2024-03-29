import { Stack } from "@mui/material";

import { useFood } from "@/context/FoodContext";
import { FoodCard } from "../cards/Card";

export const Menu = () => {
  const { allFood } = useFood();
  console.log(allFood);
  return (
    <>
      <Stack maxWidth="inehrit">
        <Stack></Stack>
        <Stack
          direction="row"
          maxWidth="inherit"
          justifyContent="space-between"
          flexWrap="wrap"
          gap="43px"
        >
          {allFood.map((food, index) => {
            return <FoodCard key={index} food={food} />;
          })}
        </Stack>
      </Stack>
    </>
  );
};
