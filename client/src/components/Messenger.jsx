import { AppBar, Toolbar, styled, Box } from "@mui/material";
//components
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #111b21;
`;
const Header = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
  box-shadow: none;
`;
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
