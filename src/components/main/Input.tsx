import { InputBase, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const TextInput = ({
  text,
  value,
  placeHolderText,
  setUserEmail,
}: {
  text: string;
  value: string;
  placeHolderText: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack width="inherit" gap={"4px"}>
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>

      <InputBase
        value={value}
        type="text"
        sx={{
          backgroundColor: "#F7F7F8",
          border: "1px solid #ECEDF0",
          height: "48px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        placeholder={placeHolderText}
        onChange={(e) => {
          setUserEmail(`${e.target.value}`);
        }}
      />
    </Stack>
  );
};

export const PasswordInput = ({
  text,
  placeHolderText,
  setUserPassword,
  value,
}: {
  text: string;
  placeHolderText: string;
  value: string;
  setUserPassword: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack gap={"4px"} width="inherit">
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <InputBase
        value={value}
        type="password"
        sx={{
          backgroundColor: "#F7F7F8",
          border: "1px solid #ECEDF0",
          height: "48px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        placeholder={placeHolderText}
        onChange={(e) => {
          setUserPassword(`${e.target.value}`);
        }}
      />
    </Stack>
  );
};
