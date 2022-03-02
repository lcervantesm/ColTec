import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Plantel Zaragoza",
            description: (
              <>
                <Address className="center">
                  <AddressLine>Calzada I Zaragoza No. 1329</AddressLine>
                  <AddressLine>Col. Tepalcates, CDMX.</AddressLine>
                </Address>
                <Email>informes@tecdemexico.edu.mx</Email>
                <Phone className="center">+52 (55) 5756-4938</Phone>
                <Phone className="center">+52 (55) 5763-5628</Phone>
              </>
            )
          },
          {
            title: "Plantel Coapa",
            description: (
              <>
                <Address className="center">
                  <AddressLine>Parma No. 3</AddressLine>
                  <AddressLine>Col. Ex Hacienda Coapa</AddressLine>
                </Address>
                <Email>informes@tecdemexico.edu.mx</Email>
                <Phone className="center">+52 (55) 5677-9934</Phone>
                <Phone className="center">+52 (55) 5677-9209</Phone>
              </>
            )
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
