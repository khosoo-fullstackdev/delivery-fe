import { ButtonBase, Stack, Typography } from "@mui/material";
// import { Dispatch, SetStateAction } from "react";

type PropType = {
  food: {
    category: string;
    id: number;
    foodName: string;
    price: number;
    imagePath: string;
    ingredients: string;
    sale: number;
    // onClick?: (() => void | undefined) | undefined;
  };
};

// const close: Dispatch<SetStateAction<boolean>>;
// openModal<Dispatch<SetStateAction<boolean>>>;

export const FoodCard = ({ food }: PropType) => {
  const { foodName, price, imagePath, sale } = food;
  const salePrice = price - (price * sale) / 100;
  return (
    <ButtonBase>
      <Stack gap={"14px"}>
        <Stack
          width={"282px"}
          height={"186px"}
          borderRadius={"16px"}
          boxShadow={
            "0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
          }
          sx={{
            backgroundImage: `URL(${imagePath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          position={"relative"}
        >
          {sale > 0 ? (
            <Stack
              padding={"4px 16px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"16px"}
              border={"1px solid #FFF"}
              sx={{
                backgroundColor: "#18BA51",
                backdropFilter: "blur(50px)",
              }}
              position={"absolute"}
              top={"16px"}
              right={"16px"}
            >
              <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
                {sale}%
              </Typography>
            </Stack>
          ) : (
            <Stack></Stack>
          )}
        </Stack>
        <Stack width={"282px"} gap={"2px"}>
          <Stack alignItems={"flex-start"}>
            <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
              {foodName}
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={"16px"}>
            <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
              {salePrice}₮
            </Typography>
            {sale > 0 ? (
              <Typography
                fontSize={"18px"}
                fontWeight={400}
                color={"#272727"}
                sx={{ textDecoration: "line-through" }}
              >
                {price}₮
              </Typography>
            ) : (
              <Typography></Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};
