import React, { useState } from "react";
import MainLayout from "../../layouts/Main_layout/index";
import searchBtn from "../../assets/search-line.svg";
import useFetchData from "../../hook/Fetch";
import './Search.css'; 

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useFetchData("/movies");

  const handleSearchFilm = (e) => {
    e.preventDefault();
    const filteredData = data.filter((movie) => movie.title === inputValue);
    setFilteredData(filteredData);
  };

  return (
    <MainLayout>
      <div className="search-container">
        <form
          onSubmit={handleSearchFilm}
          className="search-form"
        >
          <button type="submit" className="search-button">
            <img src={searchBtn} alt="Search" />
          </button>
          <input
            placeholder="Названия фильма"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="search-input"
            type="text"
          />
        </form>

      </div>
    </MainLayout>
  );
}

export default SearchPage;
