import React, { useContext } from "react";

//store
import { AppContext } from "../../store/store";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//styles
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
          <H1>LET'S TALK</H1>
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
          <BannerRowCenter title="let's-talk" speed={2} />
        </TextAnimation>
      </UnderLine>
    </Footer>
  );
};

export default Contact;
