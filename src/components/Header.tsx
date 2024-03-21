import { Stack } from "@mui/material";
import { LogoIcon, BasketIcon, PersonIcon } from "../../public/Icons";
import { Typography, Box, Container } from "@mui/material";
import Search from "./Search";
const Header = () => {
  return (
    <Box position="static">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <LogoIcon />
            <Typography px={2} py={4} fontSize="14px" fontWeight={700}>
              НҮҮР
            </Typography>
            <Typography px={2} py={4} fontSize="14px" fontWeight={700}>
              ХООЛНЫ ЦЭС
            </Typography>
            <Typography px={2} py={4} fontSize="14px" fontWeight={700}>
              ХҮРГЭЛТИЙН БҮС
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <Search />
            <Stack direction="row" alignItems="center" gap={1} px={2} py={2}>
              <BasketIcon />
              <Typography fontSize="14px" fontWeight={700}>
                Сагс
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} px={2} py={2}>
              <PersonIcon />
              <Typography fontSize="14px" fontWeight={700}>
                Нэвтрэх
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default Header;
