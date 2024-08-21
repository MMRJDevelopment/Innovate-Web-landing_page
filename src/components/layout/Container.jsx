import React from "react";

const Container = ({ className, children }) => {
  return <div className={`${className} w-[1170px] m-auto`}>{children}</div>;
};

export default Container;
