import { Container, Stack } from "@mui/material";
import { AppetizerCard } from "../cards/AppetizerCard";

export const HomeCards = () => {
  return (
    <Stack>
      <Container maxWidth="lg" sx={{ gap: "80px" }}>
        <AppetizerCard />
        <Stack></Stack>
        <Stack></Stack>
        <Stack></Stack>
      </Container>
    </Stack>
  );
};
