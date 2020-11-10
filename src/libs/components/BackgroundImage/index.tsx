// libs
import React, { useEffect, useState } from "react";

type PROPS = {
  /** children component */
  children?: JSX.Element | JSX.Element[];
  /** className */
  className?: string;
  /** bakcground image url/src */
  src: string;
  /** placeholder on image loading - can be other images / backgroundColor */
  placeholder?:
  | string
  | {
    backgroundColor: string;
  };
};
/**
 * BackgroundImage
 */
export const BackgroundImage = ({
  src,
  placeholder = {
    backgroundColor: "#AAAAAA",
  },
  children,
  className,
}: PROPS) => {
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
