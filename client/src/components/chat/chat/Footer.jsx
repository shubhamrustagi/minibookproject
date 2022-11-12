import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
const Container = styled(Box)`
  height: 55px;
  background: #f0f2f5;
  display: flex;
  wifth: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #54656f;
  }
`;
const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 6px;
  width: calc(94% - 100px);
`;
// need to change color of placeholder here
const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(45deg) scaleX(-1);
`;
// need to change color of placeholder here
const Footer = () => {
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <ClipIcon />
      <Search>
        <InputField placeholder="Type a message" />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
