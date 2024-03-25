import { InputBase, Stack, Typography } from "@mui/material";

export const TextInput = ({
  text,
  placeHolderText,
  setText,
  value,
}: {
  text: string;
  placeHolderText: string;
  setText: (_p: string) => void;
  value: string;
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
          setText(`${e.target.value}`);
        }}
      />
    </Stack>
  );
};

export const PasswordInput = ({
  text,
  placeHolderText,
  setPassword,
  value,
}: {
  text: string;
  placeHolderText: string;
  setPassword: (_p: string) => void;
  value: string;
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
          setPassword(`${e.target.value}`);
        }}
      />
    </Stack>
  );
};
