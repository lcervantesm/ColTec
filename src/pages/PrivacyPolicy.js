import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Última actualización: Marzo 1, 2022</p>

            <p>
            En cumplimiento con la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares, el Colegio Tecnológico de México, con
            domicilio en Calzada Ignacio Zaragoza, No. 1329, Col. Tepalcate,
            CDMX, como usuario del sitio web, hace de su conocimiento el
            siguiente:
            </p>

            <h1>AVISO DE PRIVACIDAD</h1>
            <p>
            1. Los datos personales que el titular ha proporcionado al Colegio
            Tecnológico de México, se utilizarán con los siguientes fines:
            </p>
            <p>i. El correo electrónico se utiliza para crear un perfil de los visitantes de
la página web.Únicamente para la elaboración del perfil de los
visitantes, el Colegio Tecnológico de México, podrá transferir sus
datos a un tercero.
ii.En caso de que el titular no autorice esta transferencia o de que se
oponga a la misma, el Colegio Tecnológico de México no podrá
enviarle la información que sea difundida a través de terceros,
pero podrá continuar enviándole otro tipo de información siempre
y cuando no implique la transferencia de sus datos personales a
terceras personas.
iii. En caso de no manifestarse en contra de esta transferencia, se
tendrá por aceptada de acuerdo con lo establecido en artículo 8,
párrafo tercero, de la Ley Federal de Protección de Datos
Personales en Posesión de los Particulares.
2. En caso de que el usuario quiera limitar el uso o divulgación de sus
datos, deberá hacerlo del conocimiento al Colegio Tecnológico de
México, a través de una solicitud por escrito con los datos que se
especifican en el siguiente punto.
3. Para acceder, rectificar o cancelar sus datos, así como oponerse al
uso futuro de los mismos, el usuario deberá enviar una solicitud al
Colegio Tecnológico de México, con los siguientes datos:
i. El nombre del titular y domicilio u otro medio para comunicarle la
respuesta a su solicitud;
ii.Los documentos que acrediten la identidad o, en su caso, la
representación legal del titular; y
iii. La descripción clara y precisa de los datos personales respecto
de los que se busca ejercer alguno de los derechos antes
mencionados. De acuerdo con la Ley, el Colegio Tecnológico de
México, responderá las solicitudes en un término de 20 días,
prorrogables según el caso.
4. En caso de que este AVISO DE PRIVACIDAD cambie en sus
términos, el Colegio Tecnológico de México se lo informará a la
dirección de correo electrónico que el titular de los datos asentó en el
formato.</p>
   

            {/* <h3>Tracking Technologies and Cookies</h3>
            <p>
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
              information. Tracking technologies used are beacons, tags, and scripts to collect and track information
              and to improve and analyze Our Service.
            </p>
            <p>
              You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However,
              if You do not accept Cookies, You may not be able to use some parts of our Service.
            </p>
            <p>
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or
              mobile device when You go offline, while Session Cookies are deleted as soon as You close your web
              browser. Learn more about cookies: <a href="https://www.termsfeed.com/blog/cookies/">All About Cookies</a>
              .
            </p>
            <p>We use both session and persistent Cookies for the purposes set out below:</p>
            <ul>
              <li>
                <p>
                  <strong>Necessary / Essential Cookies</strong>
                </p>
                <p>Type: Session Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies are essential to provide You with services available through the Website and to
                  enable You to use some of its features. They help to authenticate users and prevent fraudulent use of
                  user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We
                  only use these Cookies to provide You with those services.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
              </li>
              <li>
                <p>
                  <strong>Functionality Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                  remembering your login details or language preference. The purpose of these Cookies is to provide You
                  with a more personal experience and to avoid You having to re-enter your preferences every time You
                  use the Website.
                </p>
              </li>
            </ul>
            <p>
              For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
              Policy.
            </p>

            <h2>Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li>
                <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
              </li>
              <li>
                <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The
                Personal Data You provide can give You access to different functionalities of the Service that are
                available to You as a registered user.
              </li>
              <li>
                <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the
                purchase contract for the products, items or services You have purchased or of any other contract with
                Us through the Service.
              </li>
              <li>
                <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent
                forms of electronic communication, such as a mobile application's push notifications regarding updates
                or informative communications related to the functionalities, products or contracted services, including
                the security updates, when necessary or reasonable for their implementation.
              </li>
              <li>
                <strong>To provide You</strong> with news, special offers and general information about other goods,
                services and events which we offer that are similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
              </li>
              <li>
                <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
              </li>
            </ul>

            <p>We may share your personal information in the following situations:</p>

            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share Your personal information with Service Providers
                to monitor and analyze the use of our Service, to contact You.
              </li>
              <li>
                <strong>For Business transfers:</strong> We may share or transfer Your personal information in
                connection with, or during negotiations of, any merger, sale of Company assets, financing, or
                acquisition of all or a portion of our business to another company.
              </li>
              <li>
                <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and
                any other subsidiaries, joint venture partners or other companies that We control or that are under
                common control with Us.
              </li>
              <li>
                <strong>With Business partners:</strong> We may share Your information with Our business partners to
                offer You certain products, services or promotions.
              </li>
              <li>
                <strong>With other users:</strong> when You share personal information or otherwise interact in the
                public areas with other users, such information may be viewed by all users and may be publicly
                distributed outside. If You interact with other users or register through a Third-Party Social Media
                Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and
                description of Your activity. Similarly, other users will be able to view descriptions of Your activity,
                communicate with You and view Your profile.
              </li>
            </ul>

            <h2>Retention of Your Personal Data</h2>
            <p>
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in
              this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our
              legal obligations (for example, if we are required to retain your data to comply with applicable laws),
              resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained
              for a shorter period of time, except when this data is used to strengthen the security or to improve the
              functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>

            <h2>Transfer of Your Personal Data</h2>
            <p>
              Your information, including Personal Data, is processed at the Company's operating offices and in any
              other places where the parties involved in the processing are located. It means that this information may
              be transferred to — and maintained on — computers located outside of Your state, province, country or
              other governmental jurisdiction where the data protection laws may differ than those from Your
              jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of such information represents Your
              agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
              accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an
              organization or a country unless there are adequate controls in place including the security of Your data
              and other personal information.
            </p>

            <h2>Disclosure of Your Personal Data</h2>
            <h3>Business Transactions</h3>
            <p>
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred.
              We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
              Policy.
            </p>
            <h3>Law enforcement</h3>
            <p>
              Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do
              so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
            </p>
            <h3>Other legal requirements</h3>
            <p>
              The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of Users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h2>Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but remember that no method of transmission over
              the Internet, or method of electronic storage is 100% secure. While We strive to use commercially
              acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            <h1>Children's Privacy</h1>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally
              identifiable information from anyone under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We
              have collected Personal Data from anyone under the age of 13 without verification of parental consent, We
              take steps to remove that information from Our servers.
            </p>
            <p>
              If We need to rely on consent as a legal basis for processing Your information and Your country requires
              consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>

            <h1>Links to Other Websites</h1>
            <p>
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party
              link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy
              of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or practices of any
              third party sites or services.
            </p>

            <h1>Changes to this Privacy Policy</h1>
            <p>
              We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
              effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p> */}
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
