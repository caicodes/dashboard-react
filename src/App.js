import ReactLogo from "./app/ReactLogo.svg"

import AreaChart from "./components/charts/AreaChart"
import DonutChart from "./components/charts/DonutChart"
import LineChart from "./components/charts/LineChart"
import SparklinesDemoChart from "./components/charts/SparklinesDemo"
import CandleStickChart from "./components/charts/CandleStickChart"
import MultipleYAxisChart from "./components/charts/MultipleYAxisChart"
import LineDataChart from "./components/charts/LineDataLabels"
import Dashboard from "./components/Dashboard"
import ScatterChart from "./components/charts/ScatterChart"
import AreaChartAlt from "./components/charts/AreaChartAlt"

function App() {
  return (
    <div className="App min-h-screen text-center text-2xl ">
      <header className="App-header text-primary animate-pulse">
        <ReactLogo />
        <p className="App-msg mx-auto w-96 ">
          dashboard delightfulness in dark only mode... with D3, charts, and
          whatever I can get to have dynamic bad ass dashboards live in my
          portfolio... now!
        </p>
        <button className="btn btn-xl mt-8">hello daisyui</button>
      </header>
      <div>
        <AreaChartAlt />
        <Dashboard />
        <ScatterChart />
      </div>

      <div className="grid grid-cols-3 p-8">
        <DonutChart />
        <LineChart />
        <AreaChart />
        <SparklinesDemoChart />
        <CandleStickChart />
        <MultipleYAxisChart />
        <LineDataChart />
      </div>
    </div>
  )
}

export default App
