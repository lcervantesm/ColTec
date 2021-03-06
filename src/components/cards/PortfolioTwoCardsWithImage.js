import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
//const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "Our Portfolio",
  headingHtmlComponent = (
    <>
      ??Te interesa alg??n programa? <span tw="text-primary-500">Hablemos.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
  linkText = "View all Projects",
  cardLinkText = "Read Case Study",
  textOnLeft = false
}) => {
  const cards = [
    {
      imageSrc:
        "https://i.ibb.co/jzb1nWb/Plantel-Zaragoza.png",
      company: "Plantel Zaragoza",
      type: "Programas",
      title: "B@UNAM",
      title2: "Bachillerato IPN",
      title3: "Lic. en Ciencias Inform??ticas IPN",
      title4: "Lic. en Contadur??a P??blica IPN",
      title5: "Lic. en Administraci??n Industrial IPN",
      title6: "Lic. en Inform??tica SEP",
      title7: "Lic. en Contadur??a P??blica SEP",
      title8: "Lic. en Pedagog??a SEP",
      title9: "Lic. en Mercadotecnia SEP",
      title10: "Lic. en Derecho SEP",
      title11: "Maestr??a en Administraci??n de Hospitales",
      title12: "Maestr??a en Ciencias de la Educaci??n",
      titleLink1: "/b@unam",
      titleLink2: "/bachillerato-ipn",
      titleLink3: "/ciencias-de-la-informatica-ipn",
      titleLink4: "/contaduria-ipn",
      titleLink5: "/admin-industrial-ipn",
      durationText: "L - V de 9:00 a 17:00 hrs.",
      locationText: "Sur CDMX",
      address: "Calzada I Zaragoza No. 1329 Col. Tepalcates, CDMX"
    },
    {
      imageSrc:
        "https://i.ibb.co/ykXKp99/Plantel-Coapa.png",
      company: "Plantel Coapa",
      type: "Programas",
      title: "B@UNAM",
      title2: "Preparatoria SEP",
      title3: "Curso de Ingreso a UNAM",
      title4: "Curso de Ingreso a IPN",
      title5: "Curso de Ingreso COMIPEMS",
      titleLink1: "/b@unam",
      titleLink2: "/preparatoria-sep",
      titleLink3: "/admisiones",
      titleLink4: "/admisiones",
      titleLink5: "/admisiones",
      durationText: "L - V de 9:00 a 17:00 hrs.",
      locationText: "Sur CDMX",
      address: "Parma No.3, Col. Ex-Hacienda de Coapa, Tlalpan, CDMX"
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink>
                {linkText} <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardText>
                    {card.address}
                  </CardText>
                  <CardTitle><h5 className="link-program"><a href={card.titleLink1}>{card.title}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href={card.titleLink2}>{card.title2}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href={card.titleLink3}>{card.title3}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href={card.titleLink4}>{card.title4}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href={card.titleLink5}>{card.title5}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/informatica-sep">{card.title6}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/contaduria-sep">{card.title7}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/pedagogia-sep">{card.title8}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/mercadotecnia-sep">{card.title9}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/derecho-sep">{card.title10}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/admisiones">{card.title11}</a></h5></CardTitle>
                  <CardTitle><h5 className="link-program"><a href="/admisiones">{card.title12}</a></h5></CardTitle>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
