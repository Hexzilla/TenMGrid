import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, IconButton } from "@mui/material";
import ThemeSwitch from "../ThemeSwitch";
import { useThemeManager } from "../../state/user/hooks";
import "./style.css";

export default function Header() {
  const [isDark, toggleTheme] = useThemeManager();
  console.log('isDark', isDark)

  return (
    <AppBar position="fixed" color="secondary" style={{ padding: "0 20px" }}>
      <Toolbar disableGutters={true} className="toolbarRoot">
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          className="menuButton"
        ></IconButton>
        <div className="menubar">
          <Link to="/" className="menuItem">
            Home
          </Link>
          <Link to="/help" className="menuItem">
            How it works
          </Link>
          <Link to="/buyers" className="menuItem">
            Buyers
          </Link>
          <Link to="/faq" className="menuItem">
            FAQ
          </Link>
          <Link to="/news" className="menuItem">
            News
          </Link>
          <Link to="/contact" className="menuItem">
            Contact
          </Link>
          <Link to="/login" className="menuItem">
            Login
          </Link>
          <ThemeSwitch checked={isDark} onChange={toggleTheme}></ThemeSwitch>
          <Button variant="contained" className="connectButton">
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
