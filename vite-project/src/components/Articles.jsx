import { useState } from "react";
import { jsPDF } from "jspdf";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import "./ArticleList.css"; // Import the CSS file
import { useLocation } from "react-router-dom";
// Toast Component
const Toast = ({ message }) => {
  return <div className="toast">{message}</div>;
};

// Generate 30 random articles
const generateArticles = () => {
  const authors = [
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
  return Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Article ${i + 1}`,
    author: authors[Math.floor(Math.random() * authors.length)],
    date: new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    )
      .toISOString()
      .split("T")[0],
    views: Math.floor(Math.random() * 2000) + 1,
    content: `
**Overview:**
This article delves into the innovative strategies employed by the Dubai Police to integrate cutting-edge technologies into their operations. These advancements aim to enhance efficiency, improve public safety, and solidify Dubai's reputation as one of the safest cities globally. The article highlights the use of artificial intelligence (AI), smart surveillance systems, drones, and predictive analytics in modern policing.
    
**Key Sections:**
    
**Introduction:**
The Dubai Police have a long-standing commitment to innovation in law enforcement. This section provides a brief history of the Dubai Police and their dedication to adopting technological advancements to stay ahead of evolving challenges.
    
**Technological Innovations:**
- **AI-Powered Crime Prediction:** Dubai Police utilize AI algorithms to analyze crime patterns and predict potential hotspots, enabling proactive measures to prevent criminal activities.
- **Smart Surveillance:** Advanced CCTV systems equipped with facial recognition capabilities are deployed across the city to monitor public spaces and identify suspects.
- **Drones for Public Safety:** Drones are used for traffic monitoring, crowd control, and emergency response, providing real-time data to law enforcement officers.
- **Blockchain for Evidence Management:** Blockchain technology ensures the integrity and security of digital evidence, making it tamper-proof and reliable for legal proceedings.
    
**Case Studies:**
- **Predictive Analytics in Action:** A real-life example of how predictive analytics helped prevent a major crime in a high-traffic area.
- **Drones at Dubai Expo 2020:** The role of drones in managing large-scale events, ensuring safety, and facilitating crowd control.
    
**Challenges and Solutions:**
- **Privacy Concerns:** Addressing public concerns related to the use of surveillance technologies and ensuring transparency in their implementation.
- **Cybersecurity:** Protecting sensitive data from cyber threats and ensuring the resilience of digital systems.
    
**Future Directions:**
- **Robotics and Autonomous Systems:** Plans to integrate robotics and autonomous systems into policing for tasks such as patrolling and surveillance.
- **International Collaboration:** Partnering with global law enforcement agencies to share technological expertise and best practices.
    
**Conclusion:**
The transformative impact of technology on policing in Dubai is undeniable. The Dubai Police Academy plays a pivotal role in training the next generation of tech-savvy law enforcement officers, ensuring that Dubai remains at the forefront of innovation in public safety.
    
**Author:**
This article is authored by Dr. Ahmed Al Mansoori, a senior researcher at the Dubai Police Academy specializing in criminology and technology.
    
**Publication Details:**
- **Journal:** Dubai Police Academy Journal of Security and Criminology,
- **Volume:** 12, Issue 3,
- **Year:** 2023,
- **Pages:** 45-60`,
  }));
};

const Articles = (props) => {
  const { t } = useTranslation(); // Translation hook
  const { searchType } = props;
  const [articles, setArticles] = useState(generateArticles());
  const [sortOption, setSortOption] = useState("date");

  const [savedArticles, setSavedArticles] = useState([]);
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [openArticle, setOpenArticle] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };
  // Filter articles based on searchQuery

  const sortArticles = (criteria) => {
    let sortedArticles = [...articles];
    if (criteria === "date") {
      sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === "author") {
      sortedArticles.sort((a, b) => a.author.localeCompare(b.author));
    } else if (criteria === "popularity") {
      sortedArticles.sort((a, b) => b.views - a.views);
    }
    setArticles(sortedArticles);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    sortArticles(selectedOption);
  };

  const truncateContent = (content, length = 100) => {
    return content.length > length
      ? content.substring(0, length) + "..."
      : content;
  };

  const saveForLater = (article) => {
    setSavedArticles((prev) => {
      const updatedList = [...prev, article];
      console.log("Updated Saved Articles:", updatedList); // Debugging
      return updatedList;
    });
    showToast(`Saved "${article.title}" for later!`);
  };

  const rateArticle = (articleId, rating) => {
    setRatings((prev) => ({ ...prev, [articleId]: rating }));
  };

  const submitComment = (articleId, comment) => {
    setComments((prev) => ({
      ...prev,
      [articleId]: [...(prev[articleId] || []), comment],
    }));
  };

  const shareArticle = (article) => {
    const subject = encodeURIComponent(
      `Check out this article: ${article.title}`
    );
    const body = encodeURIComponent(
      `${article.title} by ${article.author}\n\n${article.content}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const copyCitation = (article) => {
    const citation = `${article.author}. "${article.title}". Published on ${article.date}.`;
    navigator.clipboard.writeText(citation);
    showToast("Citation copied!");
  };

  const downloadArticle = (article) => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const margin = 10;
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = margin;

    doc.setFontSize(18);
    doc.text(article.title, margin, y);
    y += lineHeight * 2;

    doc.setFontSize(12);
    doc.text(`${t("articles.author")}: ${article.author}`, margin, y);
    y += lineHeight;
    doc.text(`${t("articles.date")}: ${article.date}`, margin, y);
    y += lineHeight;
    doc.text(`${t("articles.views")}: ${article.views}`, margin, y);
    y += lineHeight * 2;

    doc.setFontSize(10);
    const contentLines = doc.splitTextToSize(article.content, 180);
    for (let i = 0; i < contentLines.length; i++) {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(contentLines[i], margin, y);
      y += lineHeight;
    }

    doc.save(`${article.title}.pdf`);
  };

  // Use the searchQuery from state if available, or fallback to the prop passed from App
  const location = useLocation();
  const searchQuery =
    (location.state && location.state.searchQuery) || props.searchQuery || "";
  console.log("Search Query:", searchQuery); // Debugging step

  // Filter articles based on searchQuery
  // In Articles.jsx, update the filter logic to handle advanced search
  const filteredArticles = articles.filter((article) => {
    if (searchType === "author") {
      // If searching by author, match only the author's name
      return article.author.toLowerCase() === searchQuery.toLowerCase().trim();
    } else {
      // Otherwise, match title or content for general search
      return (
        article.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }
  });
  // (Optional) If toggleArticle is needed, you might define it like so:
  const toggleArticle = (articleId) => {
    setOpenArticle(openArticle === articleId ? null : articleId);
  };
  return (
    <div className="container">
      <h1>{t("articles.title")}</h1>

      {/* Toast Notification */}
      {toastMessage && <Toast message={toastMessage} />}

      {/* Sorting Dropdown */}
      <div>
        <label className="labell">{t("articles.sortBy")}:</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="date">{t("articles.sort.date")}</option>
          <option value="author">{t("articles.sort.author")}</option>
          <option value="popularity">{t("articles.sort.popularity")}</option>
        </select>
      </div>

      {/* Display Articles */}
      <ul className="article-list">
        {filteredArticles.map((article) => (
          <li key={article.id} className="article-item">
            <h2 className="article-title">{article.title}</h2>
            <h5 className="article-author">{article.author}</h5>
            <p className="article-meta">
              <Icon icon="emojione:calendar" />
              {article.date} |<Icon icon="fa-regular:eye" />
              {article.views} views
            </p>

            {/* Abstract Preview */}
            <p className="article-content">
              {openArticle === article.id ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br />"),
                  }}
                />
              ) : (
                truncateContent(article.content)
              )}
            </p>
            <button onClick={() => toggleArticle(article.id)}>
              {openArticle === article.id ? "Show Less" : "Read More"}
            </button>

            {/* Ratings */}
            <div className="rating">
              <label>Rate:</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => rateArticle(article.id, star)}
                  style={{
                    color: ratings[article.id] >= star ? "gold" : "gray",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    fontSize: "1.2rem",
                  }}
                >
                  <Icon icon="tdesign:star" />
                </button>
              ))}
              <p>Your Rating: {ratings[article.id] || "Not rated yet"}</p>
            </div>

            {/* Comment Section */}
            <div className="comment-section">
              <input
                type="text"
                placeholder="Leave a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    submitComment(article.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <ul className="comment-list">
                {(comments[article.id] || []).map((comment, index) => (
                  <li key={index} className="comment-item">
                    {comment}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="article-actions">
              <button onClick={() => downloadArticle(article)}>
                {t("articles.download")}
              </button>
              <button onClick={() => saveForLater(article)}>
                {t("articles.save")}
              </button>
              <button onClick={() => copyCitation(article)}>
                Copy Citation
              </button>
              <button onClick={() => shareArticle(article)}>
                Share via Email
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Saved Articles Section */}
      {savedArticles.length > 0 && (
        <div className="saved-articles">
          <h2>{t("articles.savedArticles")}</h2>
          <ul>
            {savedArticles.map((article, index) => (
              <li key={index}>{article.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Articles;
