import { useEffect, useState } from "react";

import DetailsPage from "./components/detailsPage";
import DisplayContainer from "./components/displayContainer";
import Header from "./components/header";
import QueryDiv from "./components/queryDiv";
import countryDatas from "./data.json";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [detailData, setDetailData] = useState([]);

  const [activeOption, setActiveOption] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.querySelector("body").classList.add("dark");
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {showDetails ? (
          <DetailsPage
            setShowDetails={setShowDetails}
            detailData={detailData}
            fullData={countryDatas}
          />
        ) : (
          <section>
            <QueryDiv
              data={countryDatas}
              activeOption={activeOption}
              setActiveOption={setActiveOption}
              isFiltered={isFiltered}
              setIsFiltered={setIsFiltered}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setSearchedData={setSearchedData}
            />
            <DisplayContainer
              setShowDetails={setShowDetails}
              setDetailData={setDetailData}
              //countryData={isFiltered ? filteredData : data}
              countryData={
                searchValue !== ""
                  ? searchedData
                  : searchValue === "" && isFiltered
                  ? filteredData
                  : countryDatas
              }
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
