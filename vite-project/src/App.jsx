import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Articles from "./components/Articles";
import Textbook from "./components/Textbooks";
import ThesisTopics from "./components/ThesisTopics";
import SearchResults from "./pages/SearchResults"; // Import SearchResults Page

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Global search state

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setSearchQuery={setSearchQuery} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/Articles"
          element={<Articles searchQuery={searchQuery} />}
        />
        <Route
          path="/Textbooks"
          element={<Textbook searchQuery={searchQuery} />}
        />
        <Route
          path="/ThesisTopics"
          element={<ThesisTopics searchQuery={searchQuery} />}
        />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;
