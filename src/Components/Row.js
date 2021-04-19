import React, { useEffect, useState } from "react";
import fetchContent from "../Service";
import { parseResponse } from "../Service/util";
import Card from "./Card";

const Row = ({ title, genre }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchContent(genre);
      const t = parseResponse(res?.results);

      setContent(t);
    })();
  }, [genre]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="cards">
        {content.map((c) => (
          <Card {...c} key={c.imgSrc} />
        ))}
      </div>
    </div>
  );
};

export default Row;
