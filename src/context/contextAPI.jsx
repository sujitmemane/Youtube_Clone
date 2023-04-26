import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { contents } = await fetchDataFromAPI(`search/?q=${query}`);
        setSearchResults(contents);
        console.log(contents);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };
  console.log(searchResults);
  console.log("fetched");
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
