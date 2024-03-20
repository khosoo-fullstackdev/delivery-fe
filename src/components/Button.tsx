import * as React from "react";
import Button from "@mui/material/Button";

const ButtonUsage = ({
  variant,
}: {
  variant: "outlined" | "contained" | "text";
}) => {
  return <Button variant={variant}>Hello world</Button>;
};
export default ButtonUsage;
