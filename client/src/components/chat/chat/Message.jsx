import { useContext } from "react";

import { Box, styled, Typography } from "@mui/material";
import { formatDate } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";

const Own = styled(Box)`
  background: #d9fdd3;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 8px;
  word-break: break-word;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  margin-right: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 8px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #667781;
  word-break: keep-all;
  margin-top: 6px;
  margin-top: auto;
`;
export const Message = ({ message }) => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Own>
      ) : (
        <Wrapper>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
};

export default Message;
