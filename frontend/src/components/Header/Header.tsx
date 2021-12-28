import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Link as MatLink,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import ThemeSwitch from "../ThemeSwitch";
import ConnectWalletButton from "../ConnectWalletButton";
import { useThemeManager } from "../../state/user/hooks";
import "./style.css";

const LinkButton = ({ to, label }: { to: string; label: string }) => {
  return (
    <MatLink
      component={RouterLink}
      to={to}
      underline="none"
      variant="h6"
      color="white"
      sx={{
        m: 1.5,
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {label}
    </MatLink>
  );
};

export default function Header() {
  const theme = useTheme();
  const [isDark, toggleTheme] = useThemeManager();
  console.log("theme", theme);

  return (
    <AppBar position="fixed" style={{ padding: "0 20px" }}>
      <Toolbar disableGutters={true} className="toolbarRoot">
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          className="menuButton"
        ></IconButton>
        <div className="menubar">
          <LinkButton to="/" label="Home" />
          <LinkButton to="/help" label="How it works" />
          <LinkButton to="/buyers" label="Buyers" />
          <LinkButton to="/faq" label="FAQ" />
          <LinkButton to="/news" label="News" />
          <LinkButton to="/contact" label="Contact" />
          <LinkButton to="/login" label="Login" />
          <ThemeSwitch checked={isDark} onChange={toggleTheme}></ThemeSwitch>
          <ConnectWalletButton variant="contained" className="connectButton" />
          {/* <Button variant="contained" className="connectButton">
            Connect Wallet
          </Button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}
