import React, { useState } from "react";
import { Button } from "@mui/material";
import { NetworkModal, WalletModal } from "./Modal";
import useAuth from "../hooks/useAuth";

const ConnectWalletButton = (props) => {
  const { login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState<string | null>(null);

  const handleNetwork = (value: string) => {
    console.log('network', value);
    setOpen(false);
    setNetwork(value);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props}>
        Connect Wallet
      </Button>
      {open && <NetworkModal setNetwork={handleNetwork} />}
      {network && <WalletModal login={login} setNetwork={handleNetwork} />}
    </>
  );
};

export default ConnectWalletButton;