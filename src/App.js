import ReactLogo from "./components/ReactLogo.svg";

function App() {
  return (
    <div className="App bg-fuchsia-900 min-h-screen text-center text-2xl text-white">
      <header className="App-header text-fuchsia-700 animate-pulse">
        <ReactLogo />
        <p className="App-msg mx-auto w-96 ">
          dashboard delightfulness in dark only mode... with D3, charts, and
          whatever I can get to have dynamic bad ass dashboards live in my
          portfolio... now!
        </p>
      </header>
    </div>
  );
}

export default App;
