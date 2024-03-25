import { StarIcon } from "@/icons/StarIcon";
import { Stack, Typography } from "@mui/material";

export const AppetizerCard = () => {
  return (
    <Stack width="1250px">
      <Stack direction="row">
        <Stack direction="row" alignItems="center" justifyContent="center">
          <StarIcon />
          <Typography fontSize="22px" fontWeight="700">
            Амттан
          </Typography>
        </Stack>
        <Typography textAlign="center">Бүгдийг харах {">"}</Typography>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
};
