import React, { ReactNode } from "react";

const Card = (children: ReactNode, className: string) => (
  <article className={className}>{children}</article>
);

export default Card;
