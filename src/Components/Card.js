import React, { useState } from "react";
import { imgBaseUrl } from "../Service";
import Portal from "./Portal";
import Preview from "./Preview";

const Card = ({ name, imgSrc }) => {
  const [showModal, setShowModal] = useState(false);
  const [coords, setCoords] = useState({});

  return (
    <div
      onMouseEnter={(e) => {
        setCoords({
          left: e.target.offsetLeft,
          top: e.target.offsetTop,
          height: e.target.clientHeight,
          width: e.target.clientWidth,
        });
        setShowModal(true);
      }}
    >
      {showModal ? (
        <Portal
          coords={coords}
          closePortal={() => setShowModal(false)}
          delay={2900}
        >
          <Preview>
            <img
              src={`${imgBaseUrl}${imgSrc}`}
              alt={name}
              className="card popup__poster"
            />
            <div className="preview__content">{name}</div>
          </Preview>
        </Portal>
      ) : null}

      <img src={`${imgBaseUrl}${imgSrc}`} alt={name} className="card" />
    </div>
  );
};

export default Card;
