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
import Footer from "components/footers/FiveColumnDark";
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
            "https://i.ibb.co/RNJY6wv/Imagen-Carrusel1.png",
          profileImageSrc:
            "https://i.ibb.co/bXQ02Q2/Rector-Wlester.png",
          quote:
            "Hoy en día los jóvenes tienen el reto de adquirir y evidenciar el desarrollo de competencias humanas, de liderazgo y de emprendimiento; uso de una segunda lengua y el desarrollo de las habilidades STEM (Ciencia, Tecnología, Ingeniería y Matemáticas).",
          customerName: "Wlester Santiago",
          customerTitle: "Rector"
        },
        {
          imageSrc:
            "https://i.ibb.co/xG9bZnG/Imagen-Carrusel2.png",
          profileImageSrc:
          "https://i.ibb.co/44HSPSN/Perla-Bonilla.png",
          quote:
          "La nueva normalidad demanda programas a distancia de calidad. Por ello, contamos con el respaldo de la UNAM para impartir el B@UNAM 100% a distancia.",
          customerName: "Perla Bonilla",
          customerTitle: "Directora técnica del programa de B@UNAM"
        }
      ]}
      textOnLeft={true}
    />
    <FAQ
      faqs={[
        {
          question: "¿Cuánto cobran de colegiatura?",
          answer:
            "Depende del programa, el promedio son $2,000.00 MXN. Inicia tu proceso de inscripción dejándo tus datos en el formulario."
        },
        {
          question: "¿Dónde están ubicados?",
          answer:
            "Contamos con dos planteles: Plantel Villa Coapa, al Sur de la Ciudad de México y Plantel Zaragoza, al Oriente en la alcaldía Iztapalapa, CDMX. "
        },
        {
          question: "¿Cómo me inscribo?",
          answer:
            "El proceso de inscripción es muy sencillo, solo necesitamos que nos contactes para que un asesor te acompañe durante todo el proceso."
        },
        {
          question: "¿Los estudios tienen validez oficial?",
          answer:
            "¡Claro! Tenemos planes de estudio avalados por la Universidad Nacional Autónoma de México, del Instituto Politécnico Nacional y de la Secretaría de Educación Pública."
        },
        {
          question: "¿Cuentan con programas en línea?",
          answer: "Actualmente sólo contamos con el Bachillerato en línea de la UNAM."
        }
      ]}
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          ¿Tienes <span className="orange-text" tw="text-primary-500">Dudas </span>?
        </>
      }
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
