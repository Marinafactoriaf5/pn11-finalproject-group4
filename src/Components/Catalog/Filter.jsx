import React from "react";
import "./Filter.css";

function Filter({ handleFilter }) {
  return (
    <div className="filterDiv">
      <button value="Familiar" className="filterBtn" onClick={handleFilter}>
        Familiar
      </button>
      <button value="Dia" className="filterBtn" onClick={handleFilter}>
        Dia
      </button>
      <button value="Gratis" className="filterBtn" onClick={handleFilter}>
        Gratis
      </button>
      <button value="Circuito" className="filterBtn" onClick={handleFilter}>
        Circuito
      </button>
      <button value="Fiesta" className="filterBtn" onClick={handleFilter}>
        Fiesta
      </button>
    </div>
  );
}
export default Filter;
