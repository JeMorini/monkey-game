import logoMonkey from "../../assets/logoMonkey.png";
import logo from "../../assets/logo.gif";
import winnerGif from "../../assets/winner.gif";
import loserGif from "../../assets/loser.gif";
import React, { useCallback, useEffect, useState, useRef } from "react";
import sorry from "../../assets/sorry.gif";
import {
  Container,
  Logo,
  ContainerLogo,
  Monkey,
  Message,
  Gif,
  Block,
  Button,
} from "./styles";

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
