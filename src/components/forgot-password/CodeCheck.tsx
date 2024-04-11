import { Button, Stack, Typography } from "@mui/material";
import { PasswordInput } from "../main/Input";
import { Dispatch, SetStateAction, useState } from "react";

const CodeCheck = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const BE_URL = "http://localhost:4000/api/verify";
  const [code, setCode] = useState("");

  const handleVerifyCode = async () => {
    const check = {
      code: code,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(check),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };

  return (
    <Stack
      display={step == 1 ? "flex" : "none"}
      width="384px"
      height="246px"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      gap="48px"
    >
      <Typography fontSize="28px" fontWeight="700">
        Нууц үг сэргээх
      </Typography>
      <PasswordInput
        text="Нууц үг сэргээх код"
        placeHolderText=""
        setFunction={setCode}
        value=""
      />

      <Button
        onClick={() => {
          handleVerifyCode();
          setStep(2);
        }}
        sx={{
          width: "384px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          background: "#EEEFF2",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        Үргэлжлүүлэх
      </Button>
    </Stack>
  );
};
export default CodeCheck;
