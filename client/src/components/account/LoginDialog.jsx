import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data";

import { GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 28px;
  color: #41525d;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #3b4a54;
  }
`;
const dialogStyle = {
  height: "96%",
  marginTop: "13.5%",
  width: "47%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};
const LoginDialog = () => {
  const onLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
  };

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select Whatsapp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(50%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
