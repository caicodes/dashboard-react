import React, { Component } from "react"
import Chart from "react-apexcharts"

class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        tooltip: {
          theme: "dark",
        },
        yaxis: {
          labels: {
            style: {
              colors: "rgba(255,255,255,.4)",
            },
          },
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            style: {
              colors: "rgba(255,255,255,.4)",
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
      <div className="mixed-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
        />

        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="500"
        />
      </div>
    )
  }
}

export default LineChart
