import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./AdvancedSearch.css"; // Import CSS for styling

const AdvancedSearch = ({ setSearchQuery }) => {
  const { t } = useTranslation(); // Initialize translation
  const [advancedQuery, setAdvancedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleAdvancedSearchChange = (e) => {
    const query = e.target.value;
    setAdvancedQuery(query);

    // Simulate fetching suggestions based on query
    const mockSuggestions = [
      "Ahmed Al Mansoori",
      "Fatima Al Hashemi",
      "Khalid Al Nuaimi",
      "Mariam Al Marri",
      "Omar Al Suwaidi",
      "Layla Al Farsi",
      "Youssef Al Katheeri",
      "Aisha Al Shamisi",
      "Abdullah Al Zaabi",
      "Hessa Al Mehairi",
      "Saeed Al Dhaheri",
      "Noora Al Tunaiji",
      "Ali Al Marzooqi",
      "Salma Al Kaabi",
      "Mohammed Al Qasimi",
      "Reem Al Awadhi",
      "Tariq Al Jaber",
      "Shamma Al Muhairi",
      "Faisal Al Kendi",
      "Maitha Al Shamsi",
      "Hamdan Al Romaithi",
      "Amna Al Shehhi",
      "Sultan Al Harthy",
      "Latifa Al Mulla",
      "Rashid Al Falasi",
      "Mouza Al Nahyan",
      "Khalifa Al Gergawi",
      "Asma Al Ketbi",
      "Majid Al Khoori",
      "Hind Al Remeithi",
    ];

    setSuggestions(
      mockSuggestions.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSearchClick = () => {
    if (advancedQuery.trim() !== "") {
      setSearchQuery(advancedQuery);
      navigate(`/SearchResults?query=${encodeURIComponent(advancedQuery)}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAdvancedQuery(suggestion);
    setSearchQuery(suggestion);
    navigate(
      `/SearchResults?query=${encodeURIComponent(suggestion)}&type=author`
    );
  };

  return (
    <div className="search-boxx">
      <input
        className="inputadvanced"
        type="textt"
        placeholder={t("advancedSearch.placeholder")}
        value={advancedQuery}
        onChange={handleAdvancedSearchChange}
      />
      <button className="search-btnn" onClick={handleSearchClick}>
        {t("advancedSearch.search")}
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvancedSearch;
