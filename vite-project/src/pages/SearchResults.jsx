import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import Articles from "../components/Articles";

const SearchResults = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query and type from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query");
  const searchType = searchParams.get("type"); // Can be "author" or undefined

  return (
    <div style={{ padding: "-10px", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "-190px",
          marginTop: "100px",
        }}
      >
        {searchType === "author"
          ? t("searchResults.articlesBy", { query: searchQuery })
          : t("searchResults.searchResultsFor", { query: searchQuery })}
      </h1>

      {/* Pass both searchQuery and searchType to Articles */}
      <Articles searchQuery={searchQuery} searchType={searchType} />

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginLeft: "570px",
          backgroundColor: "#4CAF50",
          color: "white",
          marginTop: "-70px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {t("searchResults.backToHome")}
      </button>
    </div>
  );
};

export default SearchResults;
