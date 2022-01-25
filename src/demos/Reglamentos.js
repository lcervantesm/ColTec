import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
//import SupportIconImage from "images/support-icon.svg";
//import ShieldIconImage from "images/shield-icon.svg";
//import CustomizeIconImage from "images/customize-icon.svg";
//import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
//import SimpleIconImage from "images/simple-icon.svg";
//import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
//import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
//import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
//import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
//import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
//import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
//import Blog from "components/blogs/GridWithFeaturedPost.js";
//import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
//import FAQ from "components/faqs/SingleCol.js";
//import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/MiniCenteredFooter";
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm";
//import Pdf from "images/Administracion-industrial-IPN.jpeg";
//import SEPImage from "images/marketing.jpeg";
import Reglamento from "documents/Reglamento.pdf";
import Header from "components/headers/light.js"

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features
        heading={<>Conoce el <HighlightedText>Reglamento</HighlightedText></>}
        subheading={<>Reglamentos</>}
        description={"Es obligación de nuestros alumnos consultar y estar enterados y de acuerdo con el reglamento."}
        cards = {[
          {
            imageSrc: ReliableIconImage,
            title: "Reglamento General",
            link: Reglamento,
            description: "Consulta aquí."
          }
        ]}
      />
      <Contact
      />
      <Footer />
    </AnimationRevealPage>
  );
}
