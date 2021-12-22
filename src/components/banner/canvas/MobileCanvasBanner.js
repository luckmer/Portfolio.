const MobileCanvasBanner = (renderingElement, state, size) => {
  const mobileCTX = renderingElement?.getContext("2d");
  const context = renderingElement?.getContext("2d");
  const fakeDraw = renderingElement?.getContext("2d");

  let mousePosition;

  let circles = new Circle(
    renderingElement.width / 2,
    renderingElement.height / 2,
    200,
    "red"
  );

  mobileCTX.globalCompositeOperation = "source-over";
  mobileCTX.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
  mobileCTX.fillRect(0, 0, size.width, size.height);

  function draw(currentX, currentY) {
    mobileCTX.globalCompositeOperation = "source-over";
    mobileCTX.globalCompositeOperation = "source-over";
    mobileCTX.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
    mobileCTX.fillRect(0, 0, size.width, size.height);
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
};

export default MobileCanvasBanner;
