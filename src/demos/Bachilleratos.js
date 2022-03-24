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
//import Pdf from "documents/PlanDeEstudiosBachIPN.pdf";
import IpnImage from "images/_DSC1605.png";
import Programas from "components/cards/ThreeColSlider";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Bachilleratos CTM (UNAM, IPN, SEP)</>}
        imageSrc = {IpnImage}
        description = "Contamos con el aval de las mejores instituciones y autoridades educativas para impartir sus programa de bachillerato. Podrás revalidar todo tu avance en caso de que entres posteriormente al IPN. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial IPN", "Certificado UNAM en 2 años.", "Certificado IPN en 3 años.", "Certificado SEP en 3 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "Obtén un certificado de bachillerato y continúa con tus estudios a nivel superior en cualquier institución del Sistema Educativo Nacional.",
        }} />
      <Programas
        heading="Bachilleratos"
        cards={[
          {
            imageSrc: "https://i.ibb.co/qpDsmRq/Imagen-Prepa.png",
            title: "B@UNAM",
            description: "Programa de bachillerato 100% en línea operado por la máxima casa de estudios. Termina en 2 años tu prepa.",
            locationText: "En línea",
            pricingText: "Desde 2,000",
            rating: 5.0,
            cta: "Conoce más",
            link: "/b@unam"
          },
          {
            imageSrc: "https://i.ibb.co/3CHCBP7/Imagen-Carrusel2.png",
            title: "Bachillerato IPN",
            description: "Mismo programa que en el IPN. Podrás revalidar todo tu avance en caso de que entres posteriormente al IPN.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/bachillerato-ipn"
          },
          {
            imageSrc: "https://i.ibb.co/LpQCXB3/Imagen-Carrusel1.png",
            title: "Prepa SEP",
            description: "Programa de Preparatoria avalado por la Secretaría de Educación Pública. Termina en 3 años tu prepa.",
            locationText: "Coapa",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/preparatoria-sep"
          }
        ]}
      />
      <Features
        heading={<>Conoce los <HighlightedText>Programas</HighlightedText></>}
        subheading={<>Bachillerato UNAM, IPN y SEP</>}
        description={"Todos nuestros bachilleratos te permiten continuar estudios a nivel superior en cualquier institución del Sistema Educativo Nacional."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial UNAM, IPN, SEP",
            description: "IPN: A-RVOE-DG-NMS/013/01 | A-RVOE-DG-NMS/014/01 | A-RVOE-DG-NMS/015/01 | A-RVOE-DG-NMS/016/01 | UNAM: B410 | SEP: RVOE-050296"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de profesores, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de clases",
            description: "Agosto 2022"
          },
          {
            imageSrc: ReliableIconImage,
            title: "Plan de Estudios",
            description: "Conoce los planes de estudio en cada programa."
          },
          {
            imageSrc: FastIconImage,
            title: "Duración",
            description: "2-3 años."
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
        heading={<>Respaldo de<HighlightedText> UNAM, IPN y SEP</HighlightedText></>}
        subheading={"Ventajas"}
        description={"Contar con el aval de las máximas casas de estudios de nuestro país confirma que el Colegio Tecnológico de México cuenta con lo necesario para brindarte una educación de calidad."}
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
