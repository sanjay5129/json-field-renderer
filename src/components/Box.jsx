import Box from "@mui/material/Box";

export default function BoxComponent({ children, ...rest }) {
  return <Box sx={rest}>{children}</Box>;
}
