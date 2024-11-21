import { Box, Typography } from "@mui/material";
import theme from "../../configs/colors";
export default function FooterSection() {
  return (
    <Box sx={{ marginTop: 0, marginBottom: 4 }}>
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{ color: theme.palette.secondary.main }}
      >
        YourChatApp, for students by students
      </Typography>
    </Box>
  );
}
