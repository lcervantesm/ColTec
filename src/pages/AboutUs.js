import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";//eslint-disable-line
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import CTMphoto from "images/_DSC1576.png";
import AulaDespues from "images/aula_despues.png"


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading className="orange-text">¿Quiénes somos?</Subheading>}
        heading="Somos un Colegio Comprometido con la Calidad."
        buttonRounded={false}
        primaryButtonText="Inscríbete"
        description = "Tenemos la noble misión de formar personas emprendedoras cuyo talento y liderazgo les permita ser capaces de asumir retos y llevar a cabo procesos de transformación en cualquier ámbito: personal, profesional, organizacional y social."
        imageSrc={CTMphoto}
      />
      <MainFeature1
        subheading={<Subheading className="orange-text">Nuestra Visión</Subheading>}
        heading="Aprendizaje continuo."
        buttonRounded={false}
        primaryButtonText="Contáctanos"
        description="Queremos ser una institución reconocida por la calidad de sus egresados en los diversos niveles de estudios; en búsqueda permanente de mejorar sus procesos educativos con la inclusión de las herramientas educativas y con tecnología de punta."
        imageSrc={AulaDespues}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading className="orange-text">Un Colegio con</Subheading>}
        heading="Valores"
        description="Sabemos que nuestros estudiantes son jóvenes con un gran potencial y que la base de su futuro, su éxito y realización personal, está sustentada en el impulso de su liderazgo. "
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Acompañamiento",
            description: "Nunca estás solo, en el Colegio te asignamos un tutor que estará al pendiente de ti y de tu avance."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Ética Escolar",
            description: "Sabemos que para garantizar tu seguridad y la de todas y todos es necesario actuar en todo momento con ética y profesionalismo."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Satisfacción",
            description: "Queremos que tanto padres de familia como estudiantes se sientan satisfechos con los servicios prestados."
          },
        ]}
        linkText=""
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
