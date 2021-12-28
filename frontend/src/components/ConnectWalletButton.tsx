import React, { useState } from "react";
import { Button } from "@mui/material";
import { NetworkModal, WalletModal } from "./Modal";
import useAuth from "../hooks/useAuth";

const ConnectWalletButton = (props) => {
  const {login, logout} = useAuth();
  const [stage, setStage] = useState(0);
  const [network, setNetwork] = useState<string | null>(null);

  const handleNetwork = (value: string) => {
    console.log('handleNetwork', value)
    value ? setStage(2) : setStage(0);
    setNetwork(value);
  };

  const hanldeLogin = (connectorId) => {
    console.log('handleLogin', network, connectorId)
    setStage(0);
    login(network, connectorId)
  }

  return (
    <>
      <Button onClick={() => setStage(1)} {...props}>
        Connect Wallet
      </Button>
      {stage === 1 && <NetworkModal setNetwork={handleNetwork} />}
      {stage === 2 && <WalletModal login={hanldeLogin} onClose={() => setStage(0)} />}
    </>
  );
};

export default ConnectWalletButton;
