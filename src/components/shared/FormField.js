import { TextField } from "@mui/material";
import React from "react";

function FormField(props) {
  return (
    <>
      <TextField
        className="w-100"
        id={props.id}
        label={props.label}
        variant={props.variant}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default FormField;
