import React, { createContext, useState, useEffect, useCallback } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  const fetchSelectedCategoryData = useCallback((query) => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { contents } = await fetchDataFromAPI(`search/?q=${query}`);
        setSearchResults(contents);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory, fetchSelectedCategoryData]);

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
