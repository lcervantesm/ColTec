import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
//import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
//import Blog from "components/blogs/GridWithFeaturedPost.js";
//import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
//import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnDark";
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm";
//import Pdf from "images/Administracion-industrial-IPN.jpeg";
import SEPImage from "images/admin-hosp.png";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Maestría en Administración de Hospitales</>}
        imageSrc = {SEPImage}
        description = "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["100% Presencial","Docentes con amplia experiencia en el sector", "Horarios Flexibles", "Titulación por excelencia académica"]}
        testimonial = {{
          quote: "Nuestro Modelo Educativo en Posgrado se basa en estrategias andragógicas apoyado de estudios de casos.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>Maestría en Administración de Hospitales</>}
        description={"Programa dirigido a personal operativo y directivo en las Ciencias de la Salud y afines, que deseen iniciar o ampliar sus habilidades de Dirección, Gestión de Recursos Humanos, Toma de Decisión, Manejo de Indicadores, Visión de un Marco Legal, Programas de Calidad y Certificación, entre otras."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial SEP",
            description: "RVOE - SEP"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de profesores, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de clases",
            description: "Enero 2022 / Mayo 2022 / Septiembre 2022"
          },
          {
            imageSrc: ReliableIconImage,
            title: "Plan de Estudios",
            link: "https://i.ibb.co/TLjH6wB/BROCHURE-MTRIA-ADMON-HOSP-copia.jpg",
            description: "Contáctanos para conocer tu plan de estudios. Da clic aquí."
          },
          {
            imageSrc: FastIconImage,
            title: "Duración",
            description: "2 años"
          },
          {
            imageSrc: SimpleIconImage,
            title: "Atención Personalizada",
            description: "Atendemos a las masas de manera individualizada."
          }
        ]}
      />
      <GetStarted
        subheading = "¿Quieres cambiar tu futuro?"
        heading = "Inscríbete hoy mismo."
        primaryLinkText = "¡Llámanos!"
        primaryLinkUrl = "tel:+525557564938"
        secondaryLinkText = "Contáctanos"
        secondaryLinkUrl = "/admisiones"/>
      <MainFeature
        heading={<>Respaldo de la<HighlightedText> SEP</HighlightedText></>}
        subheading={"Ventajas"}
        description={"El Reconocimiento de Validez Oficial de Estudios (RVOE) es el acto de la autoridad educativa en virtud del cual se determina incorporar un plan y programas de estudio que un particular imparte, o pretende impartir, al sistema educativo nacional."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Aprenderás a:",
            description: "Planear, organizar, dirigir y controlar las actividades en el campo de los hospitales.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
          },
          {
            Icon: MoneyIcon,
            title: "Accesible",
            description: "Hacemos todo lo posible por llevarte programas de calidad al mejor precio.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
        primaryButtonText = "¡Inscríbete!"
        primaryButtonUrl = "/admisiones"
      />
      <Pricing
        heading={<>Planes <HighlightedText>Flexibles</HighlightedText></>}
      />
      <Contact
      />
      <Footer />
    </AnimationRevealPage>
  );
}
