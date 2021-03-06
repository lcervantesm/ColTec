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
        primaryButtonText = "??Inscr??bete!"
        features = {["Reconocimiento de Validez Oficial IPN y SEP", "Programas de 4 a??os.", "Becas disponibles"]}
        testimonial = {{
          quote: "Obt??n un t??tulo universitario y contin??a con tus estudios de posgrado en cualquier instituci??n del Sistema Educativo Nacional.",
        }} />
      <Programas
        heading="Licenciaturas"
        cards={[
          {
            imageSrc: "https://i.ibb.co/bFC7B0V/Imagen-Derecho-SEP.png",
            title: "Derecho SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 2,000",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/derecho-sep"
          },
          {
            imageSrc: "https://i.ibb.co/HgjfXFy/Imagen-Informatica-SEP.png",
            title: "Inform??tica SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/informatica-sep"
          },
          {
            imageSrc: "https://i.ibb.co/h1vn0CR/Imagen-Pedagogia-SEP.pngg",
            title: "Pedagog??a SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/pedagogia-sep"
          },
          {
            imageSrc: "https://i.ibb.co/WnWJVjT/Imagen-Contaduria-SEP.png",
            title: "Contadur??a P??blica SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/contaduria-sep"
          },
          {
            imageSrc: "https://i.ibb.co/q0bLgpQ/Imagen-Merca-SEP.png",
            title: "Mercadotecnia SEP",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/mercadotecnia-sep"
          },
          {
            imageSrc: "https://i.ibb.co/DY2XMyz/640px-Logo-Instituto-Politecnico-Nacional.png",
            title: "Ciencias de la Inform??tica IPN",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/ciencias-de-la-informatica-ipn"
          },
          {
            imageSrc: "https://i.ibb.co/DY2XMyz/640px-Logo-Instituto-Politecnico-Nacional.png",
            title: "Contadur??a P??blica IPN",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/contaduria-ipn"
          },
          {
            imageSrc: "https://i.ibb.co/DY2XMyz/640px-Logo-Instituto-Politecnico-Nacional.png",
            title: "Administraci??n Industrial IPN",
            description: "Mantente a la vanguardia con nuestros programas. Desarr??llate con nosotros.",
            locationText: "Zaragoza",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce m??s",
            link: "/admin-industrial-ipn"
          },
        ]}
      />
      <Features
        heading={<>Conoce los <HighlightedText>Programas</HighlightedText></>}
        subheading={<>Licenciaturas IPN y SEP</>}
        description={"Mismos programas que en el IPN. Contamos tambi??n con el aval de la SEP para impartir nuestros propios planes de estudio."}
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial IPN, SEP",
            description: "RVOE-IPN/SEP"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendr??s el apoyo de profesores, altamente calificados, quienes te acompa??an durante tu proceso de aprendizaje."
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
            title: "Duraci??n",
            description: "3-4 a??os."
          },
          {
            imageSrc: SimpleIconImage,
            title: "Atenci??n Personalizada",
            description: "Atendemos a las masas de manera individualizada."
          }
        ]}
      />
      <GetStarted
        subheading = "??Quieres cambiar tu futuro?"
        heading = "Inscr??bete hoy mismo."
        primaryLinkText = "??Ll??manos!"
        primaryLinkUrl = "tel:+525557564938"
        secondaryLinkText = "Cont??ctanos"
        secondaryLinkUrl = "/admisiones"/>

      <MainFeature
        heading={<>Respaldo de<HighlightedText>IPN y SEP</HighlightedText></>}
        subheading={"Ventajas"}
        description={"Contar con el aval de las m??ximas casas de estudios de nuestro pa??s confirma que el Colegio Tecnol??gico de M??xico cuenta con lo necesario para brindarte una educaci??n de calidad."}
        features={[
          {
            Icon: BriefcaseIcon,
            title: "Formaci??n de calidad",
            description: "F??rmate en una de nuestras 8 licenciaturas y comienza a escribir tu futuro.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
          },
          {
            Icon: MoneyIcon,
            title: "Accesible",
            description: "Hacemos todo lo posible por llevarte programas de calidad al mejor precio.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
        primaryButtonText = "??Inscr??bete!"
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
