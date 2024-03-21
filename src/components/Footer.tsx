import { Container, Stack, Typography } from "@mui/material";
import { FooterLogo } from "../../public/Icons";
const text = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцын бодлого",
];

const Footer = () => {
  return (
    <Stack bgcolor="#18BA51" justifyContent="center" alignItems="center">
      <Container maxWidth="xl">
        <Stack
          width="1200px"
          height="545px"
          justifyContent="center"
          alignItems="center"
          gap="40px"
          margin="auto"
        >
          <Stack direction={"row"} gap="8px" alignItems="center">
            <FooterLogo />
            <Typography
              color="white"
              fontSize="20px"
              fontWeight="700"
              fontStyle="normal"
              lineHeight="normal"
            >
              Food Delivery
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyItems="space-between"
            alignItems="center"
          >
            {text.map((a) => (
              <Typography
                key={a}
                fontWeight="590"
                fontSize="16px"
                fontStyle="normal"
                color="white"
              >
                {a}
              </Typography>
            ))}
          </Stack>
          <Stack></Stack>
          <Stack></Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Footer;
