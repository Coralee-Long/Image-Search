import React from "react";
import { useState } from "react";

const ImageCard = ({ item }) => {
  const [spansState, setSpansState] = useState(0);

  const imgElement = React.useRef(0);

  const myHeight = () => {
    const height = imgElement.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpansState(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spansState}` }}>
      <img
        src={item.urls.regular}
        alt={item.description}
        ref={imgElement}
        onLoad={myHeight}
      />
    </div>
  );
};

export default ImageCard;
