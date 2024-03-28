import { Container } from "@mui/material";
import { MainDishCard } from "../cards/MainCards";

export const HomeCards = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        gap: "80px",
      }}
    >
      <MainDishCard />
    </Container>
  );
};
