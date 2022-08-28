import React, { Component } from "react"
import Chart from "react-apexcharts"

class TableWithCharts extends Component {
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
        tooltip: {
          theme: "dark",
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
        stroke: {
          width: 2,
        },
        markers: {
          strokeColors: "transparent",
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
        colors: ["var(--chart-colors-lines-accent)"],
        markers: {
          strokeColors: "transparent",
        },
        stroke: {
          width: 2,
        },
        tooltip: {
          theme: "dark",
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
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <div className="text-xs my-4">RETURNS BY SALES AREA</div>
          <Chart
            options={this.state.options1}
            series={this.state.series1}
            type="line"
            height={35}
          />{" "}
          <div className="text-xs my-4">RETURNS BY SALES AREA</div>
          <Chart
            options={this.state.options5}
            series={this.state.series5}
            type="bar"
            height={66}
          />{" "}
          <div className="text-xs my-4">RETURNS BY SALES AREA</div>
          <Chart
            options={this.state.options2}
            series={this.state.series2}
            type="line"
            height={35}
          />
          <div className="text-xs my-4">RETURNS BY SALES AREA</div>
          <Chart
            options={this.state.options6}
            series={this.state.series6}
            type="bar"
            height={66}
          />
        </div>
        <div className="col-span-3">
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
      </div>
    )
  }
}

export default TableWithCharts
