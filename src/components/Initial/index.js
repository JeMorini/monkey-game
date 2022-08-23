import logoMonkey from "../../assets/logoMonkey.png";
import logo from "../../assets/logo.gif";
import React from "react";
import { Container, Logo, ContainerLogo, Monkey, Message } from "./styles";

function Initial() {
  return (
    <Container>
      <ContainerLogo>
        <Monkey src={logo} />
        <Logo src={logoMonkey} />
      </ContainerLogo>
      <Message>Clique para começar</Message>
    </Container>
  );
}

export default Initial;
