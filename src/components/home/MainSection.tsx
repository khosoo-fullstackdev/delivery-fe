import { ButtonBase, Stack, Typography } from "@mui/material";
import { StarIcon } from "@/icons/StarIcon";
import { FoodCard } from "../cards/Card";

export const MainSection = ({
  title,
  food,
}: {
  title: string;
  food: any[];
}) => {
  return (
    <Stack gap={"24px"}>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
        paddingY={"16px"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <StarIcon />
          <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
            {title}
          </Typography>
        </Stack>
        <ButtonBase onClick={() => {}}>
          <Typography fontSize={"14px"} fontWeight={400} color={"#18BA51"}>
            Бүгдийг харах{">"}
          </Typography>
        </ButtonBase>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        {food.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </Stack>
    </Stack>
  );
};
