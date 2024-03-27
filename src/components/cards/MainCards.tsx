import { StarIcon } from "@/icons/StarIcon";
import { Box, Stack, Typography } from "@mui/material";

export const MainDishCard = () => {
  return (
    <Stack width="1200px" height="344px">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" justifyContent="center">
          <StarIcon />
          <Typography fontSize="22px" fontWeight="700">
            Амттан
          </Typography>
        </Stack>
        <Typography textAlign="center" color="#18BA51">
          Бүгдийг харах {">"}
        </Typography>
      </Stack>
      <Stack>
        <Stack>
          <Box
            width="282px"
            height="186px"
            borderRadius="16px"
            boxShadow="0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
            sx={{ backgroundImage: "URL('/Home/cardsPic/ice-cream.svg'" }}
          ></Box>
          <Typography fontSize="18px" fontWeight="800">
            Өглөөний хоол
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
