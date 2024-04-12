import CodeCheck from "@/components/forgot-password/CodeCheck";
import EmailCheck from "@/components/forgot-password/EmailCheck";
import NewPassword from "@/components/forgot-password/NewPassword";

import { Container, Stack } from "@mui/material";
import { useState } from "react";

const ResetPass = () => {
  const [step, setStep] = useState(0);

  const BE_URL = "https://delivery-be.vercel.app/api/resetPass";
  const [userEmail, setUserEmail] = useState("");

  const handleResetPassword = async () => {
    const reset = {
      email: userEmail,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reset),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    console.log(FETCHED_JSON);
    if (FETCHED_JSON.message == "Success: email was sent") {
      setStep(1);
    } else {
      alert("email was not found");
    }
  };

  return (
    <Stack paddingTop="144px" paddingBottom="131.5px">
      <Container maxWidth="lg">
        <EmailCheck
          step={step}
          setFunction={setUserEmail}
          handler={handleResetPassword}
          email={userEmail}
        />
        <CodeCheck step={step} setStep={setStep} email={userEmail} />
        <NewPassword step={step} email={userEmail} />
      </Container>
    </Stack>
  );
};
export default ResetPass;
