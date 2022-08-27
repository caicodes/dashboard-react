import React, { Component } from "react"
import Chart from "react-apexcharts"

class AreaChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      options: {
        legend: {
          labels: {
            colors: "var(--chart-colors-labels)",
          },
        },
        chart: {
          height: 350,
          type: "line",
        },
        tooltip: {
          theme: "dark",
        },
        stroke: {
          width: [0, 4],
        },
        title: {
          text: "Traffic Sources",
          style: {
            color: "white",
          },
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001",
        ],
        xaxis: {
          type: "datetime",
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        yaxis: [
          {
            labels: {
              style: {
                colors: "var(--chart-colors-labels)",
              },
            },
          },
          {
            title: {
              text: "Website Blog",
              style: {
                color: "white",
              },
            },
          },
          {
            opposite: true,
            title: {
              text: "Social Media",
              style: {
                color: "white",
              },
            },
          },
        ],
      },
    }
  }

  render() {
    return (
      <div className="mixed-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    )
  }
}

export default AreaChart
