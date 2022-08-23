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
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
