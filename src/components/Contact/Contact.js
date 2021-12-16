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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Footer>
      <H3>GET IN TOUCH</H3>
      <ContactPanel>
        <a href="mailto:https://piotrsebastiangoik@gmail.com">
          <H1>CONTACT</H1>
        </a>
        <Button onClick={scrollToTop}>(back to top)</Button>
      </ContactPanel>
      <UnderLine>
        <p>2021</p>
      </UnderLine>
    </Footer>
  );
};

export default Contact;
