import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";//eslint-disable-line
//import SupportIconImage from "images/support-icon.svg";//eslint-disable-line
//import ShieldIconImage from "images/shield-icon.svg";//eslint-disable-line
//import CustomizeIconImage from "images/customize-icon.svg";//eslint-disable-line
//import FastIconImage from "images/fast-icon.svg";//eslint-disable-line
//import ReliableIconImage from "images/reliable-icon.svg";//eslint-disable-line
//import SimpleIconImage from "images/simple-icon.svg";//eslint-disable-line
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
//import Features from "components/features/ThreeColWithSideImage.js";
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
import IpnImage from "images/estudiante-comipems.png";
import Programas from "components/cards/ThreeColSlider";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Cursos de Preparación y Regularización (UNAM, IPN, COMIPEMS)</>}
        imageSrc = {IpnImage}
        description = "En alianza con el Colegio de Ciencias Matemáticas, institución con más de 18 años de experiencia, ha creado cursos con planes de estudios definidos y formales que capacitan plenamente al estudiante."
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["Curso de ingreso a la UNAM", "Curso de ingreso al IPN", "Curso para examen COMIPEMS", "Regularización de materias"]}
        testimonial = {{
          quote: "Ingresa a tu primera opción en examen COMIPEMS para bachillerato y en exámenes UNAM, IPN para licenciatura.",
        }} />
      <Programas
        heading="Programas"
        cards={[
          {
            imageSrc: "https://i.ibb.co/ZxS6WxT/UNAM.jpg",
            title: "Ingreso UNAM",
            description: "Los cursos del CCM incluyen exámenes y tareas. Realizarás un repaso de los 3 años del bachillerato y contarás con: examen de exploración, examen de simulación y temas específicos por cada área.",
            locationText: "Coapa",
            pricingText: "Desde 8,000",
            rating: 5.0,
            cta: "Conoce más",
            link: "/admisiones"
          },
          {
            imageSrc: "https://i.ibb.co/5BHYCR5/zacatenco.jpg",
            title: "Ingreso IPN",
            description: "Verás un repaso integral de las áreas más importantes de los 3 años del bachillerato. Tendrás un plan de trabajo y podrás reforzar tus conocimientos mediante: examen de exploración y examen de simulación.",
            locationText: "Coapa",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/admisiones"
          },
          {
            imageSrc: "https://i.ibb.co/jDKG8fC/comipems.jpg",
            title: "COMIPEMS",
            description: "El objetivo de aplicar este examen es ingresar a la Institución de Educación Media Superior de tu preferencia. Contarás con examen diagnóstico y exámenes de simulación que te capacitarán para el éxito.",
            locationText: "Coapa",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/admisiones"
          },
          {
            imageSrc: "https://i.ibb.co/Pgj8k1f/Regularizacio-n.png",
            title: "Regularización",
            description: "Regularízate en las materias que te sean más difíciles.",
            locationText: "Coapa",
            pricingText: "Desde 1,400",
            rating: 5.0,
            cta: "Conoce más",
            link: "/admisiones"
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
