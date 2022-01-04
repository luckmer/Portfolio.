import React, {
  useState,
  useContext,
  memo,
  useCallback,
  useRef,
  Fragment
} from "react";
import hoverEffect from "hover-effect";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//store
import { AppContext } from "../../store/store";
import { index } from "../../api";

//styles
import {
  Span,
  SpanFlex,
  Li,
  BannerContainer,
  FlexDiv
} from "../styles/hamburger.styles";
import { Section, DivContainer, HeaderSpacer } from "../styles/projects.style";

//animaitons
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  technologyVariant,
  projectVariants
} from "../../animations/projectVariants";

//images
import battleship from "../../images/hoverEffect/battleShip.png";
import movie_app from "../../images/hoverEffect/movie_app.png";
import note_app from "../../images/hoverEffect/note_app.png";
import calendar from "../../images/hoverEffect/calendar.png";
import pac_man from "../../images/hoverEffect/pac_man.png";
import checker from "../../images/hoverEffect/checker.png";
import tetris from "../../images/hoverEffect/tetris.png";
import chess from "../../images/hoverEffect/chess.png";
import bump from "../../images/hoverEffect/bump.png";
import game from "../../images/hoverEffect/2048.png";

const sliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const Projects = () => {
  const [entered, setEntered] = useState("");
  const [ID, setID] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const workLocation = useRef(null);

  const handleMouseEnter = useCallback(
    (name) => {
      setID(name);
      dispatch({ type: "ON_PROJECTS", payload: true });
      setEntered(name);
    },

    [dispatch]
  );

  const handleMouseOut = useCallback(() => {
    dispatch({ type: "ON_PROJECTS", payload: false });
    setEntered("");
    setID("");
  }, [dispatch]);

  const work = sliceIntoChunks(index, 2);

  const Entered = React.useMemo(() => entered, [entered]);

  const mousePanel = {
    Entered,
    handleMouseEnter,
    handleMouseOut
  };

  const [scheamaZero, inSchemaZero] = useInView();
  const scheamaZeroRef = React.useRef();
  const [scheamaOne, inSchemaOne] = useInView();
  const scheamaOneRef = React.useRef();
  const [schemaTwo, inSchemaTwo] = useInView();
  const schemaTwoRef = React.useRef();
  const [schemaThree, inSchemaThree] = useInView();
  const schemaThreeRef = React.useRef();
  const [scheamaFour, inSchemaFour] = useInView();
  const scheamaFourRef = React.useRef();

  const workZero = useAnimation();
  const workOne = useAnimation();
  const workTwo = useAnimation();
  const workThree = useAnimation();
  const workFour = useAnimation();

  React.useEffect(() => {
    inSchemaZero && workZero.start("visible");
  }, [workZero, inSchemaZero]);

  React.useEffect(() => {
    inSchemaOne && workOne.start("visible");
  }, [workOne, inSchemaOne]);

  React.useEffect(() => {
    inSchemaTwo && workTwo.start("visible");
  }, [workTwo, inSchemaTwo]);

  React.useEffect(() => {
    inSchemaThree && workThree.start("visible");
  }, [workThree, inSchemaThree]);

  React.useEffect(() => {
    inSchemaFour && workFour.start("visible");
  }, [workFour, inSchemaFour]);

  React.useEffect(() => {
    const design = {
      intensity: 0.4,
      image1: " ",
      displacementImage: bump,
      speedIn: 2,
      speedOut: 2,
      angle: (Math.PI / Math.random()) * 150,
      imagesRatio: 0.5
    };

    new hoverEffect({
      parent: document.querySelector("#calendar"),
      image2: calendar,
      ...design
    });
    new hoverEffect({
      parent: document.querySelector("#videoapp"),
      image2: movie_app,
      ...design
    });
    new hoverEffect({
      parent: document.querySelector("#pacman"),
      image2: pac_man,
      ...design
    });
    new hoverEffect({
      parent: document.querySelector("#checkers"),
      image2: checker,
      ...design,
      imagesRatio: 0.37
    });
    new hoverEffect({
      parent: document.querySelector("#chess"),
      image2: chess,
      ...design,
      imagesRatio: 0.37
    });
    new hoverEffect({
      parent: document.querySelector("#noteapp"),
      image2: note_app,
      ...design,
      imagesRatio: 0.3
    });
    new hoverEffect({
      parent: document.querySelector("#tetris"),
      image2: tetris,
      ...design
    });
    new hoverEffect({
      parent: document.querySelector("#battleship"),
      image2: battleship,
      ...design
    });
    new hoverEffect({
      parent: document.querySelector("#game"),
      image2: game,
      ...design
    });
  }, []);

  const Zeroscheama = React.useCallback(
    (node) => {
      scheamaZeroRef.current = node;
      scheamaZero(node);
    },
    [scheamaZero]
  );
  const Onescheama = React.useCallback(
    (node) => {
      scheamaOneRef.current = node;
      scheamaOne(node);
    },
    [scheamaOne]
  );
  const Twoschema = React.useCallback(
    (node) => {
      schemaTwoRef.current = node;
      schemaTwo(node);
    },
    [schemaTwo]
  );
  const Threeschema = React.useCallback(
    (node) => {
      schemaThreeRef.current = node;
      schemaThree(node);
    },
    [schemaThree]
  );
  const Fourscheama = React.useCallback(
    (node) => {
      scheamaFourRef.current = node;
      scheamaFour(node);
    },
    [scheamaFour]
  );

  const scrollToProjects = React.useMemo(
    () => state.scrollToProjects,
    [state.scrollToProjects]
  );

  React.useEffect(() => {
    if (scrollToProjects) {
      window.scrollTo(0, workLocation.current.offsetTop);
      document.body.style.overflow = "unset";
      dispatch({ type: "SCROLL_ON", payload: false });
    }
  }, [scrollToProjects, dispatch]);

  return (
    <Fragment>
      <div ref={workLocation}>
        <DisplaySchemaContent
          play={workZero}
          Ref={Zeroscheama}
          index={1}
          data={work[0]}
          mousePanel={mousePanel}
        />

        <DisplaySchemaContent
          play={workOne}
          Ref={Onescheama}
          index={2}
          data={work[1]}
          mousePanel={mousePanel}
        />
        <DisplaySchemaContent
          play={workTwo}
          Ref={Twoschema}
          index={3}
          data={work[2]}
          mousePanel={mousePanel}
        />
        <DisplaySchemaContent
          play={workThree}
          Ref={Threeschema}
          index={4}
          data={work[3]}
          mousePanel={mousePanel}
        />
        <DisplaySchemaContent
          play={workFour}
          Ref={Fourscheama}
          index={5}
          data={work[4]}
          mousePanel={mousePanel}
        />
      </div>
    </Fragment>
  );
};

export default memo(Projects);

const DisplaySchemaContent = memo((props) => {
  const { play, Ref, index, data, mousePanel } = props;
  const { Entered, handleMouseEnter, handleMouseOut } = mousePanel;

  const fixId = (name) =>
    name
      .split("")
      .filter((e) => e.trim().length)
      .join("");

  return (
    <div key={index} ref={Ref}>
      {data.map((el, i) => (
        <Fragment key={i}>
          <Section>
            <DivContainer>
              <HeaderSpacer>
                <Li
                  hidetext={false.toString()}
                  id={fixId(el.name) === "2048" ? "game" : fixId(el.name)}
                >
                  <SpanFlex className={Entered === el.name ? "rotate" : ""}>
                    <a
                      href={el.link}
                      onMouseEnter={() => handleMouseEnter(el.name)}
                      onMouseLeave={() => handleMouseOut()}
                    >
                      <Text name={el.name} entered={Entered} play={play} />
                    </a>
                  </SpanFlex>
                </Li>
                <BannerContainer
                  animate={play}
                  initial="hidden"
                  variants={technologyVariant}
                >
                  <BannerRowCenter title={el.tech} speed={2} type={true} />
                </BannerContainer>
              </HeaderSpacer>
            </DivContainer>
          </Section>
        </Fragment>
      ))}
    </div>
  );
});

const Text = memo(({ name, entered, play }) => {
  const test = React.useMemo(() => [...name], [name]);

  return test.map((text, i) => {
    return (
      <FlexDiv
        key={i}
        animate={play}
        initial="hidden"
        variants={projectVariants}
        custom={Math.abs(i / 12)}
      >
        <Span
          className={entered === name ? "rotate" : ""}
          changecolor={true.toString()}
        >
          {text}
        </Span>
      </FlexDiv>
    );
  });
});
