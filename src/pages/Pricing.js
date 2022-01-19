import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter";
import FAQ from "components/faqs/SingleCol.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import ContactUs from "./ContactUsWOHeader.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Nuestros estudiantes"
      />
      <FAQ
      description="Resuélvelas aquí."
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          ¿Tienes <span className="orange-text" tw="text-primary-500">Dudas </span>?
        </>
      }/>
      <ContactUs />
      <Footer/>
    </AnimationRevealPage>
  );
};
