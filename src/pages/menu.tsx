import { Container, Stack } from "@mui/material";

const menu = () => {
  return (
    <Stack width="inherit" paddingY="32px">
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          textAlign="center"
        ></Stack>
        <Stack></Stack>
      </Container>
    </Stack>
  );
};
export default menu;
