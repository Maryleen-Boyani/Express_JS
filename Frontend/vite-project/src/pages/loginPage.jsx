import { Container, Box, TextField, Button, Typography } from "@mui/material";
import theme from "../../configs/colors";
import SwitchIcon from "../components/switchIcon";
export default function LoginPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        gap: 4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: theme.palette.primary.main,
      }}
    >
      {/*login side*/}
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, // Adjust width responsively

          borderRadius: 8,
          padding: { xs: 2, sm: 3, md: 4 }, // Adjust padding responsively
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "70%",
        }}
      >
        <Typography variant="h4" textAlign={"center"} marginBottom={2}>
          Welcome back
        </Typography>
        <Typography
          variant="h4"
          textAlign={"center"}
          marginBottom={3}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} // Font size for smaller screens
        >
          Enter your details
        </Typography>
        <TextField
          label="Email Address"
          sx={{ marginBottom: 2, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <TextField
          label="Password"
          sx={{ marginBottom: 4, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <Typography>
          <SwitchIcon />
          Remember Me
        </Typography>

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
      </Box>
      {/*----------------Registration page-----------*/}
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, // Adjust width responsively

          borderRadius: 8,
          padding: { xs: 2, sm: 3, md: 4 }, // Adjust padding responsively
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "70%",
        }}
      >
        <Typography variant="h4" textAlign={"center"} marginBottom={2}>
          New to YourChatApp?
        </Typography>
        <Typography
          variant="h4"
          textAlign={"center"}
          marginBottom={3}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} // Font size for smaller screens
        >
          Register
        </Typography>
        <TextField
          label="First Name"
          sx={{ marginBottom: 2, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <TextField
          label="Second Name"
          sx={{ marginBottom: 2, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <TextField
          label="Email Address"
          sx={{ marginBottom: 2, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <TextField
          label="Password"
          sx={{ marginBottom: 4, width: { xs: "100%", sm: "90%", md: "80%" } }}
        />
        <Button
          sx={{
            bgcolor: theme.palette.primary.main,
            width: { xs: "100%", sm: "250px" },
            color: "white",
            marginBottom: 2,
          }}
        >
          REGISTER
        </Button>
        {/* <Typography variant="subtitle1">
          Don&apos;t have an account yet? Register
        </Typography> */}
      </Box>
    </Container>
  );
}
