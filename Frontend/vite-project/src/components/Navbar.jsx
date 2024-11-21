import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { AppBar, Typography } from "@mui/material";
import theme from "../../configs/colors";
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      {/* AppBar for normal view */}
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            YourChatApp
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <div style={{ width: 250, padding: 20 }}>
          <Typography variant="h6">YourChatApp</Typography>
          <Button onClick={toggleDrawer} color="primary">
            Close
          </Button>
          <div style={{ marginTop: 20 }}>
            <Button fullWidth color="primary" variant="contained">
              Login
            </Button>
            <Button
              fullWidth
              color="secondary"
              variant="contained"
              style={{ marginTop: 10 }}
            >
              Register
            </Button>
          </div>
        </div>
      </Drawer>

      {/* Main content */}
    </div>
  );
};

export default Navbar;
