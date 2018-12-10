// This is not a working example !!  I did not create a project for this
// just for practice

// to incorporate the D3 library we must first install the libary

// npm install d3 --save
const historicDatesForSkiing = [
  {
    year: 1879,
    event: "Ski Manufacturing Begins"
  },
  {
    year: 1882,
    event: "US Ski Club Founded"
  },
  {
    year: 1924,
    event: "First Winter Olympics Held"
  },
  {
    year: 1926,
    event: "First US Ski Shop Opens"
  },
  {
    year: 1932,
    event: "North America's First Rope Tow Spins"
  },
  {
    year: 1936,
    event: "First Chairlift Spins"
  },
  {
    year: 1949,
    event: "Squaw Valley, Mad River Glen Open"
  },
  {
    year: 1958,
    event: "First Gondola Spins"
  },
  {
    year: 1964,
    event: "Plastic Buckle Boots Available"
  }
];

// easist way to incorporate D3 is to let React render the UI then have D3 create and add the visualization

import d3 from "d3";
import { Component } from "react";
import { render } from "react-dom";

const Canvas = ({ children }) => (
  <svg height="200" width="500">
    {children}
  </svg>
);

const TimelineDot = ({ position, txt }) => (
  <g transform={`translate(${position},0)`}>
    <circle cy={160} r={5} style={{ fill: "blue" }} />

    <text y={115} x={-95} transform="rotate(-45)" style={{ fontSize: "10px" }}>
      {txt}
    </text>
  </g>
);

class Timeline extends Component {
  constructor({ data = [] }) {
    const times = d3.extent(data.map(d => d.year));
    const range = [50, 450];
    super({ data });
    this.scale = d3.time
      .scale()
      .domain(times)
      .range(range); // remove scale from componentDidMount and add to contructor
    this.state = { data, times, range }; // so it can be accessed everywhere within the component using
  } // this.component

  render() {
    return (
      <div className="timeline">
        <h1>{this.props.name} Timeline</h1>
        <Canvas>
          {data.map((d, i) => (
            <TimelineDot
              jposition={scale(d.year)}
              txt={`${d.year} - ${d.event}`}
            />
          ))}
        </Canvas>

        <div ref="target" />
      </div>
    );
  }
}

render(
  <Timeline name="History of Skiing" data={historicDatesForSkiing} />,
  document.getElementById("react-container")
);
