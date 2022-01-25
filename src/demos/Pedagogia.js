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
import Footer from "components/footers/MiniCenteredFooter";
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm";
//import Pdf from "images/Administracion-industrial-IPN.jpeg";
import SEPImage from "images/pedagoga.jpeg";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Lic. en Pedagogía SEP</>}
        imageSrc = {SEPImage}
        description = "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial SEP", "Título y cédula profesional en 4 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "Queremos formar profesionales capaces de abordar los procesos y fenómenos educativos para comprender la problemática educativa como una totalidad compleja, reconociendo la importancia de la individualidad de los acores que intervienen en los procesos educativos, de tal manera que contribuyan a la reflexión científica y a la implementación de acciones pertinentes y creativas relacionadas con los problemas inherentes al ámbito de la educación.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>Lic. en Pedagogía</>}
        description={"El Licenciado en Pedagogía es un profesional interdisciplinario que diseña y colabora en el desarrollo de acciones y recursos para la educación en cualquier nivel educativo."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial SEP",
            description: "RVOE - SEP: RVOE-20080909"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de profesores, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de docencia",
            description: "Enero 2022 / Mayo 2022 / Septiembre 2022"
          },
          {
            imageSrc: ReliableIconImage,
            title: "Plan de Estudios",
            link: "/admisiones",
            description: "Contáctanos para conocer tu plan de estudios. Da clic aquí."
          },
          {
            imageSrc: FastIconImage,
            title: "Duración",
            description: "4 años"
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
            description: "Desarrollar investigación científica y participar en investigaciones del área educativa; Participar en la planeación, programación y control de actividades de formación educativa; Diseñar y aplicar programas de orientación a padres de familia; Asesorar e intervenir directamente en la elaboración de materiales y recursos didácticos; Diseñar y aplicar planes de capacitación a personal directivo, administrativo, y de apoyo que labore en centros educativos en el sector público y privado; Diseñar y aplicar planes de capacitación a docentes que laboren en nivel medio superior y superior; Diseñar y aplicar estrategias para la evaluación de acciones programas educativos.; Participar en equipos interdisciplinarios en el diseño de actividades de desarrollo educativo para la comunidad; Implementar programas que estimulen el crecimiento y desarrollo del educando, dentro del ámbito educacional, asistencial, social y especial",
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
