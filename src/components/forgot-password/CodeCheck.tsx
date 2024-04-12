import { Button, Stack, Typography } from "@mui/material";
import { PasswordInput } from "../main/Input";
import { Dispatch, SetStateAction, useState } from "react";

const CodeCheck = ({
  step,
  setStep,
  email,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  email: string;
}) => {
  const BE_URL = "https://delivery-be.vercel.app/api/verify";
  const [code, setCode] = useState("");

  const handleVerifyCode = async () => {
    const check = {
      password: code,
      email: email,
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

    if (FETCHED_JSON.message == "code checked") {
      setStep(2);
    } else {
      alert("problem");
    }
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
      <Typography fontSize="20px" fontWeight="490">
        Таны {email} имэйл хаягруу код илгээлээ
      </Typography>
      <PasswordInput
        text="Нууц үг сэргээх код"
        placeHolderText="Нууц кодоо хийнэ үү"
        setFunction={setCode}
        value={code}
      />

      <Button
        onClick={() => {
          handleVerifyCode();
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
