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
import Pdf from "images/Ciencias-de-la-informatica.jpeg";
import IpnImage from "images/Informatica.jpg";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Lic. en Ciencias Informáticas IPN</>}
        imageSrc = {IpnImage}
        description = "Mantente a la vanguardia tecnológica con nuestros programas. Desarróllate con nosotros. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial IPN", "Título IPN y cédula profesional en 4 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "Queremos preparar profesionistas informáticos, que usen la información como recurso para brindar soluciones competitivas a través del uso de TIC, logrando la mejora y el posicionamiento de las empresas en el ámbito nacional e internacional.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>Lic. en Ciencias Informáticas</>}
        description={"El Licenciado en Ciencias Informáticas es un profesionista, que aplicará sus conocimientos, habilidades, actitudes y valores en el manejo de la información como ventaja competitiva en la toma de decisiones."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial IPN",
            description: "RVOE - IPN: A-RVOE-DG-NS/012/2019"
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
            link: Pdf,
            description: "Conoce tu plan de estudios. Da clic aquí."
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
        heading={<>Respaldo del<HighlightedText> Politécnico Nacional</HighlightedText></>}
        subheading={"Ventajas"}
        description={"La formación que reciben, les permite mostrarse como profesionistas competentes y comprometidos con su trabajo, con actitud de servicio fundamentada en valores cívicos y éticos altamente competitivos, capaces de interactuar en un entorno complejo y exigido, mostrando un alto desempeño y profesionalismo en toda actividad productiva que les hará destacar, eficientemente, en organizaciones nacionales e internacionales."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Requisitos",
            description: "Cumplir en tiempo y forma con cada una de las etapas del proceso de Admisión señaladas en la convocatoria de ingreso al Nivel Superior del Sistema Escolarizado del IPN.",
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
