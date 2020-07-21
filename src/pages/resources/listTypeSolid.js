import React from "react";
import { BulletSolid } from "./imageImports";

// items added to list
export const items = [
  "Blow on a whistle in bursts of three until help arrives.",
  "Flick a light on and off until help arrives.",
  "Shine a flashlight in a dark area.",
  "Yell loudly.",
  "Tap on piping or other objects that can carry sound.",
];

const ListTypeSolid = () => {
  return (
    <ul className="list-type-solid">
      {items.map((item, index) => {
        return (
          <li className="list-item" key={index}>
            <BulletSolid className="bullet-solid" />
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ListTypeSolid;
