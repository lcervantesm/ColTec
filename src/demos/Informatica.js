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
import SEPImage from "images/Informatica.png";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Lic. en Informática SEP</>}
        imageSrc = {SEPImage}
        description = "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial SEP", "Título y cédula profesional en 4 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "Queremos formar profesionales que cuenten con los conocimientos, habilidades y destrezas que les permiten detectar analizar, evaluar y proponer soluciones a través de la tecnología de información para la optimización de los procesos organizacionales con la finalidad de coadyuvar a las empresas para que alcancen un nivel de clase mundial.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>Lic. en Informática</>}
        description={"El Licenciado en Informática es un profesional interdisciplinario que desarrolla y aplica las tecnologías de la información en la prevención, análisis y solución de problemas en las organizaciones."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial SEP",
            description: "RVOE - SEP: RVOE-20080903"
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
            description: "Resolver problemas de información de cualquier organización; Desarrollar y administrar sistemas informáticos; Crear y administrar de empresas y centros de investigación informática; Diseño e instalación de sistemas computacionales; Reconocer el marco legal relacionado con la informática; Establecer mecanismos para mantener la seguridad y privacidad de la información; Aplicar la informática dentro de un marco de ética profesional; Investigar las tendencias e innovaciones sobre esta disciplina.",
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
