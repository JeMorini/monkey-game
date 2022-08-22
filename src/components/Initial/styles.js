import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #00000080;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  cursor: pointer;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 900px;
  height: 400px;
`;

export const Monkey = styled.img`
  width: 600px;
  height: 600px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.h1`
  font-size: 40px;
  color: #fff;
`;
