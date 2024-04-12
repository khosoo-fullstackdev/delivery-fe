import { Button, Stack, Typography } from "@mui/material";
import { TextInput } from "../main/Input";
import { Dispatch, SetStateAction } from "react";

const EmailCheck = ({
  step,
  handler,
  setFunction,
  email,
}: {
  step: number;
  handler: () => {};
  setFunction: Dispatch<SetStateAction<string>>;
  email: string;
}) => {
  return (
    <Stack
      display={step == 0 ? "flex" : "none"}
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
      <TextInput
        text="Имэйл"
        value={email}
        placeHolderText="Имэйл-ээ оруулна уу"
        setFunction={setFunction}
      ></TextInput>
      <Button
        onClick={() => {
          handler();
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
export default EmailCheck;
