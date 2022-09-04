import AreaChartAlt from "./components/charts/AreaChartAlt"
import AreaChart from "./components/charts/AreaChart"
import Menu from "./components/app/Menu"
import LineChart from "./components/charts/LineColumnArea"

function App() {
  return (
    <div className="fixed h-screen grid grid-cols-4 overflow-hidden">
      <div className="bg-base-300 col-span-1 hidden md:block overflow-y-scroll ">
        <Menu />
      </div>
      <div className="m-8 col-span-4 md:col-span-3 overflow-y-scroll">
        <h2 className="bg-black/20 p-5 mb-4 uppercase text-sm text-accent">
          quarterly sales by retail category
        </h2>

        {/* <AreaChartAlt /> */}
        <LineChart />
        <div className="flex gap-4 py-8">
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
