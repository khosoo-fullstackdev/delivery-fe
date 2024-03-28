import { Stack } from "@mui/material";
import { HomeTop } from "./HomeTop";
import { HomeAd } from "./HomeAd";
import { HomeCards } from "./HomeCards";

const HomePage = () => {
  return (
    <Stack
      margin="auto"
      justifyContent="center"
      alignContent="center"
      paddingTop="68.5px"
    >
      <HomeTop />
      <HomeAd />
      <HomeCards />
    </Stack>
  );
};
export default HomePage;
