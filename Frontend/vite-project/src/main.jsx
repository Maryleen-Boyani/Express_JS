import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Navbar from "./components/Navbar.jsx";
// import App from "./App.jsx";
import LoginPage from "./pages/loginPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage/>
    {/* <Navbar />
    <App /> */}
  </StrictMode>
);
