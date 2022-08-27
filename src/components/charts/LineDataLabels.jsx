import React, { Component } from "react"
import Chart from "react-apexcharts"

class LineDataChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
          tooltip: {
            theme: "dark",
          },
        },
        colors: ["rebeccapurple", "var(--chart-colors-accent)"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
          style: {
            color: "white",
          },
        },
        grid: {
          borderColor: "rgba(0,0,0,.4)",
          row: {
            colors: ["rgba(0,0,0,.3)", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
            style: {
              color: "white",
            },
          },
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
            style: {
              color: "white",
            },
          },
          min: 5,
          max: 40,
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },

        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
          labels: {
            colors: "var(--chart-colors-labels)",
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

export default LineDataChart
