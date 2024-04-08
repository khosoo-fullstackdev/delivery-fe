import { Button, Link, Stack, Typography } from "@mui/material";
import { PasswordInput, TextInput } from "../main/Input";
import { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const BE_URL = "http://localhost:4000/register";

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");
  const router = useRouter();
  const request = () => {
    if (userPassword == userRePassword) {
      const handleSignupUser = async () => {
        const login = {
          name: userName,
          email: userEmail,
          password: userPassword,
          address: userAddress,
        };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        };
        const FETCHED_DATA = await fetch(BE_URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();

        const userToken = FETCHED_JSON.token;
        localStorage.setItem("userToken", userToken);

        if (FETCHED_JSON.message == "user created successfully") {
          router.push("/");
        } else {
          alert("problem");
        }
      };
      return handleSignupUser;
    } else alert("Нууц үг ижл биш байна");
  };

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
          text={"Нэр"}
          placeHolderText={"Имэйл хаягаа оруулна уу"}
          setFunction={setUserName}
          value={userName}
        />
        <TextInput
          text={"И-мэйл"}
          placeHolderText={"Имэйл хаягаа оруулна уу"}
          setFunction={setUserEmail}
          value={userEmail}
        />
        <TextInput
          text={"Хаяг"}
          placeHolderText={"Хаяг"}
          setFunction={setUserAddress}
          value={userAddress}
        />
        <PasswordInput
          text={"Нууц үг"}
          placeHolderText={"Нууц үг"}
          setUserPassword={setUserPassword}
          value={userPassword}
        />
        <PasswordInput
          text={"Нууц үгээ давтана уу"}
          placeHolderText={"Нууц үгээ давтана уу"}
          setUserPassword={setUserRePassword}
          value={userRePassword}
        />
        <Link alignSelf="end" color="#000000" underline="hover">
          <Typography fontSize={"14px"} fontWeight={400}>
            Нууц үг сэргээх
          </Typography>
        </Link>
      </Stack>
      <Stack gap="32px" width="inherit" alignItems="center">
        <Button
          onClick={request}
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
