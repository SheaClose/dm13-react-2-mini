import React from "react";

export default function FamilyChanger(props) {
  return (
    <select onChange={props.update} className="dropDownContainer">
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  );
}
