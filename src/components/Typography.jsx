import { Typography } from "@mui/material";

export default function TypographyComponent({ variant, text }) {
  return (<Typography variant={variant}>
    {text}
  </Typography>
)}