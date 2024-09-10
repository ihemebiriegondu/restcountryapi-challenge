import DetailsPage from "./components/detailsPage";
import DisplayContainer from "./components/displayContainer";
import Header from "./components/header";
import QueryDiv from "./components/queryDiv";

let showDetails = true;

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {showDetails ? (
          <DetailsPage />
        ) : (
          <section>
            <QueryDiv />
            <DisplayContainer />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
