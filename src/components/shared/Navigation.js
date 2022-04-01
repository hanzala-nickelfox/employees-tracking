import React from "react";

const Navigation = (props) => {
  const { children, style } = props;
  return <div style={style}>{children}</div>;
};

export default Navigation;
