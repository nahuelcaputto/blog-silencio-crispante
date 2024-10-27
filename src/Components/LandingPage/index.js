import React from "react";
import { Element } from "react-scroll";
import Textos from "../Textos";

export default function Landing() {
  return (
    <div
      className="bg-black text-white"
      style={{ width: "100%", margin: "auto" }}
    >
      <div className="presentation">
        <h1>
          Silencio Crispante<strong className="pres-dot">.</strong>
        </h1>
      </div>

      <Textos />
    </div>
  );
}
