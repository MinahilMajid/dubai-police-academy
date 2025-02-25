import React from "react";
import "./Rescurce.css"; // Import CSS
import animage1 from "../assets/articles.svg";
import animage2 from "../assets/theses.svg";
import animage3 from "../assets/textbooks.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Resource = ({ searchQuery }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="resource-container">
      <ul className="resource-list">
        <li className="resource-item">
          <img
            onClick={() => navigate("/Articles", { state: { searchQuery } })}
            src={animage1}
            alt="Articles"
            className="resource-icon"
          />
          <span
            className="resource-text"
            onClick={() => navigate("/Articles", { state: { searchQuery } })}
          >
            {t("resource.articles")}
          </span>
        </li>
        <li className="resource-item">
          <img
            src={animage2}
            alt="Theses"
            className="resource-icon"
            onClick={() =>
              navigate("/ThesisTopics", { state: { searchQuery } })
            }
          />
          <span
            className="resource-text"
            onClick={() =>
              navigate("/ThesisTopics", { state: { searchQuery } })
            }
          >
            {t("resource.theses")}
          </span>
        </li>
        <li className="resource-item">
          <img
            src={animage3}
            alt="Textbooks"
            onClick={() => navigate("/Textbooks", { state: { searchQuery } })}
            className="resource-icon"
          />
          <span
            className="resource-text"
            onClick={() => navigate("/Textbooks", { state: { searchQuery } })}
          >
            {t("resource.textbooks")}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Resource;
