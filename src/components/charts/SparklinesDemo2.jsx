import React, { Component } from "react"
import Chart from "react-apexcharts"

class SparklinesDemoChart2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          data: ["65", "33", "67", "134"],
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
        colors: ["orange"],
        title: {
          text: "$356,954",
          offsetX: 0,
          style: {
            fontSize: "24px",
            color: "white",
          },
        },
        subtitle: {
          text: "Sales North",
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
        colors: ["darkred"],
        title: {
          text: "$251,843",
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
          data: ["44", "23", "125", "78"],
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
        colors: ["lime"],
        title: {
          text: "$548,121",
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
      <div className="grid grid-cols-3 gap-1 bg-black">
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
        <Chart
          options={this.state.optionsSpark2}
          series={this.state.seriesSpark2}
          type="line"
          height={135}
        />
        <Chart
          options={this.state.optionsSpark2}
          series={this.state.series}
          type="bar"
          height={135}
        />
        <Chart
          options={this.state.optionsSpark3}
          series={this.state.seriesSpark3}
          type="line"
          height={135}
        />
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={135}
        />{" "}
        <Chart
          options={this.state.optionsSpark2}
          series={this.state.series}
          type="bar"
          height={135}
        />{" "}
        <Chart
          options={this.state.optionsSpark2}
          series={this.state.seriesSpark2}
          type="line"
          height={135}
        />
      </div>
    )
  }
}

export default SparklinesDemoChart2
