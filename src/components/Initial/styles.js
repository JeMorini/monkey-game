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
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 800px;
  height: 400px;
  @media (max-width: 1550px) {
    width: 600px;
    height: 300px;
  }
  @media (max-width: 1250px) {
    width: 500px;
    height: 250px;
  }
`;

export const Monkey = styled.img`
  width: 600px;
  height: 600px;
  @media (max-width: 1550px) {
    width: 500px;
    height: 500px;
  }
  @media (max-width: 1250px) {
    width: 300px;
    height: 300px;
  }
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
