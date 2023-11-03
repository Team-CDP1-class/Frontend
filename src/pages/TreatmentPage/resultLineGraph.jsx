import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const emotion = ['happiness', 'sadness', 'anger', 'anxiety', 'disgust'];
const colors = ['#9352E5', '#E55264', '#E5AA52', '#D1E552', '#52E59E'];

const ResultLineGraph = ({data, stageNums}) => {
    return (
      <ResponsiveContainer width={700} aspect={2}>
        <LineChart
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" padding={{left: 40, right: 40 }}/>
          <YAxis domain={[0, 5]}/>
          {stageNums[0] ? <Line type="monotone" dataKey={emotion[0]} stroke={colors[0]} strokeWidth={3} /> : null}
          {stageNums[1] ? <Line type="monotone" dataKey={emotion[1]} stroke={colors[1]} strokeWidth={3} /> : null}
          {stageNums[2] ? <Line type="monotone" dataKey={emotion[2]} stroke={colors[2]} strokeWidth={3} /> : null}
          {stageNums[3] ? <Line type="monotone" dataKey={emotion[3]} stroke={colors[3]} strokeWidth={3} /> : null}
          {stageNums[4] ? <Line type="monotone" dataKey={emotion[4]} stroke={colors[4]} strokeWidth={3} /> : null}
        </LineChart>
      </ResponsiveContainer>
    );
};

export default ResultLineGraph;