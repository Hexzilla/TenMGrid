import { Button, DialogContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModalContainer from "./ModalContainer";
import ModalHeader from "./ModalHeader";
import connectors from "./config";

const WalletButton = styled(Button)(({ theme }) => ({
  borderRadius: "16px",
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 28px",
  margin: "12px 0",
}));

const WalletConnector = ({ title, icon }) => {
  return (
    <WalletButton variant="outlined">
      <Typography variant="body1">{title}</Typography>
      {icon}
    </WalletButton>
  );
};

const WalletModal = ({ setNetwork }) => {
  return (
    <>
      <ModalContainer
        onClose={() => setNetwork(null)}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <ModalHeader id="select-network-title" onClose={() => setNetwork(null)}>
          Connect to a wallet
        </ModalHeader>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "420px",
            maxWidth: "100%",
          }}
        >
          {connectors.map((it, index) => {
            return (
              <WalletConnector
                key={index}
                title={it.title}
                icon={<it.icon />}
              />
            );
          })}
        </DialogContent>
      </ModalContainer>
    </>
  );
};

export default WalletModal;
