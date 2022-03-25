import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

export default function DisabledTabs() {
  const [value, setValue] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (value == 0) {
      let path = `/activities/projects`;
      navigate(path);
    }
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      let path = `/activities/projects`;
      navigate(path);
      newValue = 0;
    } else if (newValue === 1) {
      let path = `/activities/learning`;
      navigate(path);
      newValue = 1;
    } else if (newValue === 2) {
      let path = `/activities/festivals`;
      navigate(path);
      newValue = 3;
    } else {
      let path = `/activities/personal`;
      navigate(path);
      newValue = 0;
    }
  };

  return (
    <>
      <Tabs
        xl={{ justifyContent: "center" }}
        anchorOrigin={{
          backgroundColor: "red",
          color: "red"
        }}
        centered={true}
        textColor="secondary"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="tabs example">
        <Tab label="Projects" />
        <Tab label="Learning" />
        <Tab label="Festivals" />
        <Tab label="Personal" />
      </Tabs>
    </>
  );
}
