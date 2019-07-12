import React from "react";
import ResponsiveChart from "./ResponsiveChart";
import styled from "styled-components";
import * as d3 from "d3";

const Circle = styled.circle`
  fill: firebrick;
  stroke: firebrick;
`;

const Path = styled.path`
  fill: none;
  stroke-width: 2px;
  stroke: gray;
`;

const Container = styled.div`
  min-height: 100vh;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
`;

var joints = [
  {
    x: 10,
    y: 100,
    r: 5
  },
  {
    x: 500,
    y: 100,
    r: 5
  }
];

const App = () => {
  let path = d3.path();
  path.arcTo(10, 10, 100, 10, 50);

  return (
    <Container>
      <h1> Curved area graph</h1>
      <ChartContainer>
        <ResponsiveChart>
          {dimensions => (
            <g {...dimensions}>
              {joints.map((d, i) => (
                <Circle key={i} cx={d.x} cy={d.y} r={d.r} />
              ))}

              <Path d={path.toString()} />

              <path
                d={`M${joints[0].x} ${joints[0].y}, A50,30 0 1,0 ${
                  joints[1].x
                },${joints[0].y}`}
                stroke="black"
                fill="transparent"
              />
            </g>
          )}
        </ResponsiveChart>
      </ChartContainer>
    </Container>
  );
};

export default App;
