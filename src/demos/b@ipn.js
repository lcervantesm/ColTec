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
import Pdf from "documents/PlanDeEstudiosBachIPN.pdf";
import IpnImage from "images/_DSC1605.png";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Bachillerato IPN</>}
        imageSrc = {IpnImage}
        description = "Contamos con el aval del IPN para impartir su programa de bachillerato. Podrás revalidar todo tu avance en caso de que entres posteriormente al IPN. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial IPN", "Certificado IPN en 3 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "Obtén un Título de Técnico y Cédula Profesional en Administración y continúa con tus estudios a nivel superior en cualquier institución del Sistema Educativo Nacional.",
        }} />
      <Features
        heading={<>Conoce el <HighlightedText>Programa</HighlightedText></>}
        subheading={<>Bachillerato IPN</>}
        description={"El Bachillerato del IPN es bivalente ya que, además de obtener formación técnica en la que obtienes Título de Técnico y Cédula Profesional, te permite continuar estudios a nivel superior en cualquier institución del Sistema Educativo Nacional."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial IPN",
            description: "RVOES - IPN: Administración - A-RVOE-DG-NMS/013/01 | Informática - A-RVOE-DG-NMS/014/01 | Contaduría - A-RVOE-DG-NMS/015/01 | Comercio - A-RVOE-DG-NMS/016/01"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de profesores, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de docencia",
            description: "Agosto 2022"
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
        heading={<>Respaldo del<HighlightedText> Politécnico Nacional</HighlightedText></>}
        subheading={"Ventajas"}
        description={"La formación que reciben, les permite mostrarse como técnicos competentes y comprometidos con su trabajo, con actitud de servicio fundamentada en valores cívicos y éticos altamente competitivos, capaces de interactuar en un entorno complejo y exigido, mostrando un alto desempeño y profesionalismo en toda actividad productiva que les hará destacar, eficientemente, en organizaciones nacionales e internacionales."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Salidas Técnicas",
            description: "Bachillerato Tecnológico en: Administración, Informática, Contaduría y Comercio Internacional.",
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
