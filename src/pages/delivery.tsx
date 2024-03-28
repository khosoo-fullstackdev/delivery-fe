import { StarIcon } from "@/icons/StarIcon";
import { Container, Stack, Typography } from "@mui/material";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/main/Map"), { ssr: false });

const Delivery = () => {
  return (
    <Stack paddingTop="129.5px">
      <Container maxWidth="lg">
        <Stack>
          <Map />
          <Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="start"
              textAlign="center"
              paddingY="16px"
            >
              <StarIcon />
              <Typography fontSize="22px" fontWeight="700">
                Хүргэлтийн бүс дэх хаягууд
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            height="388px"
          >
            <Stack
              width="540px"
              height="340px"
              padding="24px"
              borderRadius="16px"
              boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.05)"
            >
              <Typography borderBottom="1px solid #18BA51">А бүс</Typography>
            </Stack>
            <Stack
              width="540px"
              height="340px"
              padding="24px"
              borderRadius="16px"
              boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.05)"
            >
              <Typography fontSize="20px" fontWeight="590px">
                Б бүс
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Delivery;
