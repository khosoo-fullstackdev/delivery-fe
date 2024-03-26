import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";

export const HomeTop = () => {
  return (
    <Stack
      width="100%"
      height="788px"
      alignItems="center"
      paddingBottom="122px"
      bgcolor="#18BA51"
      sx={{ backgroundImage: `URL('/Group552.png')` }}
    >
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <Stack justifyContent="center" height="788px" width="50%">
          <Stack justifyContent="start">
            <Typography
              justifySelf="start"
              width="384px"
              height="115px"
              color="#FFF"
              fontSize="55px"
              fontWeight="600"
              letterSpacing="0.55px"
              lineHeight="90%"
            >
              Pinecone Food delivery
            </Typography>
          </Stack>
          <Box borderBottom="1px solid" borderColor="white" width="384px"></Box>
          <Stack>
            <Typography
              width="384px"
              height="64px"
              color="#FFF"
              fontSize="22px"
              fontWeight="700"
              letterSpacing="0.22px"
              lineHeight="120%"
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          position="relative"
          alignItems="center"
          justifyContent="center"
          width="50%"
        >
          <Stack position="absolute" width="443px" height="438px" right="145px">
            <Image
              src="/Home/image13.svg"
              alt="image13"
              width="443"
              height="438"
            />
          </Stack>
          <Stack
            position="absolute"
            width="313px"
            height="313px"
            right="0"
            zIndex="2"
            top="283px"
          >
            <Image
              src="/Home/image14.svg"
              alt="image14"
              width="313"
              height="313"
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
