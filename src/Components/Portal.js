import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("portal-root");

const Portal = ({ coords, closePortal, children, delay }) => {
  const ref = useRef(null);
  const [styles, setStyles] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const { top, left, height, width } = coords;
    setStyles({
      top: top > height ? top + height / 2 - ref.current.clientHeight / 2 : top,
      left:
        left > width ? left + width / 2 - ref.current.clientWidth / 2 : left,
      position: "absolute",
    });
  }, [coords, ref.current]);

  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        closePortal();
      }, delay);
    }
  }, [isClosing, closePortal, delay]);

  const onMouseLeave = () => {
    if (delay) setIsClosing(true);
    else closePortal();
  };

  return createPortal(
    <div style={styles} onMouseLeave={onMouseLeave} ref={ref}>
      <div className={isClosing ? "portal__zoomout" : "portal__zoomin"}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
export default Portal;
