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
import ContactUs from "components/forms/TwoColContactUsWithIllustrationFullForm";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Preparatoria SEP</>}
        description = "Programa de Preparatoria avalado por la Secretaría de Educación Pública. Termina en 3 años tu prepa. *Solo en Plantel Coapa."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial SEP", "Certificado SEP en 3 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "En el Colegio Tecnológico de México Campus Coapa estamos listos para recibirte con los brazos abiertos.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>Preparatoria SEP</>}
        description={"La preparatoria del Colegio Tecnológico de México, ofrece planes y programas de estudio actualizados, que promueven el contacto directo de los estudiantes con la tecnología, formando individuos altamente competitivos para elegir su futuro profesional."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial",
            description: "Preparatoria Federal RVOE 050296 del 30 de agosto de 2005."
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de asesores y tutores a distancia, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de docencia",
            description: "Agosto 2022."
          },
          {
            imageSrc: ReliableIconImage,
            title: "Plan de Estudios",
            link: "http://www.sems.gob.mx/work/models/sems/Resource/12491/4/images/libro.pdf",
            description: "Conoce tu plan de estudios. Da clic aquí."
          },
          {
            imageSrc: FastIconImage,
            title: "Duración",
            description: "3 años."
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
        description={"Somos una Institución consolidada y reconocida por la calidad de sus egresados en los diversos niveles de estudios, en búsqueda permanente de mejora de sus procesos educativos, con la inclusión de las herramientas educativas y tecnología de punta."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Inicio de docencia",
            description: "Tenemos dos convocatorias al año, una en febrero y otra en agosto. Solicita información aquí.",
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
      <ContactUs />
      <Footer />
    </AnimationRevealPage>
  );
}
