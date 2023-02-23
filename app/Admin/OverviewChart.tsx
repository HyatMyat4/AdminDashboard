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

import { monthlyData } from "../../constants";
import { useMemo } from "react";
function OverviewChart({ isDashboard = false, view }: any) {
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!monthlyData) return [];

    const totalSalesLine = {
      id: "totalSales",
      color: teal[500],
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: cyan[500],
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;
        // @ts-ignore
        totalSalesLine.data = [...totalSalesLine.data,{ x: month, y: curSales }, ];
        // @ts-ignore
        totalUnitsLine.data = [...totalUnitsLine.data, { x: month, y: curUnits }, ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [monthlyData]);
 
  
  const Windowwidth = window.innerWidth || document.body.clientWidth
  return (
    <div className="w-full h-full">
      {/* @ts-ignore */}
      <ResponsiveLine
        data={view === "sales" ? totalSalesLine : totalUnitsLine}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: teal[500],
              },
            },
            legend: {
              text: {
                fill: teal[500],
              },
            },
            ticks: {
              line: {
                stroke: teal[500],
                strokeWidth: 1,
              },
              text: {
                fill: teal[500],
              },
            },
          },
          legends: {
            text: {
              fill: orange[500],
            },
          },
          tooltip: {
            container: {
              color: orange[500],
            },
          },
        }}
        colors={{ datum: "color" }}
        margin={ Windowwidth > 775 ? { top: 20, right: 50, bottom: 50, left: 70 } : { top: 10, right: 10, bottom: 10, left: 10 } }
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        enableArea={isDashboard}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: (v) => {
            if (isDashboard) return v.slice(0, 3);
            return v;
          },
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard
            ? ""
            : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
          legendOffset: -60,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={orange[500]}
        pointBorderWidth={2}
        pointBorderColor={orange[500]}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 30,
                  translateY: -40,
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
              ]
            : undefined
        }
      />
    </div>
  );
}

export default OverviewChart;
