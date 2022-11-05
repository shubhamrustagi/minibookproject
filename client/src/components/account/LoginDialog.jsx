import { Dialog, Box } from "@mui/material";

const dialogStyle = {
  height: "96%",
  marginTop: "13.5%",
  width: "55%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "none",
};
const LoginDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
