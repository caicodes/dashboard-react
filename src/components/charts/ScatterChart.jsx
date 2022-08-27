import React, { Component } from "react"
import Chart from "react-apexcharts"

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0
  var series = []
  while (i < count) {
    var x = baseval
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([x, y])
    baseval += 86400000
    i++
  }
  return series
}

class ScatterChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "TEAM 1",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "TEAM 2",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "TEAM 3",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "TEAM 4",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            10,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "TEAM 5",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            type: "xy",
          },
        },
        markers: {
          strokeColors: "transparent",
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
            style: {
              colors: "#000",
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
          row: {
            // colors: ["#F44336", "#E91E63", "#9C27B0"],
            colors: ["#F44336", "#E91E63", "#9C27B0"],
          },
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
          max: 70,
          labels: {
            style: {
              colors: "var(--chart-colors-labels)",
            },
          },
        },
        legend: {
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
      <div className="scatter-chart p-8">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="scatter"
        />
      </div>
    )
  }
}

export default ScatterChart
