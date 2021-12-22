const PcCanvasBanner = (
  renderingCtx,
  state,
  size,
  renderingElement,
  drawingCtx
) => {
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
};
export default PcCanvasBanner;
