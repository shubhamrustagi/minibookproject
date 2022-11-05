import { Box } from "@mui/system";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Header = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box>
        <img src={account.picture} alt="dp" />
      </Box>
    </>
  );
};

export default Header;
