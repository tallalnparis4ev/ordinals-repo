import React from "react";
import "./ImageBackground.css";

interface ImageBackgroundProps {
  imageData: string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({ imageData }) => {
  return (
    <div
      className="abcd"
      style={{ backgroundImage: `url(${imageData})` }}
    ></div>
  );
};

export default ImageBackground;
