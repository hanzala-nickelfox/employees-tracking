import { Button } from "@mui/material";
import React from "react";

function BasicBtn(props) {
  return (
    <Button
      className="w-100"
      type={props.type}
      variant={props.variant}
      onClick={props.handleClick}>
      {props.text}
    </Button>
  );
}

export default BasicBtn;
