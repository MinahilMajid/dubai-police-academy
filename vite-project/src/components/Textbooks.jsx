import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Rich text editor CSS
import "./Textbooks.css";
import { chapters } from "./content";
import { jsPDF } from "jspdf";

const Textbook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [highlights, setHighlights] = useState({});
  const [notes, setNotes] = useState({});
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [customPage, setCustomPage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightColor, setHighlightColor] = useState("#ffff00");
  const [noteText, setNoteText] = useState(""); // Rich text editor ke liye state
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false); // Modal ke liye state

  // Create pages array from chapters
  const pages = chapters.map((chapter, index) => ({
    content: `<h2>${chapter.title}</h2><p>${chapter.content}</p>`,
    // image: `https://www.arabianbusiness.com/cloud/2023/01/12/dubai-swat-team-pic-1.jpg${
    //   index + 1
    // }`,
  }));

  const totalPages = pages.length;
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToCustomPage = () => {
    const pageNum = parseInt(customPage);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    } else {
      alert("Please enter a valid page number.");
    }
  };

  const toggleBookmark = () => {
    setBookmarks((prev) =>
      prev.includes(currentPage)
        ? prev.filter((page) => page !== currentPage)
        : [...prev, currentPage]
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleHighlight = () => {
    const selection = window.getSelection().toString();
    if (selection) {
      setHighlights((prev) => ({
        ...prev,
        [currentPage]: [
          ...(prev[currentPage] || []),
          { text: selection, color: highlightColor },
        ],
      }));
    }
  };

  const handleAddNote = () => {
    setIsNoteModalOpen(true); // Modal open karein
  };

  const handleSaveNote = () => {
    if (noteText.trim()) {
      setNotes((prev) => ({
        ...prev,
        [currentPage]: [...(prev[currentPage] || []), noteText],
      }));
      setNoteText(""); // Clear the editor
      setIsNoteModalOpen(false); // Modal close karein
    }
  };

  const handleCancelNote = () => {
    setNoteText(""); // Clear the editor
    setIsNoteModalOpen(false); // Modal close karein
  };

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(
        pages[currentPage - 1].content
      );
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleSearch = () => {
    const query = searchQuery.trim();
    if (query) {
      setHighlights((prev) => ({
        ...prev,
        [currentPage]: [
          ...(prev[currentPage] || []),
          { text: query, color: highlightColor },
        ],
      }));
    }
  };
  const downloadPDF = () => {
    const doc = new jsPDF();
    const content = document.createElement("div");
    content.innerHTML = pages
      .map((page) => `<h2>${page.content}</h2>`)
      .join("<br><br>");

    doc.html(content, {
      callback: function (doc) {
        doc.save("textbook.pdf");
      },
      x: 10,
      y: 10,
      width: 180,
      windowWidth: 1000, // Set width to fit PDF properly
    });
  };

  const highlightText = (text, highlights) => {
    if (!highlights || !highlights[currentPage]) return text;

    let highlightedText = text;
    highlights[currentPage].forEach((highlight) => {
      const regex = new RegExp(`(${highlight.text})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span style="background-color: ${highlight.color}">$1</span>`
      );
    });
    return highlightedText;
  };

  const currentPageData = pages[currentPage - 1];

  if (!currentPageData) {
    return <p>Page not found.</p>;
  }

  return (
    <div className="textbook-container">
      <header className="textbook-header">
        <h1>The Guardians of Dubai: Inside the Dubai Police Force</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <div className="textbook-content" id="textbook-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="navigation">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="pages">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
        <div className="custom-page-input">
          <label>
            Go to page:
            <input
              type="number"
              value={customPage}
              onChange={(e) => setCustomPage(e.target.value)}
              min="1"
              max={totalPages}
            />
            <button onClick={goToCustomPage}>Go</button>
          </label>
        </div>
        <div className="page-content">
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(currentPageData.content, highlights),
            }}
          />
          {/* <img src={currentPageData.image} alt={`Page ${currentPage}`} /> */}
        </div>
        <div className="actions">
          <button onClick={toggleBookmark}>
            {bookmarks.includes(currentPage)
              ? "Remove Bookmark"
              : "Bookmark this Page"}
          </button>
          <button onClick={handleHighlight}>Highlight</button>
          <input
            type="color"
            value={highlightColor}
            onChange={(e) => setHighlightColor(e.target.value)}
          />
          <button onClick={handleAddNote}>Add Note</button>
          <button onClick={handleSpeak}>
            {isSpeaking ? "Stop Speaking" : "Speak"}
          </button>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
        <div className="highlights-notes">
          <h3 className="highlight">Highlights</h3>
          <ul>
            {(highlights[currentPage] || []).map((highlight, index) => (
              <li key={index} style={{ backgroundColor: highlight.color }}>
                {highlight.text}
              </li>
            ))}
          </ul>
          <h3 className="notes">Notes</h3>
          <ul className="notes-list">
            {(notes[currentPage] || []).map((note, index) => (
              <li key={index} className="note-card">
                <div dangerouslySetInnerHTML={{ __html: note }} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Note Modal */}
      {isNoteModalOpen && (
        <div className="note-modal-overlay">
          <div className="note-modal">
            <h3>Add a Note</h3>
            <ReactQuill value={noteText} onChange={setNoteText} />
            <div className="modal-actions">
              <button onClick={handleSaveNote}>Save</button>
              <button onClick={handleCancelNote}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <footer className="textbook-footer">
        <p>Bookmarks: {bookmarks.join(", ")}</p>
      </footer>
    </div>
  );
};

export default Textbook;
