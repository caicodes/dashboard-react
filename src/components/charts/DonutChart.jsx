import React, { Component } from "react"
import Chart from "react-apexcharts"

class DonutChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        tooltip: {
          theme: "dark",
        },
        stroke: {
          colors: "var(--chart-colors-accent)",
        },
        legend: {
          labels: {
            colors: "var(--chart-colors-labels)",
          },
        },
      },
      series: [44, 55, 41, 17, 15],
      labels: ["A", "B", "C", "D", "E"],
    }
  }

  render() {
    return (
      <div className="donut-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    )
  }
}

export default DonutChart
