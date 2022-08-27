import React, { Component } from "react"
import Chart from "react-apexcharts"

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
        },
        tooltip: {
          theme: "dark",
        },
        title: {
          text: "Basic Radar Chart",
          style: {
            color: "white",
          },
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June"],
        },
      },
    }
  }

  render() {
    return (
      <div className="radar-chart w-[300px] mx-auto mt-16">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height={350}
        />
      </div>
    )
  }
}

export default Dashboard
