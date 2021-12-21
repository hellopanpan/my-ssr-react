import React, { useRef } from "react";

export const useGetStyle = (staticContext, styles) => {
  const ref = useRef(false);
  if (!ref.current) {
    if (staticContext) staticContext.css.push(styles._getCss());
    ref.current = true;
  }
};
