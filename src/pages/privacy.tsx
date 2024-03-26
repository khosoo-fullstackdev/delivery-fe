import { StarIcon } from "@/icons/StarIcon";
import { Container, Stack, Typography } from "@mui/material";

const privacy = () => {
  return (
    <Stack>
      <Container maxWidth="lg">
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
      </Container>
    </Stack>
  );
};
export default privacy;
