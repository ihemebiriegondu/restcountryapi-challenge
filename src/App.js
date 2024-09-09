import DisplayContainer from "./components/displayContainer";
import Header from "./components/header";
import QueryDiv from "./components/queryDiv";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <QueryDiv />
        <DisplayContainer />
      </main>
    </div>
  );
}

export default App;
