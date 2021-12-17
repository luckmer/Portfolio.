import React, { useContext } from "react";
import { AppContext } from "../../store/store";
import BannerRowCenter from "../helper/BannerGenerator";
import { TextAnimation } from "../styles/banner.styled";
import {
  Footer,
  H3,
  ContactPanel,
  H1,
  Button,
  UnderLine
} from "../styles/Contact.styled";

const Contact = () => {
  const { functions } = useContext(AppContext);
  const { handleHoverCursor, handleOutMouse } = functions;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Footer>
      <H3>GET IN TOUCH</H3>
      <ContactPanel
        onMouseEnter={handleHoverCursor}
        onMouseOut={handleOutMouse}
      >
        <a href="mailto:https://piotrsebastiangoik@gmail.com">
          <H1>CONTACT</H1>
        </a>
        <Button
          onClick={scrollToTop}
          onMouseEnter={handleHoverCursor}
          onMouseOut={handleOutMouse}
        >
          (back to top)
        </Button>
      </ContactPanel>
      <UnderLine>
        <TextAnimation>
          <BannerRowCenter title="contact" speed={2} />
        </TextAnimation>
      </UnderLine>
    </Footer>
  );
};

export default Contact;
