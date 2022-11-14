import { useEffect } from "react";

import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
import { uploadFile } from "../../../service/api";
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
const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        console.log(response);
        setImage(response.data);
      }
    };
    getImage();
  }, [file]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="fileInput"
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
