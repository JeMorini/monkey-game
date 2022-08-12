import styled from "styled-components";

export const Banana = styled.img`
  display: ${(props) => props.display};
  width: 100px;
  height: 100px;
  top: 0px;
  position: absolute;
  transition: top 2s;
  ${(props) =>
    props.down
      ? `top: 85%;
  transition: top 0.7s;
      `
      : `top: 0; 
  transition: top 0s;
  `}
`;
