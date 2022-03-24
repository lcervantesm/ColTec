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
//import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
//import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
//import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
//import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
//import Blog from "components/blogs/GridWithFeaturedPost.js";
//import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
//import FAQ from "components/faqs/SingleCol.js";
import Programas from "components/cards/TwoTrendingPreviewCardsWithImage";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnDark";
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm";
//import Pdf from "images/Administracion-industrial-IPN.jpeg";
import SEPImage from "images/admin-hosp.png";


const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Maestrías Validez Oficial SEP</>}
        imageSrc = {SEPImage}
        description = "¿Por qué estudiar un posgrado con nosotros?"
        primaryButtonUrl = "/admisiones"
        primaryButtonText = "¡Inscríbete!"
        features = {["100% presencial", "Docentes con amplia experiencia en el sector", "Horarios flexibles", "Un día a la semana", "Titulación por excelencia académica"]}
        testimonial = {{
          quote: "Contamos con más de 20 años de experiencia a nivel nacional en la profesionalización y actualización en el área administrativa, de personal tanto operativo como directivo en los Sector de Salud Pública y Privada, Administración Pública y en el Sector Educativo con personal del Magisterio en el Sistema Estatal y Federal.",
        }} />
      <Features
        heading={<>Conoce nuestra <HighlightedText>Oferta</HighlightedText></>}
        subheading={<>Maestrías RVOE-SEP</>}
        description={"Actualmente, contamos con un claustro docente con amplia experiencia en los diferentes sectores, quienes el 80% cuentan con estudios de Doctorado, egresados de importantes universidades tanto Públicas como Privadas."
      }
        cards = {[
          {
            imageSrc: ShieldIconImage,
            title: "Validez Oficial SEP",
            description: "RVOE - SEP"
          },
          {
            imageSrc: SupportIconImage,
            title: "Soporte",
            description: "Tendrás el apoyo de profesores, altamente calificados, quienes te acompañan durante tu proceso de aprendizaje."
          },
          {
            imageSrc: CustomizeIconImage,
            title: "Inicio de clases",
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
            description: "2 años"
          },
          {
            imageSrc: SimpleIconImage,
            title: "Atención Personalizada",
            description: "Atendemos a las masas de manera individualizada."
          }
        ]}
      />
      <Programas
        headingTitle = "Programas"
        headingDescription = "Nuestro Modelo Educativo en Posgrado se basa en estrategias andragógicas apoyado de estudios de casos."
        primaryLinkText = "Conoce los programas e inscríbete"
        cards = {[
          {
            imageSrc:
              "https://i.ibb.co/ZL9ssQV/Imagen-MAdmin-Hospitales.png",
            type: "Maestría en",
            pricePerDay: "$1,400",
            title: "Administración de Hospitales",
            trendingText: "Tendencia",
            durationText: "2 años",
            locationText: "CDMX",
            cta: "Inscríbete",
            text: "Dirigido a personal operativo y directivo en las Ciencias de la Salud, que deseen iniciar o ampliar sus habilidades de Dirección, Gestión de Recursos Humanos, Toma de Decisión, Manejo de Indicadores, Visión de un Marco Legal, Control de Calidad y Certificación, entre otras."
          },
          {
            imageSrc:
              "https://i.ibb.co/dGkGCXK/Imagen-MEducacion.png",
            type: "Maestría en",
            pricePerDay: "$1,400",
            title: "Ciencias de la Educación",
            trendingText: "Tendencia",
            durationText: "2 años",
            locationText: "CDMX",
            cta: "Inscríbete",
            text: "Dirigido a personal operativo y directivo del sector educativo y afines, que deseen iniciar o ampliar sus habilidades de Dirección, Administración de Recursos en Educación, Modelos de Planeación, Estrategias de Enseñanza Aprendizaje, Tecnologías Educativas, entre otras."
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
      <Pricing
        heading={<>Planes <HighlightedText>Flexibles</HighlightedText></>}
      />
      <Contact
      />
      <Footer />
    </AnimationRevealPage>
  );
}
