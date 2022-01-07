import React, { useContext, useEffect } from "react";

//store
import { AppContext } from "../../store/store";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//styles
import { TextAnimation } from "../styles/banner.styled";
import styled from "styled-components";
import {
  Footer,
  H3,
  ContactPanel,
  H1,
  Button,
  UnderLine
} from "../styles/Contact.styled";

//animations
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { footerVariant, ContactVariant } from "../../animations/variants";

const Contact = () => {
  const { functions } = useContext(AppContext);
  const { handleHoverCursor, handleOutMouse } = functions;
  const [mainContact, inContactView] = useInView();
  const contact = useAnimation();
  const ref = React.useRef();

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    inContactView && contact.start("visible");
  }, [contact, inContactView]);

  const setRefs = React.useCallback(
    (node) => {
      ref.current = node;
      mainContact(node);
    },
    [mainContact]
  );

  return (
    <Footer ref={setRefs}>
      <H3 variants={footerVariant} animate={contact} initial="hidden">
        GET IN TOUCH
      </H3>
      <ContactPanel
        onMouseEnter={handleHoverCursor}
        onMouseOut={handleOutMouse}
      >
        <a href="mailto:https://piotrsebastiangoik@gmail.com">
          <ContactSlicer>
            {["LET'S", "TALK"].map((el, i) => (
              <HeaderDiv key={i}>
                {[...el].map((text, i) => (
                  <H1
                    key={i}
                    custom={Math.abs(i / 9)}
                    variants={ContactVariant}
                    animate={contact}
                    initial="hidden"
                  >
                    {text}
                  </H1>
                ))}
              </HeaderDiv>
            ))}
          </ContactSlicer>
        </a>
        <Button
          onClick={scrollToTop}
          onMouseEnter={handleHoverCursor}
          onMouseOut={handleOutMouse}
          variants={footerVariant}
          animate={contact}
          initial="hidden"
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

export default React.memo(Contact);

const HeaderDiv = styled.div`
  display: flex;
  margin: 0 2vmin;
  position: relative;
`;

const ContactSlicer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
