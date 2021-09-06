import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  align-self: flex-end;
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const CardAvatar = () => {
  return <Avatar src="https://picsum.photos/id/237/200/300" />;
};

export default CardAvatar;