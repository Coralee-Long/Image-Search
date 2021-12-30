import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const imagesMapped = images.map((item) => {
    return <ImageCard key={item.id} item={item} />;
  });

  return (
    <>
      <div className="image-list">{imagesMapped}</div>
    </>
  );
};

export default ImageList;
