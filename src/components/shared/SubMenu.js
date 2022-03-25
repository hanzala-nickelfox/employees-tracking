import * as React from "react";
import { NavLink } from "react-router-dom";

export default function DisabledTabs() {
  const menuList = [
    {
      itemName: "Projects",
      ItemLink: "projects"
    },
    {
      itemName: "Learning",
      ItemLink: "learning"
    },
    {
      itemName: "Festivals",
      ItemLink: "festivals"
    },
    {
      itemName: "Personal",
      ItemLink: "personal"
    }
  ];
  const style = {
    display: "flex"
  };
  return (
    <>
      <div style={style}>
        {menuList.map((item) => {
          return (
            <NavLink key={`item/${item.ItemLink}`} to={item.ItemLink}>
              {item.itemName}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
