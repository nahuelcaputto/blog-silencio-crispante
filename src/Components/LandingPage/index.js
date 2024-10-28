import React from "react";
import Textos from "../Textos";

export default function Landing() {
  return (
    <div
      className="bg-black text-white landing-page"
      style={{ width: "100%", margin: "auto" }}
    >
      <div className="titulo-principal">
        <h1>SILENCIO CRISPANTE</h1>
      </div>

      <Textos />
    </div>
  );
}
