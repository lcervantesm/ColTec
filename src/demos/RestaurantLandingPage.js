import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
//import MainFeature from "components/features/TwoColWithButton.js";
//import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
//import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
//import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter";
import logoTec from "images/logo-tec-de-mex.png";
import chefIconImageSrc from "images/handshake-apple.png";
import celebrationIconImageSrc from "images/logoSNTSS.jpeg";
//import shopIconImageSrc from "images/shop-icon.svg";
import convenioImage from "images/convenios-tec-de-mexico.jpg"
import logoCCM from "images/logotec.png";

export default () => {
  //const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  //const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  //const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Tenemos una oferta <HighlightedText>exclusiva para ti.</HighlightedText></>}
        description="Trabajamos en conjunto con el sector público y privado para otorgar beneficios que permitan a cada vez más estudiantes contar con las herramientas necesarias para el éxito."
        imageSrc={convenioImage}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Más información"
      />
      <Features
        heading={
          <>
            Nuestros <HighlightedText>Convenios.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: logoTec,
            title: "Colegio Tecnológico de México",
            description: "Aplica para oferta de bachillerato y licenciaturas. Contacto: Lic. Rosy González, Coordinadora de promoción y difusión.",
            url: "https://sntss.org.mx/images/downloads/elements/convenios-academicos-nov-jnin-image.pdf",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Convenio de Beneficios a Afiliados y Familiares",
            description: " ",
            url: "https://sntss.org.mx/images/downloads/elements/convenios-academicos-nov-jnin-image.pdf"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Secretaría de Capacitación y Adiestramiento del SNTSS",
            description: "30% de beca en inscripciones y colegiaturas. Contacto: Lic Fernando Pérez Collantes,  Secretario de Capacitación y Adiestramiento del SNTSS.",
            url: "https://sntss.org.mx/images/downloads/elements/convenios-academicos-nov-jnin-image.pdf"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Features
        heading={
          <>
            Nuestros <HighlightedText>Convenios.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: logoTec,
            title: "Colegio Tecnológico de México",
            description: "Oferta educativa de ingreso a bachillerato y licenciatura.",
            url: "https://ccm.edu.mx/",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Convenio para impartición conjunta.",
            description: " ",
            url: "https://ccm.edu.mx/"
          },
          {
            imageSrc: logoCCM,
            title: "Colegio de Ciencias Matemáticas",
            description: "Años de experiencia nos respaldan.",
            url: "https://ccm.edu.mx/"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Nuestra <HighlightedText>oferta.</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
}
