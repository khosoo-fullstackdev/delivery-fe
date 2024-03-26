import { Container, Stack } from "@mui/material";
import { AppetizerCard } from "../cards/AppetizerCard";
import { DiscountCard } from "../cards/DiscountCard";
import { MainDishCard } from "../cards/MainDishCard";
import { DesertCard } from "../cards/DesertCard";

export const HomeCards = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ gap: "80px", alignItems: "center", justifyContent: "center" }}
    >
      <Stack>
        <DiscountCard />
        <MainDishCard />
        <AppetizerCard />
        <DesertCard />
      </Stack>
    </Container>
  );
};
