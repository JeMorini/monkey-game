import logoMonkey from "../../assets/logoMonkey.png";
import logo from "../../assets/logo.gif";
import winnerGif from "../../assets/winner.gif";
import loserGif from "../../assets/loser.gif";
import React, { useCallback, useEffect, useState, useRef } from "react";
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

function ModalFinished({ winner, restart }) {
  return (
    <Container>
      {winner ? (
        <Block>
          <ContainerLogo>
            <Gif src={winnerGif} />
          </ContainerLogo>
          <Message>Você venceu</Message>
          <Button onClick={() => restart()}>Jogar novamente</Button>
        </Block>
      ) : (
        <Block>
          <ContainerLogo>
            <Gif src={loserGif} />
          </ContainerLogo>
          <Message>Você perdeu</Message>
          <Button onClick={() => restart()}>Tentar novamente</Button>
        </Block>
      )}
    </Container>
  );
}

export default ModalFinished;
