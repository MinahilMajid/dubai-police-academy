import React, { useState, useEffect } from "react";
import "./VoiceSearch.css";
import { FaMicrophone } from "react-icons/fa"; // Import microphone icon
const VoiceSearch = ({ setQuery }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();

      recognitionInstance.continuous = false; // Stop after one phrase
      recognitionInstance.interimResults = false; // Get final result only
      recognitionInstance.lang = "en-US"; // Set language

      recognitionInstance.onresult = (event) => {
        let spokenText = event.results[0][0].transcript;

        // 🛠 Remove any trailing punctuation like "." or "," etc.
        spokenText = spokenText.replace(/[.,!?]$/, "");

        if (typeof setQuery === "function") {
          setQuery(spokenText); // ✅ Update input field in Header
        } else {
        }
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        setIsListening(false);
      };

      recognitionInstance.onend = () => setIsListening(false);

      setRecognition(recognitionInstance);
    } else {
    }
  }, [setQuery]);

  const startListening = () => {
    if (!recognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    setIsListening(true);
    recognition.start();
  };

  return (
    <div>
      <button
        onClick={startListening}
        disabled={isListening}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {isListening ? (
          <div className="dot-loader">
            <span className="dot small"></span>
            <span className="dot large"></span>
            <span className="dot medium"></span>
          </div>
        ) : (
          <FaMicrophone color="#000" size={24} />
        )}
      </button>
    </div>
  );
};

export default VoiceSearch;
