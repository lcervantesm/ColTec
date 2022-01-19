import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";//eslint-disable-line
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";//eslint-disable-line
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Features />
    <MainFeature2 />
    <Testimonial
      subheading="Testimoniales"
      heading={
        <>
          Nuestros estudiantes <span className="orange-text" tw="text-primary-500">son TODO.</span>
        </>
      }
      description="Para nosotros es muy importante formar personas comprometidas con su entorno que sean agentes de cambio en sus comunidades. Brindarles una educación de calidad en un entorno seguro y vanguardista, es nuestro compromiso."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "Hoy en día los jóvenes tienen el reto de adquirir y evidenciar el desarrollo de competencias humanas, de liderazgo y de emprendimiento; uso de una segunda lengua y el desarrollo de las habilidades STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).",
          customerName: "Wlester Santiago",
          customerTitle: "Rector"
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
          "La nueva normalidad demanda programas a distancia de calidad. Por ello, contamos con el respaldo de la UNAM para impartir el B@UNAM 100% a distancia.",
          customerName: "Perla Bonilla",
          customerTitle: "Directora técnica del programa de B@UNAM"
        }
      ]}
      textOnLeft={true}
    />
    <FAQ
    
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Tienes <span className="orange-text" tw="text-primary-500">Dudas </span>?
        </>
      }
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
