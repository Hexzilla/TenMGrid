import React, { useState } from "react";
import { Button } from "@mui/material";
import { NetworkModal, WalletModal } from "./Modal";

const ConnectWalletButton = (props) => {
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
      {network && <WalletModal setNetwork={handleNetwork} />}
    </>
  );
};

export default ConnectWalletButton;
