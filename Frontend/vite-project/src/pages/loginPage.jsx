import { Container, Box, TextField, Button, Typography } from "@mui/material";
import theme from "../../configs/colors";

export default function LoginPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, // Adjust width responsively
          border: 2,
          padding: { xs: 2, sm: 3, md: 4 }, // Adjust padding responsively
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" textAlign={"center"} marginBottom={2}>
          Welcome back
        </Typography>
        <Typography
          variant="h6"
          textAlign={"center"}
          marginBottom={3}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} // Font size for smaller screens
        >
          Enter your details
        </Typography>
        <TextField
          label="username"
          sx={{ marginBottom: 2, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <TextField
          label="password"
          sx={{ marginBottom: 2, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <Button
          sx={{
            bgcolor: theme.palette.primary.main,
            width: { xs: "100%", sm: "250px" },
            color: "white",
            marginBottom: 2,
          }}
        >
          Login
        </Button>
        <Typography variant="subtitle1">
          Don&apos;t have an account yet? Register
        </Typography>
      </Box>
    </Container>
  );
}
