import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";//eslint-disable-line
import Footer from "components/footers/MiniCenteredFooter";//eslint-disable-line
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";//eslint-disable-line

const Address = tw.span`leading-relaxed`;//eslint-disable-line
const AddressLine = tw.span`block`;//eslint-disable-line
const Email = tw.span`text-sm mt-6 block text-gray-500`;//eslint-disable-line
const Phone = tw.span`text-sm mt-0 block text-gray-500`;//eslint-disable-line

export default () => {
  return (
    <AnimationRevealPage>
      <ContactUsForm />
    </AnimationRevealPage>
  );
};
