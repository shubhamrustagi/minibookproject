import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

//components
import Profile from "./Profile";
const Header = styled(Box)`
  background: #008069;
  height: 106px;
  color: #ffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #f0f2f5;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 19px;
  font-family: inherit;
`;
const drawerStyle = {
  left: 163,
  top: 19,
  height: "95%",
  width: "23.5%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
      hideBackdrop={true}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
