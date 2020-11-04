// libs
import React, { useEffect, useState } from "react";

export const BackgroundImage = ({
  src,
  placeholder = {
    backgroundColor: "#AAAAAA",
  },
  children,
  className,
}: {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  src: string;
  placeholder?:
  | string
  | {
    backgroundColor: string;
  };
}) => {
  const [sourceLoaded, setSourceLoaded] = useState("");
  const backgroundStyle = () => {
    if (!sourceLoaded && typeof placeholder === "string")
      return {
        backgroundImage: `url(${placeholder})`,
      };
    if (!sourceLoaded && typeof placeholder === "object") return placeholder;

    return {
      backgroundImage: `url(${sourceLoaded})`,
    };
  };

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return (
    <div className={className} style={backgroundStyle()}>
      {children}
    </div>
  );
};
