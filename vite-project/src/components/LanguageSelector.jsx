import React from "react";
import { useTranslation } from "react-i18next"; // Import the hook

const LanguageSelector = () => {
  const { i18n } = useTranslation(); // Use i18n from the hook

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // This will now work correctly
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSelector;
