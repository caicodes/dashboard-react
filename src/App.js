import ReactLogo from "./components/ReactLogo.svg";

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
    </div>
  );
}

export default App;
