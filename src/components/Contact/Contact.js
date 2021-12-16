import React from "react";
import {
  Footer,
  H3,
  ContactPanel,
  H1,
  Button,
  UnderLine
} from "../styles/Contact.styled";

const Contact = () => {
  return (
    <Footer>
      <H3>GET IN TOUCH</H3>
      <ContactPanel>
        <H1>CONTACT</H1>
        <Button>(back to top)</Button>
      </ContactPanel>
      <UnderLine>
        <p>2021</p>
      </UnderLine>
    </Footer>
  );
};

export default Contact;
