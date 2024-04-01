import { Stack } from "@mui/material";
import { useFood } from "@/context/FoodContext";
import { MenuCard } from "../cards/MenuCards";

export const Menu = () => {
  const { allFood } = useFood();
  console.log(allFood);
  return (
    <Stack maxWidth="inherit">
      <Stack py="32px"></Stack>
      <Stack
        direction="row"
        maxWidth="inherit"
        justifyContent="center"
        flexWrap="wrap"
        gap="24px"
        paddingTop="56px"
        paddingBottom="86px"
      >
        {allFood.map((food, index) => {
          return <MenuCard key={index} foodData={food} />;
        })}
      </Stack>
    </Stack>
  );
};
