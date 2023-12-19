import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const colors = ['#9352E5', '#E55264', '#E5AA52', '#D1E552', '#52E59E'];

const ResultGraph = ({data}) => {
    return (
        <div>
            <ResponsiveContainer width={500}
                height={300}
                data={data}
                margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
                }}>
                <BarChart width={150} height={40} data={data}>
                <XAxis dataKey="name"/>
                <YAxis
                    tickFormatter={(tick) => {
                        return `${tick}%`;
                        }}/>
                <Bar dataKey="uv" fill="#8884d8">
                    {data.map((entry, index) => (
                    <Cell fill={colors[index % 20]} />
                    ))}
                    
                </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>    
    );
};

export default ResultGraph;