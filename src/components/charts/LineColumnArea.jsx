import React, { Component } from "react"
import Chart from "react-apexcharts"

class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        series: [
          {
            name: "TEAM A",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
          },
          {
            name: "TEAM B",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
          },
          {
            name: "TEAM C",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
          },
        ],
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2021",
          "02/01/2021",
          "03/01/2021",
          "04/01/2021",
          "05/01/2021",
          "06/01/2021",
          "07/01/2021",
          "08/01/2021",
          "09/01/2021",
          "10/01/2021",
          "11/01/2021",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        yaxis: {
          title: {
            text: "Points",
          },
          min: 0,
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        tooltip: {
          theme: "dark",
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points"
              }
              return y
            },
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    }
  }

  render() {
    return (
      <div className="line-col-area-chart">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="area"
        />
      </div>
    )
  }
}

export default LineChart
