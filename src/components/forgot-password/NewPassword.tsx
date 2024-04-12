import { Button, Stack, Typography } from "@mui/material";
import { PasswordInput } from "../main/Input";
import { useState } from "react";
import { useRouter } from "next/router";

const NewPassword = ({ step, email }: { step: number; email: string }) => {
  const router = useRouter();
  const BE_URL = "https://delivery-be.vercel.app/api/newPass";

  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const request = () => {
    if (newPassword == rePassword) {
      const handleSignupUser = async () => {
        const login = {
          password: newPassword,
          email: email,
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

        if (FETCHED_JSON.message == "New password set") {
          router.push("/signin");
        } else {
          alert("problem");
        }
      };
      return handleSignupUser;
    } else alert("Нууц үг ижил биш байна");
  };

  return (
    <Stack
      display={step == 2 ? "flex" : "none"}
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
        setFunction={setNewPassword}
        value=""
      />
      <PasswordInput
        text="Нууц үг сэргээх код"
        placeHolderText=""
        setFunction={setRePassword}
        value=""
      />
      <Button
        onClick={request}
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
export default NewPassword;
