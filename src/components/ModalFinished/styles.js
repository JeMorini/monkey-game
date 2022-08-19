import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #00000080;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  cursor: pointer;
  z-index: 10000000;
`;

export const Logo = styled.img`
  width: 1000px;
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
  color: #000;
`;

export const Gif = styled.img`
  width: 200px;
  height: 200px;
`;

export const Block = styled.div`
  width: 50%;
  height: 60%;
  background-color: white;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.div`
  width: 50%;
  height: 60px;
  background-color: green;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
