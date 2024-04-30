import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Img({ src, className }) {
  return (
    <LazyLoadImage
      className={className || ""}
      alt=""
      effect="blur"
      src={src}
    ></LazyLoadImage>
  );
}

export default Img;
