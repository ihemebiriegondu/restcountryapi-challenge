import { useEffect, useState } from "react";

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
    /*const fetchDataFunction = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
              "https://restcountryapi-challenge.vercel.app",
          },
        });
        const data = await response.json();

        setData(data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };*/

    const fetchDataFunction = () => {
      fetch("https://api.apis.guru/v2/list.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData('');
        })
        .catch((error) => console.error("Error fetching data:", error));
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
