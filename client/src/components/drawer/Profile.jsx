import { useContext } from "react";

import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #008069;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #3b4a54;
  }
`;

const DescriptionContainer = styled(Box)`
  padding: 15px 20px 20px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
    font-family: inherit;
  }
`;
const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>
          Internal honesty can be the hardest pill to swallow
        </Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
