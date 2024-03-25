import { Stack } from "@mui/material";
import { HomeTop } from "./HomeTop";
import { HomeAd } from "./HomeAd";
import { HomeCards } from "./HomeCards";

const HomePage = () => {
  return (
    <Stack width={"100%"} justifyContent={"center"} alignContent={"center"}>
      <HomeTop />
      <HomeAd />
      <HomeCards />
    </Stack>
  );
};
export default HomePage;
