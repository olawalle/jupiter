import React from "react";

import search from "../../assets/search.svg";

import "./RightAddon.scss";

function RightAddon({ placeholder }: { placeholder: string }) {
  return (
    <div className="right-addon">
      <input type="text" placeholder={placeholder} />
      <img src={search} alt="" />
    </div>
  );
}

export default RightAddon;
