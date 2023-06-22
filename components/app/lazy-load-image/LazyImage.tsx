import Image from "next/image";
import React from "react";

interface ILazyImageProps {
  url: string;
  width: number;
  height: number;
}

const LazyImage = ({ url, width, height }: ILazyImageProps) => {
  return (
    <Image
      src={url}
      alt={url}
      width={width}
      height={height}
      style={{
        objectFit: "cover",
        borderRadius: "10px",
      }}
    />
  );
};

export default LazyImage;
