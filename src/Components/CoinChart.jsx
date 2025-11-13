import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const CoinChart = ({ data, color }) => {
    return (
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-112">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 20,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis
                        dataKey="time"
                        stroke="#aaa"
                        tick={{ fontSize: 10 }}
                        tickMargin={8}
                    />
                    <YAxis
                        stroke="#aaa"
                        tick={{ fontSize: 10 }}
                        width={40}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1a153a",
                            border: "none",
                            borderRadius: "8px",
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#0ff" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke={color || "#00c6ff"}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CoinChart;
