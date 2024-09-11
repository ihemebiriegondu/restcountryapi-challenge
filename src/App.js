import { useEffect, useState } from "react";
import axios from "axios";

import DetailsPage from "./components/detailsPage";
import DisplayContainer from "./components/displayContainer";
import Header from "./components/header";
import QueryDiv from "./components/queryDiv";

function App() {
  const [data, setData] = useState([]);

  const [showDetails, setShowDetails] = useState(false);
  const [detailData, setDetailData] = useState([]);

  const [activeOption, setActiveOption] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    const fetchDataFunction = async () => {
      try {
        const response = await fetch(
          `https://corsproxy.io/?https%3A%2F%2Frestcountries.com%2Fv3.1%2Fall`,
          {
            mode: "cors",
          }
        );
        const data = await response.json();

        setData(data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.querySelector("body").classList.add("dark");
    }

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
            fullData={data}
          />
        ) : (
          <section>
            <QueryDiv
              data={data}
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
                  : data
              }
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
