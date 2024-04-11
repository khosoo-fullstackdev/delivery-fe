import CodeCheck from "@/components/forgot-password/CodeCheck";
import EmailCheck from "@/components/forgot-password/EmailCheck";
import NewPassword from "@/components/forgot-password/NewPassword";

import { Container, Stack } from "@mui/material";
import { useState } from "react";

const ResetPass = () => {
  const [step, setStep] = useState(0);

  return (
    <Stack paddingTop="144px" paddingBottom="131.5px">
      <Container maxWidth="lg">
        <EmailCheck step={step} setStep={setStep} />
        <CodeCheck step={step} setStep={setStep} />
        <NewPassword step={step} />
      </Container>
    </Stack>
  );
};
export default ResetPass;
