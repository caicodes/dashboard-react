import React, { Component } from "react"
import Chart from "react-apexcharts"

class SparklinesDemoChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          data: ["33", "25", "44", "67"],
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
          text: "$424,652",
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
          data: ["33", "25", "44", "67"],
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
          text: "$235,312",
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
          data: ["33", "25", "44", "67"],
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
          text: "$135,965",
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
      },

      series1: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      options1: {
        chart: {
          type: "line",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ""
              },
            },
          },
          marker: {
            show: false,
          },
          theme: "dark",
        },
      },

      series2: [
        {
          data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        },
      ],
      options2: {
        chart: {
          type: "line",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ""
              },
            },
          },
          marker: {
            show: false,
          },
          theme: "dark",
        },
      },

      series3: [43, 32, 12, 9],
      options3: {
        chart: {
          type: "pie",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          theme: "dark",
        },
      },

      series4: [43, 32, 12, 9],
      options4: {
        chart: {
          type: "donut",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          theme: "dark",
        },
      },

      series5: [
        {
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        },
      ],
      options5: {
        chart: {
          type: "bar",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ""
              },
            },
          },
          marker: {
            show: false,
          },
          theme: "dark",
        },
      },

      series6: [
        {
          data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        },
      ],
      options6: {
        chart: {
          type: "bar",
          width: 100,
          height: 35,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 1,
          },
        },
        tooltip: {
          fixed: {
            enabled: false,
          },
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ""
              },
            },
          },
          marker: {
            show: false,
          },
          theme: "dark",
        },
      },

      series7: [45],
      options7: {
        chart: {
          type: "radialBar",
          width: 50,
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
            },
            track: {
              margin: 0,
            },
            dataLabels: {
              show: false,
            },
          },
        },
      },

      series8: [53, 67],
      options8: {
        chart: {
          type: "radialBar",
          width: 40,
          height: 40,
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
            },
            track: {
              margin: 1,
            },
            dataLabels: {
              show: false,
            },
          },
        },
      },
    }
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-4">
            <div id="chart-spark1">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                height={160}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div id="chart-spark2">
              <Chart
                options={this.state.optionsSpark2}
                series={this.state.seriesSpark2}
                type="area"
                height={160}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div id="chart-spark3">
              <Chart
                options={this.state.optionsSpark3}
                series={this.state.seriesSpark3}
                type="area"
                height={160}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <table>
            <thead>
              <th>Total Value</th>
              <th>Percentage of Portfolio</th>
              <th>Last 10 days</th>
              <th>Volume</th>
            </thead>
            <tbody>
              <tr>
                <td>$32,554</td>
                <td>15%</td>
                <td>
                  <div id="chart-1">
                    <Chart
                      options={this.state.options1}
                      series={this.state.series1}
                      type="line"
                      height={35}
                      width={100}
                    />
                  </div>
                </td>
                <td>
                  <div id="chart-5">
                    <Chart
                      options={this.state.options5}
                      series={this.state.series5}
                      type="bar"
                      height={35}
                      width={100}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>$23,533</td>
                <td>7%</td>
                <td>
                  <div id="chart-2">
                    <Chart
                      options={this.state.options2}
                      series={this.state.series2}
                      type="line"
                      height={35}
                      width={100}
                    />
                  </div>
                </td>
                <td>
                  <div id="chart-6">
                    <Chart
                      options={this.state.options6}
                      series={this.state.series6}
                      type="bar"
                      height={35}
                      width={100}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>$54,276</td>
                <td>9%</td>
                <td>
                  <div id="chart-3">
                    <Chart
                      options={this.state.options3}
                      series={this.state.series3}
                      type="pie"
                      height={40}
                      width={40}
                    />
                  </div>
                </td>
                <td>
                  <div id="chart-7">
                    <Chart
                      options={this.state.options7}
                      series={this.state.series7}
                      type="radialBar"
                      height={50}
                      width={50}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>$11,533</td>
                <td>2%</td>
                <td>
                  <div id="chart-4">
                    <Chart
                      options={this.state.options4}
                      series={this.state.series4}
                      type="donut"
                      height={40}
                      width={40}
                    />
                  </div>
                </td>
                <td>
                  <div id="chart-8">
                    <Chart
                      options={this.state.options8}
                      series={this.state.series8}
                      type="radialBar"
                      height={40}
                      width={40}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SparklinesDemoChart
