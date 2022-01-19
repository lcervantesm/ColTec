import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logoCTM.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";//eslint-disable-line
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";//eslint-disable-line


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-24`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
        <LogoImg src={logo} />
          <LogoContainer>
            <LogoText>Colegio Tecnológico de México</LogoText>
          </LogoContainer><br/>
          <Container className="center">
            <h2 className="nombre-plantel orange-text">Plantel Zaragoza</h2>
            <p>Calzada I Zaragoza No. 1329 Col. Tepalcates, CDMX.</p>
            <a href="tel:+525557564938">+52 55 5756 4938</a><br/>
            <a href="tel:+525557635628">+52 55 5763 5628</a>
          </Container><br/><br/>
          <Container className="center">
            <h2 className="nombre-plantel orange-text">Plantel Coapa</h2>
            <p>Parma No. 3 Col. Ex-Hacienda de Coapa, CDMX.</p>
            <a href="tel:+525556779934">+52 55 5677 9934</a><br/>
            <a href="tel:+525556779209">+52 55 5677 9209</a>
          </Container><br/><br/>
          <Container className="center">
            <p className="orange-text">informes@tecdemexico.edu.mx</p>
          </Container><br/>
          <LinksContainer>
            <Link href="quienes-somos">Conócenos</Link>
            <Link href="/planteles">Planteles</Link>
            <Link href="/oferta">Oferta</Link>
            <Link href="/alianzas">Alianzas</Link>
            <Link href="/aviso-privacidad">Aviso de Privacidad</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink target="_blank"href="https://www.facebook.com/Colegio-Tecnol%C3%B3gico-de-M%C3%A9xico-343709165799910/">
              <FacebookIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2021, Colegio Tecnológico de México. Todos los derechos reservados.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
