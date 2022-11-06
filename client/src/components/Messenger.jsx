import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
//components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #f0f2f5;
`;
const ChatComponent = styled(Box)`
  height: 100vh;
  background: rgb(231, 228, 223);
  background: linear-gradient(
    180deg,
    rgba(231, 228, 223, 1) 0%,
    rgba(209, 215, 219, 1) 100%
  );
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
  box-shadow: none;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);

  return account ? (
    <>
      <ChatComponent>
        <Header>
          <Toolbar></Toolbar>
        </Header>
        <ChatDialog />
      </ChatComponent>
    </>
  ) : (
    <>
      <Component>
        <LoginHeader>
          <Toolbar></Toolbar>
        </LoginHeader>
        <LoginDialog />
      </Component>
    </>
  );
};

export default Messenger;
