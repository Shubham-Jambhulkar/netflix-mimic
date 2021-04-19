import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("portal-root");
const previewContainer = { height: 360, width: 320 };

const Portal = ({ coords, closePortal, children }) => {
  const [styles, setStyles] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const { top, left, height, width } = coords;
    setStyles({
      top: top > height ? top + height / 2 - previewContainer.height / 2 : top,
      left: left > width ? left + width / 2 - previewContainer.width / 2 : left,
      position: "absolute",
      "--transform-origin": `${left < width ? "left " : ""}bottom`,
      "--preview__container-height": `${previewContainer.height}px`,
      "--preview__container-width": `${previewContainer.width}px`
    });
  }, [coords]);

  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        closePortal();
      }, 2900);
    }
  }, [isClosing, closePortal]);

  return createPortal(
    <div style={styles} onMouseLeave={() => setIsClosing(true)}>
      <div className={isClosing ? "portal__zoomout" : "portal__zoomin"}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
export default Portal;
