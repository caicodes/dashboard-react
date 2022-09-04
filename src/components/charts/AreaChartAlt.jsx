import React, { Component } from "react"
import Chart from "react-apexcharts"

class AreaChartAlt extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          height: 240,
          type: "area",
          stacked: false,
        },
        stroke: {
          curve: "straight",
        },
        series: [
          {
            name: "Music",
            data: [11, 15, 26, 20, 33, 27],
          },
          {
            name: "Photos",
            data: [32, 33, 21, 42, 19, 32],
          },
          {
            name: "Files",
            data: [20, 39, 52, 11, 29, 43],
          },
        ],
        xaxis: {
          categories: [
            "2021 Q1",
            "2021 Q2",
            "2021 Q3",
            "2021 Q4",
            "2022 Q1",
            "2022 Q2",
          ],
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        tooltip: {
          followCursor: true,
          theme: "dark",
        },
        fill: {
          opacity: 1,
        },
        legend: {
          labels: {
            colors: "var(--chart-colors-labels)",
          },
        },
      },
    }
  }
  render() {
    return (
      <div className="area-chart">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="area"
        />
      </div>
    )
  }
}

export default AreaChartAlt
