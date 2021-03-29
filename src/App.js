import * as d3 from "d3";
import { useState, useEffect } from "react";

export default function App() {
  const [cells, setCells] = useState();

  const cellWidth = 20;
  const cellHeight = 10;

  useEffect(() => {
    const svg = d3.select("#area");

    svg
      .append("line")
      .attr("x1", 0)
      .attr("x2", "100%")
      .attr("y1", 0)
      .attr("y2", 0)
      .attr("stroke", "steelblue");
  }, []);
  return (
    <div className="App">
      <svg id="area" height={200} width="100%"></svg>
    </div>
  );
}
