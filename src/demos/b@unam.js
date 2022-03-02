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


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>b@unam</>}
        description = "Programa de bachillerato 100% en línea operado por la máxima casa de estudios. Termina en 2 años tu prepa."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial UNAM", "Certificado UNAM en 2 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "En el Colegio Tecnológico de México nos modernizamos de la mano de la UNAM y estamos listos para recibirte con los brazos abiertos.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>b@unam</>}
        description={"Los egresados de B@UNAM contarán con una preparación basada en una cultura científica y humanista que les permitirá ingresar a instituciones de nivel superior y cursar estudios en cualquier campo."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial",
            description: "Incorporación UNAM | Acuerdo CIREyTG 14/21 del 30 de noviembre de 2021 | Clave de incorporación UNAM B410"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de asesores y tutores a distancia, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de docencia",
            description: "Mayo 2022 / Septiembre 2022"
          },
          {
            imageSrc: ReliableIconImage,
            title: "Plan de Estudios",
            link: "https://www.bunam.unam.mx/estructura_curricular.php",
            description: "Conoce tu plan de estudios. Da clic aquí."
          },
          {
            imageSrc: FastIconImage,
            title: "Duración",
            description: "El programa tiene una duración de dos años."
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
        heading={<>Metodología <HighlightedText>Innovadora</HighlightedText></>}
        subheading={"Ventajas"}
        description={"El B@UNAM es un bachillerato en línea, por ello el alumno puede estudiar desde cualquier computadora conectada a Internet y en los horarios que decida, pero debe cumplir, en el periodo establecido, el calendario respectivo."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Diseño Curricular",
            description: "Un eje transversal de habilidades, actitudes y valores, considerado indispensable para la formación de un bachiller, atraviesa todas las asignaturas.",
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
