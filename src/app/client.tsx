import React, { ReactNode } from "react";
import Loading from "./loading";

function Client({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default Client;
