import React, {
  useState,
  useContext,
  memo,
  useEffect,
  useCallback
} from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//store
import { AppContext } from "../../store/store";
import { index } from "../../api";

//icons
import { MdHideImage } from "react-icons/md";

//styles
import {
  Span,
  SpanFlex,
  Li,
  BannerContainer,
  FlexDiv
} from "../styles/hamburger.styles";
import {
  Section,
  DivContainer,
  HeaderSpacer,
  ImgSpacer,
  Img,
  ImgInformation
} from "../styles/projects.style";

//animaitons
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ImgVariant,
  technologyVariant,
  projectVariants
} from "../../animations/projectVariants";

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const Projects = () => {
  const [entered, setEntered] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleMouseEnter = useCallback(
    (name) => {
      dispatch({ type: "ON_PROJECTS", payload: true });
      setEntered(name);
    },
    [dispatch]
  );

  const handleMouseOut = useCallback(() => {
    dispatch({ type: "ON_PROJECTS", payload: false });
    setEntered("");
  }, [dispatch]);

  const work = sliceIntoChunks(index, 2);

  const Entered = React.useMemo(() => entered, [entered]);

  const mousePanel = {
    Entered,
    handleMouseEnter,
    handleMouseOut
  };

  const [scheamaZero, inSchemaZero] = useInView();
  const [scheamaOne, inSchemaOne] = useInView();
  const [schemaTwo, inSchemaTwo] = useInView();
  const [schemaThree, inSchemaThree] = useInView();
  const [scheamaFour, inSchemaFour] = useInView();

  const workZero = useAnimation();
  const workOne = useAnimation();
  const workTwo = useAnimation();
  const workThree = useAnimation();
  const workFour = useAnimation();

  useEffect(() => {
    inSchemaZero ? workZero.start("visible") : workZero.start("hidden");
  }, [workZero, inSchemaZero]);

  useEffect(() => {
    inSchemaOne ? workOne.start("visible") : workOne.start("hidden");
  }, [workOne, inSchemaOne]);

  useEffect(() => {
    inSchemaTwo ? workTwo.start("visible") : workTwo.start("hidden");
  }, [workTwo, inSchemaTwo]);

  useEffect(() => {
    inSchemaThree ? workThree.start("visible") : workThree.start("hidden");
  }, [workThree, inSchemaThree]);

  useEffect(() => {
    inSchemaFour ? workFour.start("visible") : workFour.start("hidden");
  }, [workFour, inSchemaFour]);

  return (
    <div>
      <Schema
        play={workZero}
        Ref={scheamaZero}
        index={1}
        data={work[0]}
        mousePanel={mousePanel}
      />
      <Schema
        play={workOne}
        Ref={scheamaOne}
        index={2}
        data={work[1]}
        mousePanel={mousePanel}
      />
      <Schema
        play={workTwo}
        Ref={schemaTwo}
        index={3}
        data={work[2]}
        mousePanel={mousePanel}
      />
      <Schema
        play={workThree}
        Ref={schemaThree}
        index={4}
        data={work[3]}
        mousePanel={mousePanel}
      />
      <Schema
        play={workFour}
        Ref={scheamaFour}
        index={5}
        data={work[4]}
        mousePanel={mousePanel}
      />
    </div>
  );
};

const Schema = memo((props) => {
  const { play, Ref, index, data, mousePanel } = props;
  const { Entered, handleMouseEnter, handleMouseOut } = mousePanel;

  return (
    <div key={index} ref={Ref}>
      {data.map((el, i) => (
        <Section key={i}>
          <DivContainer>
            <HeaderSpacer>
              <Li hidetext={false.toString()}>
                <SpanFlex className={Entered === el.name ? "rotate" : ""}>
                  <a
                    href={el.link}
                    onMouseEnter={() => handleMouseEnter(el.name)}
                    onMouseLeave={handleMouseOut}
                  >
                    <Text name={el.name} entered={Entered} play={play} />
                  </a>
                  <ImgSpacer>
                    {el.img ? (
                      <Img
                        animate={Entered === el.name ? "visible" : "hidden"}
                        initial="hidden"
                        variants={ImgVariant}
                        src={el.img}
                        alt=""
                      />
                    ) : (
                      <ImgInformation
                        animate={Entered === el.name ? "visible" : "hidden"}
                        initial="hidden"
                        variants={ImgVariant}
                      >
                        <MdHideImage />
                      </ImgInformation>
                    )}
                  </ImgSpacer>
                </SpanFlex>
              </Li>
              <BannerContainer
                animate={play}
                initial="hidden"
                variants={technologyVariant}
                custom={0}
              >
                <BannerRowCenter title={el.tech} speed={2} type={true} />
              </BannerContainer>
            </HeaderSpacer>
          </DivContainer>
        </Section>
      ))}
    </div>
  );
});

const Text = memo(({ name, entered, play }) => {
  return [...name].map((text, i) => {
    return (
      <FlexDiv
        key={i}
        animate={play}
        initial="hidden"
        variants={projectVariants}
        custom={Math.abs(i / 20)}
      >
        <Span
          className={entered === name ? "rotate" : ""}
          changecolor={true.toString()}
          id={i}
        >
          {text === " " ? "-" : text}
        </Span>
      </FlexDiv>
    );
  });
});

export default memo(Projects);
