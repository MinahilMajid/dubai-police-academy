import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import VoiceSearch from "./Voicesearch";
import AdvancedSearch from "./AdvancedSearch";

const Header = ({ setSearchQuery }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(query);
    navigate(`/SearchResults?query=${encodeURIComponent(query)}`);
  };

  const toggleSearchMode = () => {
    setIsAdvancedSearch(!isAdvancedSearch);
  };

  return (
    <div>
      <h1>{t("header.title")}</h1>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-tabs">
          <button
            className={`tab ${!isAdvancedSearch ? "active" : ""}`}
            onClick={() => setIsAdvancedSearch(false)}
          >
            {t("header.keywordSearch")}
          </button>
          <button
            className={`tab ${isAdvancedSearch ? "active" : ""}`}
            onClick={() => setIsAdvancedSearch(true)}
          >
            {t("header.advancedSearch")}
          </button>
        </div>
        <div className="search-box">
          {isAdvancedSearch ? (
            <AdvancedSearch
              setSearchQuery={setSearchQuery}
              navigate={navigate}
            />
          ) : (
            <>
              <select className="dropdown">
                <option>{t("header.fullText")}</option>
              </select>
              <input
                type="text"
                placeholder={t("header.placeholder")}
                value={query}
                onChange={handleSearchChange}
              />
              <button className="search-btn" onClick={handleSearchClick}>
                <big>{t("header.search")}</big>
              </button>
              <div>
                <VoiceSearch setQuery={(text) => setQuery(text)} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
