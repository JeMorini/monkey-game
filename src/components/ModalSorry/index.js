import React from "react";
import sorry from "../../assets/sorry.gif";
import { Container, ContainerLogo, Message, Gif, Block } from "./styles";

function ModalSorry() {
  return (
    <Container>
      <Block>
        <ContainerLogo>
          <Gif src={sorry} />
        </ContainerLogo>
        <Message>
          Sua tela não tem as dimensões necessárias para rodar o jogo
        </Message>
      </Block>
    </Container>
  );
}

export default ModalSorry;
