import React, { useState } from "react";
import axios from "axios";
import unsplash from "../api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

function App() {
  const [searchState, setSearchState] = useState("");
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (searchState) => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: searchState },
    });
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar
        searchState={searchState}
        setSearchState={setSearchState}
        whenSubmit={onSearchSubmit}
      />
      <ImageList images={images} />
    </div>
  );
}

export default App;
