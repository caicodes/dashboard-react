import React, { Component } from "react"
import Chart from "react-apexcharts"

class SparklinesDemoChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          data: ["24", "67", "34", "51"],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        markers: {
          strokeColors: "transparent",
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["rebeccapurple"],
        title: {
          text: "$448,217",
          offsetX: 0,
          style: {
            fontSize: "24px",
            color: "white",
          },
        },
        subtitle: {
          text: "Sales",
          offsetX: 0,
          style: {
            fontSize: "14px",
            color: "white",
          },
        },
        tooltip: {
          theme: "dark",
        },
      },

      seriesSpark2: [
        {
          data: ["44", "63", "44", "87"],
        },
      ],
      optionsSpark2: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        markers: {
          strokeColors: "transparent",
        },
        tooltip: {
          theme: "dark",
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["hotpink"],
        title: {
          text: "$132,312",
          offsetX: 0,
          style: {
            fontSize: "24px",
            color: "white",
          },
        },
        subtitle: {
          text: "Expenses",
          offsetX: 0,
          style: {
            fontSize: "14px",
            color: "white",
          },
        },
      },

      seriesSpark3: [
        {
          data: ["17", "65", "88", "159"],
        },
      ],
      optionsSpark3: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        markers: {
          strokeColors: "transparent",
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        yaxis: {
          min: 0,
        },
        title: {
          text: "$168,526",
          offsetX: 0,
          style: {
            fontSize: "24px",
            color: "white",
          },
        },
        subtitle: {
          text: "Profits",
          offsetX: 0,
          style: {
            fontSize: "14px",
            color: "white",
          },
        },
        tooltip: {
          theme: "dark",
        },
      },
    }
  }

  render() {
    return (
      <div className="grid grid-cols-3 gap-4">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={160}
        />

        <Chart
          options={this.state.optionsSpark2}
          series={this.state.seriesSpark2}
          type="area"
          height={160}
        />

        <Chart
          options={this.state.optionsSpark3}
          series={this.state.seriesSpark3}
          type="area"
          height={160}
        />
      </div>
    )
  }
}

export default SparklinesDemoChart
