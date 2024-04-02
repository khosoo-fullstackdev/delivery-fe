import { Button, Link, Stack, Typography } from "@mui/material";
import { PasswordInput, TextInput } from "../main/Input";
import { useState } from "react";
// import { useRouter } from "next/router";

const Signup = () => {
  // const BE_URL = "http://localhost:4000/signin";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const router = useRouter();

  // const handleLoginUser = async () => {
  //   const login = {
  //     email: userEmail,
  //     password: userPassword,
  //   };
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(login),
  //   };
  //   const FETCHED_DATA = await fetch(BE_URL, options);
  //   const FETCHED_JSON = await FETCHED_DATA.json();

  //   if (FETCHED_JSON == "true") {
  //     router.push("/");
  //   } else {
  //     alert("Email or password is incorrect");
  //   }
  // };
  return (
    <Stack
      margin="auto"
      paddingTop="179.5px"
      justifyContent="center"
      alignItems="center"
      width="384px"
      gap="48px"
      paddingBottom="75px"
    >
      <Typography fontSize="28px" fontWeight="700">
        Нэвтрэх
      </Typography>
      <Stack width="inherit" gap="16px">
        <TextInput
          text={"Имэйл"}
          placeHolderText={"Имэйл хаягаа оруулна уу"}
          setUserEmail={setUserEmail}
          value={userEmail}
        />
        <PasswordInput
          text={"Нууц үг"}
          placeHolderText={"Нууц үг"}
          setUserPassword={setUserPassword}
          value={userPassword}
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
export default Signup;
