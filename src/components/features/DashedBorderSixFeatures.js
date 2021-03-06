import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

// import SupportIconImage from "../../images/support-icon.svg";
// import ShieldIconImage from "../../images/shield-icon.svg";
// import CustomizeIconImage from "../../images/customize-icon.svg";//eslint-disable-line
// import FastIconImage from "../../images/fast-icon.svg";
// import ReliableIconImage from "../../images/reliable-icon.svg";
//import SimpleIconImage from "../../images/simple-icon.svg";
import iconoBach from "../../images/ImagenPrepa.png";
import iconoLic from "../../images/ImagenLic.png";
import iconoComipems from "../../images/comipems.png";
import iconoSuperior from "../../images/ingreso_superior.png";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import iconoMaestria from "../../images/ImagenMaestrias.png";
import iconoEduC from "../../images/_DSC1576.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}


  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: iconoBach,
      title: "Bachilleratos",
      description: "Contamos con tres programas de bachillerato: SEP, UNAM e IPN, la elecci??n es tuya.",
      href: "/bachilleratos"
    },
    { imageSrc: iconoLic,
      title: "Licenciaturas",
      description: "Impulsa tu carrerra con una de nuestras Licenciaturas avaladas por la SEP y el IPN.",
      href: "/licenciaturas"
    },
    { imageSrc: iconoMaestria,
      title: "Maestr??as",
      description: "Contamos con dos programas de maestr??a para ti. Pronto habr?? cada vez m??s programas.",
      href: "/maestrias"
    },
    { imageSrc: iconoEduC,
      title: "Educaci??n Continua",
      href: "/admisiones",
      description: "Ofertamos 5 diplomados para especializarte en las tecnolog??as emergentes."
    },
    { imageSrc: iconoSuperior,
      title: "Cursos Ingreso IPN/UNAM",
      href: "/cursos",
      description: "Destaca en el examen de selecci??n e ingresa a la universidad de tus sue??os."
    },
    { imageSrc: iconoComipems,
      title: "Curso Ingreso COMIPEMS",
      href: "/cursos",
      description: "??Asegura tu primera opci??n!"
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Programas de <span className="orange-text" tw="text-primary-500">Calidad</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
              <PrimaryButton className="orange" as="a" href={card.href || "card.href"}>
                M??s informaci??n
              </PrimaryButton>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
