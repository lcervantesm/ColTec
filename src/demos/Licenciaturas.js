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
        heading={<>Licenciaturas (IPN y SEP)</>}
        imageSrc = {IpnImage}
        description = "Contamos con el aval de las mejores instituciones y autoridades educativas para impartir sus programa de licenciatura. *Solo en plantel Zaragoza."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Reconocimiento de Validez Oficial IPN y SEP", "Programas de 4 años.", "Becas disponibles"]}
        testimonial = {{
          quote: "Obtén un título universitario y continúa con tus estudios de posgrado en cualquier institución del Sistema Educativo Nacional.",
        }} />
      <Programas
        heading="Licenciaturas"
        cards={[
          {
            imageSrc: "https://i.ibb.co/bFC7B0V/Imagen-Derecho-SEP.png",
            title: "Derecho SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 2,000",
            rating: 5.0,
            cta: "Conoce más",
            link: "/derecho-sep"
          },
          {
            imageSrc: "https://i.ibb.co/HgjfXFy/Imagen-Informatica-SEP.png",
            title: "Informática SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/informatica-sep"
          },
          {
            imageSrc: "https://i.ibb.co/h1vn0CR/Imagen-Pedagogia-SEP.pngg",
            title: "Pedagogía SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/pedagogia-sep"
          },
          {
            imageSrc: "https://i.ibb.co/WnWJVjT/Imagen-Contaduria-SEP.png",
            title: "Contaduría Pública SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/contaduria-sep"
          },
          {
            imageSrc: "https://i.ibb.co/q0bLgpQ/Imagen-Merca-SEP.png",
            title: "Mercadotecnia SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/mercadotecnia-sep"
          },
          {
            imageSrc: "https://i.ibb.co/DY2XMyz/640px-Logo-Instituto-Politecnico-Nacional.png",
            title: "Ciencias de la Informática IPN",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/ciencias-de-la-informatica-ipn"
          },
          {
            imageSrc: "https://i.ibb.co/DY2XMyz/640px-Logo-Instituto-Politecnico-Nacional.png",
            title: "Contaduría Pública IPN",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/contaduria-ipn"
          },
          {
            imageSrc: "https://i.ibb.co/DY2XMyz/640px-Logo-Instituto-Politecnico-Nacional.png",
            title: "Administración Industrial IPN",
            description: "Mantente a la vanguardia con nuestros programas. Desarróllate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/admin-industrial-ipn"
          },
        ]}
      />
      <Features
        heading={<>Conoce los <HighlightedText>Programas</HighlightedText></>}
        subheading={<>Licenciaturas IPN y SEP</>}
        description={"Mismos programas que en el IPN. Contamos también con el aval de la SEP para impartir nuestros propios planes de estudio."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial IPN, SEP",
            description: "RVOE-IPN/SEP"
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
            description: "3-4 años."
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
        heading={<>Respaldo de<HighlightedText>IPN y SEP</HighlightedText></>}
        subheading={"Ventajas"}
        description={"Contar con el aval de las máximas casas de estudios de nuestro país confirma que el Colegio Tecnológico de México cuenta con lo necesario para brindarte una educación de calidad."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Formación de calidad",
            description: "Fórmate en una de nuestras 8 licenciaturas y comienza a escribir tu futuro.",
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
