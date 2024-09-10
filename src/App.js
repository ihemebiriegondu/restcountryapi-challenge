import { useEffect, useState } from "react";

import DetailsPage from "./components/detailsPage";
import DisplayContainer from "./components/displayContainer";
import Header from "./components/header";
import QueryDiv from "./components/queryDiv";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [detailData, setDetailData] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        setData(data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDataFunction();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {showDetails ? (
          <DetailsPage
            setShowDetails={setShowDetails}
            detailData={detailData}
          />
        ) : (
          <section>
            <QueryDiv />
            <DisplayContainer
              setShowDetails={setShowDetails}
              setDetailData={setDetailData}
              countryData={data}
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
