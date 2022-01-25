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
import logoTec from "images/logoCTM.png";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
//import shopIconImageSrc from "images/shop-icon.svg";
import convenioImage from "images/convenios-tec-de-mexico.jpg"


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
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
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
