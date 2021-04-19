import React, { useState } from "react";
import { imgBaseUrl } from "../Service";
import { debounce } from "../util";
import Portal from "./Portal";
import Preview from "./Preview";

let left;
const mouseMoveHandler = (e, setCoords, setShowModal) => {
  if (left === e.target.offsetLeft) {
    setCoords({
      left: e.target.offsetLeft,
      top: e.target.offsetTop,
      height: e.target.clientHeight,
      width: e.target.clientWidth
    });
    setShowModal(true);
  }
};

const Card = ({ name, imgSrc }) => {
  const [showModal, setShowModal] = useState(false);
  const [coords, setCoords] = useState({});

  return (
    <div
      onMouseEnter={(e) => {
        left = e.target.offsetLeft;
      }}
      onMouseMove={debounce(
        (e) => mouseMoveHandler(e, setCoords, setShowModal),
        500
      )}
    >
      {showModal ? (
        <Portal coords={coords} closePortal={() => setShowModal(false)}>
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
