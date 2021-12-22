import React, { useEffect, useContext, useRef, useState } from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//hooks
import useWindowSize from "../../hooks/useWindowSize";

//store
import { AppContext } from "../../store/store";

//styles
import {
  TextAnimation,
  BannerMain,
  Canvas,
  ScrollDown
} from "../styles/banner.styled";

const Banner = () => {
  const { state, functions } = useContext(AppContext);
  const [mobile, setMobile] = useState(false);
  const { handleHoverCursor, handleOutMouse } = functions;
  const ref = useRef(null);
  const MOBILE = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    setMobile(size.width <= 700 ? true : false);
  }, [size.width]);

  useEffect(() => {
    let renderingElement = ref.current;

    if (size.width <= 700) return;
    if (!renderingElement) return;
    if (renderingElement.width <= 700 || size.width <= 700) return;

    let drawingCtx = renderingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");
    let mouse = { x: 0, y: 0 };
    let moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener("mouseup", (ev) => {
      moving = false;
      mouse.x = ev.pageX - renderingElement.offsetLeft;
      mouse.y = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mouseover", (ev) => {
      moving = true;
      mouse.x = ev.pageX - renderingElement.offsetLeft;
      mouse.y = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("click", (ev) => {
      mouse.x = ev.pageX - renderingElement.offsetLeft;
      mouse.y = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mousemove", (e) => {
      if (moving) {
        let n = 50;
        let widthStroke = n * (size.width / size.height);

        drawingCtx.globalCompositeOperation = "destination-out";
        let currentX = e.pageX - renderingElement.offsetLeft;
        let currentY = e.pageY - renderingElement.offsetTop;

        drawingCtx.lineJoin = "round";
        drawingCtx.beginPath();
        drawingCtx.moveTo(mouse.x, mouse.y);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = widthStroke;
        drawingCtx.stroke();

        mouse = { x: currentX, y: currentY };
      }
    });

    if (state.switchTheme) {
      renderingCtx.clearRect(0, 0, size.width, size.height);
      renderingCtx.rect(0, 0, size.width, size.height);
      renderingCtx.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
      renderingCtx.fill();
    }
  }, [mobile, size.width, size.height, state.switchTheme]);

  useEffect(() => {
    let renderingElement = MOBILE.current;

    if (!renderingElement) return;

    let renderingCtx = renderingElement.getContext("2d");
    let context = renderingElement.getContext("2d");
    const fakeDraw = renderingElement.getContext("2d");

    let mousePosition;

    let circles = new Circle(
      renderingElement.width / 2,
      renderingElement.height / 2,
      200,
      "red"
    );

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    function draw(currentX, currentY) {
      renderingCtx.globalCompositeOperation = "source-over";
      renderingCtx.globalCompositeOperation = "source-over";
      renderingCtx.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
      renderingCtx.fillRect(0, 0, size.width, size.height);
      circles.fakeBlock();
      circles.draw(currentX, currentY);
    }

    let draggable = false;

    function Circle(x, y, r, fill, stroke) {
      this.startingAngle = 0;
      this.endAngle = 2 * Math.PI;
      this.x = x;
      this.y = y;
      this.r = r;

      this.fill = fill;
      this.stroke = stroke;

      this.draw = function (currentX, currentY) {
        context.globalCompositeOperation = "destination-out";

        context.lineJoin = "round";
        context.fillStyle = "white";

        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
        context.strokeStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
        context.font = "bold 2vmin Calibri";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("drag", this.x, this.y);
        context.moveTo(this.x, this.y);
        context.lineTo(currentX, currentY);
        context.lineWidth = 2;
        context.closePath();
        context.fill();
        context.stroke();
      };

      this.fakeBlock = () => {
        fakeDraw.globalCompositeOperation = "exclusion";
        fakeDraw.lineJoin = "round";
        fakeDraw.fillStyle = "white";
        fakeDraw.beginPath();
        fakeDraw.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
        fakeDraw.strokeStyle = state.switchTheme ? "#fff" : "#ffff";
        fakeDraw.font = "bold 2vmin Calibri";
        fakeDraw.textAlign = "center";
        fakeDraw.textBaseline = "middle";
        fakeDraw.fillText("drag", this.x, this.y);
        fakeDraw.lineWidth = 5;
        fakeDraw.closePath();
        fakeDraw.fill();
        fakeDraw.stroke();
      };
    }

    const handleMouseStart = (e) => {
      let touch = e.touches[0];
      let mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });

      if (intersects(circles, mouseEvent)) {
        draggable = true;
        document.body.style.overflow = "hidden";
      } else draggable = false;

      renderingElement.dispatchEvent(mouseEvent);
    };

    const handleTouchEnd = () => {
      let mouseEvent = new MouseEvent("mouseup", {});

      renderingElement.dispatchEvent(mouseEvent);

      draggable = false;
    };

    const handleTouchMove = (e) => {
      let touch = e.touches[0];
      let mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });

      renderingElement.dispatchEvent(mouseEvent);
    };

    const handleFingerLocation = (e) => {
      mousePosition = { x: e.clientX, y: e.clientY };

      if (draggable) {
        let currentX = e.pageX - renderingElement.offsetLeft;
        let currentY = e.pageY - renderingElement.offsetTop;

        circles.x = mousePosition.x;
        circles.y = mousePosition.y;

        document.body.style.overflow = "hidden";
        draw(currentX, currentY);
        return;
      } else document.body.style.overflow = "unset";
    };

    function intersects(circle, mousePosition) {
      var areaX = mousePosition.clientX - circle.x;
      var areaY = mousePosition.clientY - circle.y;
      return areaX * areaX + areaY * areaY <= circle.r * circle.r;
    }

    renderingElement.addEventListener("touchstart", handleMouseStart, false);
    renderingElement.addEventListener("touchend", handleTouchEnd, false);
    renderingElement.addEventListener("touchmove", handleTouchMove, false);
    renderingElement.addEventListener("mousemove", handleFingerLocation, false);

    draw();
  }, [MOBILE, size.width, size.height, state.switchTheme]);

  return (
    <BannerMain>
      <TextAnimation>
        <BannerRowCenter title="experience" />
      </TextAnimation>
      <TextAnimation>
        <BannerRowCenter title="inspirations" />
      </TextAnimation>
      <Canvas
        width={size.width}
        height={size.height}
        ref={mobile ? MOBILE : ref}
        onMouseEnter={() => handleHoverCursor()}
        onMouseLeave={handleOutMouse}
      />
      <ScrollDown>MORE</ScrollDown>
    </BannerMain>
  );
};

export default Banner;
