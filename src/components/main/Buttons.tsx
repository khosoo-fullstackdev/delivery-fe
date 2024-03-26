import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export {
  SquareButton,
  FooterButton1,
  FooterButton2,
  FooterButton3,
  FooterButton4,
  FooterButton5,
  FooterButton6,
};

const SquareButton = () => {
  return <Button>Hello world</Button>;
};

const FooterButton1 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Нүүр
    </Button>
  );
};

const FooterButton2 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/contact")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Холбоо барих
    </Button>
  );
};

const FooterButton3 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/menu")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Хоолны цэс
    </Button>
  );
};

const FooterButton4 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/terms")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Үйлчилгээний нөхцөл
    </Button>
  );
};

const FooterButton5 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/delivery")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Хүргэлтийн бүс
    </Button>
  );
};

const FooterButton6 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/privacy")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Нууцлалын бодлого
    </Button>
  );
};