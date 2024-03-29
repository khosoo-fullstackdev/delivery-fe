import { Menu } from "@/components/menu/Menu";
import { Container, Stack } from "@mui/material";

const menu = () => {
  return (
    <Stack width="inherit" paddingTop="70.5px" justifyContent="center">
      <Container maxWidth="lg">
        <Menu />
      </Container>
    </Stack>
  );
};
export default menu;
