"use client";
import React from "react";
import {
  pink,
  purple,
  blue,
  teal,
  orange,
  cyan,
  lightBlue,
  brown,
  yellow,
} from "@mui/material/colors";
import { ResponsiveLine } from "@nivo/line";
import { useMemo, useState } from "react";
import { monthlyData } from "../../../constants";
function MonthlyChart() {
  const [formattedData] = useMemo(() => {
    if (!monthlyData) return [];

    const totalSalesLine: any = {
      id: "totalSales",
      color: pink[500],
      data: [],
    };
    const totalUnitsLine: any = {
      id: "totalUnits",
      color: orange[500],
      data: [],
    };

    Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        { x: month, y: totalSales },
      ];
      totalUnitsLine.data = [
        ...totalUnitsLine.data,
        { x: month, y: totalUnits },
      ];
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [monthlyData]);
  return (
    <div className="w-full h-full">
      {/* @ts-ignore */}
      <ResponsiveLine
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: teal[200],
              },
            },
            legend: {
              text: {
                fill: teal[200],
              },
            },
            ticks: {
              line: {
                stroke: teal[200],
                strokeWidth: 1,
              },
              text: {
                fill: teal[200],
              },
            },
          },
          legends: {
            text: {
              fill: teal[200],
            },
          },
          tooltip: {
            container: {
              color: orange[500],
            },
          },
        }}
        colors={{ datum: "color" }}
        margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        // curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 90,
          legend: "Month",
          legendOffset: 60,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Total",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 50,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default MonthlyChart;
