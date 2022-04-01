import React from "react";
import Card from "@mui/material/Card";

const BasicCard = (props) => {
  const { children, style } = props;
  return <Card style={style}>{children}</Card>;
};

export default BasicCard;
