import { Button, Link, Stack, Typography } from "@mui/material";
import { PasswordInput, TextInput } from "./Input";
import { useState } from "react";

const SignIn = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      margin="auto"
      marginTop="111px"
      justifyContent="center"
      alignItems="center"
      width="384px"
      gap="48px"
      marginBottom="75px"
    >
      <Typography fontSize="28px" fontWeight="700">
        Нэвтрэх
      </Typography>
      <Stack width="inherit" gap="16px">
        <TextInput
          text={"Имэйл"}
          placeHolderText={"Имэйл хаягаа оруулна уу"}
          setText={setText}
          value={text}
        />
        <PasswordInput
          text={"Нууц үг"}
          placeHolderText={"Нууц үг"}
          setPassword={setPassword}
          value={password}
        />
        <Link alignSelf="end" color="#000000" underline="hover">
          <Typography fontSize={"14px"} fontWeight={400}>
            Нууц үг сэргээх
          </Typography>
        </Link>
      </Stack>
      <Stack gap="32px" width="inherit" alignItems="center">
        <Button
          sx={{
            width: "inherit",
            height: "48px",
            padding: "8px 16px",
            color: "black",
            textTransform: "none",
          }}
        >
          Нэвтрэх
        </Button>
        <Typography fontSize="14px" fontWeight={400}>
          Эсвэл
        </Typography>
        <Button
          sx={{
            width: "inherit",
            height: "48px",
            padding: "8px 16px",
            border: "1px solid #18BA51",
            borderRadius: "4px",
            color: "black",
            textTransform: "none",
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
export default SignIn;
