import AreaChartAlt from "./components/charts/AreaChartAlt"
import AreaChart from "./components/charts/AreaChart"
import SparklinesDemoChart from "./components/charts/SparklinesDemo"
import Menu from "./components/app/Menu"

function App() {
  return (
    <div className="fixed h-screen grid grid-cols-4 overflow-hidden">
      <div className="bg-base-300 col-span-1 hidden md:block overflow-y-scroll ">
        <Menu />
      </div>
      <div className="m-8 col-span-4 md:col-span-3 overflow-y-scroll">
        <h2 className="bg-black/20 p-5 mb-4 uppercase text-sm text-accent">
          comparison sales
        </h2>

        <SparklinesDemoChart />
        <h2 className="bg-black/20 p-5 my-8 uppercase text-sm text-accent">
          comparison sales
        </h2>

        <AreaChartAlt />
        <div className="flex gap-4 p-8">
          <div className="w-2/3">
            <h2 className="bg-black/20 p-5 mb-4 uppercase text-sm text-accent">
              marketing channels
            </h2>
            <AreaChart />
          </div>
          <div className="w-2/3">
            <h2 className="bg-black/20 p-5 mb-4 uppercase text-sm text-accent">
              pipeline sales
            </h2>
            <AreaChartAlt />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
