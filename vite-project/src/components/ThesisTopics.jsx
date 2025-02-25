import React, { useState } from "react";
import "./Thesis.css"; // Assuming you will add the CSS in a separate file

const ThesisTopics = () => {
  const topics = [
    {
      category: "Law & Criminal Justice",
      topics: [
        {
          title: "Impact of AI on Crime Prevention",
          description:
            "Analyzing how AI-driven tools help Dubai Police in crime prevention and predictive policing.",
          likes: 0,
          comments: [],
        },
        {
          title: "Cybersecurity Laws in the UAE",
          description:
            "Exploring the effectiveness of cybersecurity regulations in protecting digital assets in the UAE.",
          likes: 0,
          comments: [],
        },
        {
          title: "Role of Dubai Police in Counter-Terrorism",
          description:
            "Evaluating Dubai Police strategies in preventing and responding to terrorism threats.",
          likes: 0,
          comments: [],
        },
        {
          title: "Legal Challenges in Implementing Smart Surveillance Systems",
          description:
            "Studying privacy concerns and legal barriers to large-scale surveillance in Dubai.",
          likes: 0,
          comments: [],
        },
        {
          title: "Human Trafficking Laws in the UAE",
          description:
            "Analyzing Dubai's legal framework in combating human trafficking.",
          likes: 0,
          comments: [],
        },
        {
          title: "Forensic Evidence and UAE Court Cases",
          description:
            "Understanding how forensic science influences criminal justice decisions.",
          likes: 0,
          comments: [],
        },
        {
          title: "AI in Criminal Justice Systems",
          description:
            "Exploring the integration of AI to assist legal processes and case evaluations.",
          likes: 0,
          comments: [],
        },
        {
          title: "Social Media and Crime Reporting",
          description:
            "Investigating how social media platforms contribute to reporting crimes and ensuring transparency.",
          likes: 0,
          comments: [],
        },
        {
          title: "Legal Ramifications of Digital Policing",
          description:
            "Assessing how digital policing tools are regulated by law in the UAE.",
          likes: 0,
          comments: [],
        },
        {
          title: "Terrorism Prevention Laws in the UAE",
          description:
            "Exploring the legal measures taken by the UAE to prevent terrorism and radicalization.",
          likes: 0,
          comments: [],
        },
      ],
    },
    {
      category: "Police Training & Operations",
      topics: [
        {
          title: "Effectiveness of Police Training Programs",
          description:
            "Assessing the efficiency of the Dubai Police Academy’s training methodologies.",
          likes: 0,
          comments: [],
        },
        {
          title: "Use of Virtual Reality in Law Enforcement Training",
          description:
            "Examining how VR simulations enhance police training programs.",
          likes: 0,
          comments: [],
        },
        {
          title: "Police Response Time and Crime Control",
          description:
            "Studying the impact of rapid response units on crime prevention.",
          likes: 0,
          comments: [],
        },
        {
          title: "Psychological Effects of Policing on Officers",
          description:
            "Exploring mental health challenges faced by police officers.",
          likes: 0,
          comments: [],
        },
        {
          title: "Women in Law Enforcement",
          description:
            "Analyzing the increasing role of female officers in Dubai Police.",
          likes: 0,
          comments: [],
        },
        {
          title: "Real-World Scenarios in Police Training",
          description:
            "Exploring how real-world scenarios improve decision-making skills during police training.",
          likes: 0,
          comments: [],
        },
        {
          title: "Police Stress Management Techniques",
          description:
            "Studying the methods to combat stress in law enforcement personnel.",
          likes: 0,
          comments: [],
        },
        {
          title: "Advanced Forensic Training for Police Officers",
          description:
            "Evaluating the effectiveness of specialized forensic training in crime-solving.",
          likes: 0,
          comments: [],
        },
        {
          title: "Crisis Management Training for Police",
          description:
            "Exploring how officers are trained to manage crisis situations effectively.",
          likes: 0,
          comments: [],
        },
        {
          title: "Technology Integration in Police Training",
          description:
            "Assessing the role of technology in modernizing police training programs.",
          likes: 0,
          comments: [],
        },
      ],
    },
    {
      category: "Technology & Innovation in Policing",
      topics: [
        {
          title: "Role of Artificial Intelligence in Predictive Policing",
          description:
            "Understanding how AI is used to predict and prevent crimes in Dubai.",
          likes: 0,
          comments: [],
        },
        {
          title: "Smart Patrol Cars and Public Safety",
          description:
            "Evaluating the effectiveness of AI-powered patrol cars in reducing crime rates.",
          likes: 0,
          comments: [],
        },
        {
          title: "Forensic Science Advancements in Dubai Police",
          description:
            "Exploring the latest forensic science techniques used in investigations.",
          likes: 0,
          comments: [],
        },
        {
          title: "Biometric Security and Policing",
          description:
            "Assessing the role of facial recognition and fingerprint analysis in law enforcement.",
          likes: 0,
          comments: [],
        },
        {
          title: "Use of Drones in Crime Surveillance",
          description: "Investigating how drones enhance policing operations.",
          likes: 0,
          comments: [],
        },
        {
          title: "AI in Crime Scene Analysis",
          description:
            "How artificial intelligence enhances crime scene investigations by analyzing patterns.",
          likes: 0,
          comments: [],
        },
        {
          title: "Cloud Computing for Policing",
          description:
            "Investigating how cloud storage and computing enhance police data management and collaboration.",
          likes: 0,
          comments: [],
        },
        {
          title: "Use of Augmented Reality in Police Operations",
          description:
            "Exploring the application of augmented reality in training and operational scenarios for law enforcement.",
          likes: 0,
          comments: [],
        },
        {
          title: "The Future of Autonomous Police Vehicles",
          description:
            "Evaluating how autonomous vehicles could revolutionize police patrols and surveillance.",
          likes: 0,
          comments: [],
        },
        {
          title: "Blockchain Technology in Law Enforcement",
          description:
            "Exploring how blockchain can be utilized for secure, transparent record keeping in law enforcement.",
          likes: 0,
          comments: [],
        },
      ],
    },
    {
      category: "Social & Ethical Issues",
      topics: [
        {
          title: "Human Rights in Policing: The UAE Perspective",
          description:
            "Examining the balance between security and human rights in law enforcement.",
          likes: 0,
          comments: [],
        },
        {
          title: "Public Perception of the Dubai Police Force",
          description:
            "Surveying how citizens view Dubai Police and their approach to crime control.",
          likes: 0,
          comments: [],
        },
        {
          title: "Ethical Concerns in Facial Recognition Technology",
          description:
            "Investigating the ethical challenges of using AI for facial recognition.",
          likes: 0,
          comments: [],
        },
        {
          title: "Racial Profiling and Law Enforcement",
          description:
            "Understanding the impact of profiling in police operations.",
          likes: 0,
          comments: [],
        },
        {
          title: "Social Media and Police Investigations",
          description:
            "Exploring the benefits and challenges of using social media in solving crimes.",
          likes: 0,
          comments: [],
        },
        {
          title: "Privacy Concerns with Police Surveillance",
          description:
            "Investigating how surveillance tools impact citizens' privacy rights.",
          likes: 0,
          comments: [],
        },
        {
          title: "Discrimination in Law Enforcement",
          description:
            "Exploring the risks of discrimination within law enforcement agencies.",
          likes: 0,
          comments: [],
        },
        {
          title: "Policing in the Age of Technology",
          description:
            "How emerging technologies challenge traditional police practices and ethical considerations.",
          likes: 0,
          comments: [],
        },
        {
          title: "Use of Force in Policing",
          description:
            "Analyzing the ethical implications of police use of force in different situations.",
          likes: 0,
          comments: [],
        },
        {
          title: "Public Accountability in Police Work",
          description:
            "Exploring methods for ensuring accountability and transparency within law enforcement agencies.",
          likes: 0,
          comments: [],
        },
      ],
    },
    {
      category: "Environmental & Traffic Safety",
      topics: [
        {
          title: "Impact of Air Pollution on Public Safety",
          description:
            "Exploring how pollution influences emergency response and public safety.",
          likes: 0,
          comments: [],
        },
        {
          title: "Traffic Law Enforcement Technologies",
          description:
            "Assessing the role of cameras and sensors in enforcing traffic laws in Dubai.",
          likes: 0,
          comments: [],
        },
        {
          title: "Environmentally Friendly Policing Operations",
          description:
            "Exploring the push for sustainability within law enforcement agencies.",
          likes: 0,
          comments: [],
        },
        {
          title: "Preventing Traffic Accidents through Smart Systems",
          description:
            "Studying how AI-driven traffic management systems prevent accidents.",
          likes: 0,
          comments: [],
        },
        {
          title: "Role of Dubai Police in Emergency Environmental Response",
          description:
            "Evaluating how Dubai Police handle environmental disasters and emergencies.",
          likes: 0,
          comments: [],
        },
      ],
    },
    {
      category: "Public Relations & Community Policing",
      topics: [
        {
          title: "Building Trust Between Police and Communities",
          description:
            "Strategies for improving relations between Dubai Police and diverse communities.",
          likes: 0,
          comments: [],
        },
        {
          title: "Effectiveness of Community Policing in Dubai",
          description:
            "Evaluating community engagement programs and their impact on public safety.",
          likes: 0,
          comments: [],
        },
        {
          title: "Public Relations Strategies for Police Forces",
          description:
            "Examining effective communication strategies for public-facing law enforcement agencies.",
          likes: 0,
          comments: [],
        },
        {
          title: "Role of Social Media in Community Policing",
          description:
            "Studying the influence of social media in bridging the gap between police and communities.",
          likes: 0,
          comments: [],
        },
        {
          title: "Building Public Support for Law Enforcement",
          description:
            "Exploring techniques for garnering public support for law enforcement policies.",
          likes: 0,
          comments: [],
        },
      ],
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newTopic, setNewTopic] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTopic({ ...newTopic, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New thesis topic submitted:", newTopic);
    setShowForm(false);
  };

  const handleLike = (topic) => {
    topic.likes += 1;
    setSelectedTopic({ ...topic });
  };

  const handleComment = (topic, comment) => {
    topic.comments.push(comment);
    setSelectedTopic({ ...topic });
  };

  return (
    <div className="thesis-topics-container">
      <h2 className="thesis-title">Thesis Topics - Dubai Police Academy</h2>

      {/* Search and Filter */}
      <input
        className="search-input"
        type="text"
        placeholder="Search topics..."
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
      <select
        className="category-select"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {topics.map((cat, idx) => (
          <option key={idx} value={cat.category}>
            {cat.category}
          </option>
        ))}
      </select>

      {/* Thesis Categories & Topics */}
      {!selectedTopic && !showForm && (
        <>
          {topics.map((category, index) => (
            <div key={index} className="category-section">
              {(!selectedCategory ||
                selectedCategory === category.category) && (
                <>
                  <h3 className="category-title">{category.category}</h3>
                  <ul className="topics-list">
                    {category.topics
                      .filter((topic) =>
                        topic.title.toLowerCase().includes(searchQuery)
                      )
                      .map((topic, idx) => (
                        <li
                          key={idx}
                          onClick={() => setSelectedTopic(topic)}
                          className="topic-item"
                        >
                          {topic.title}
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          <button className="new-topic-btn" onClick={() => setShowForm(true)}>
            Suggest a New Topic
          </button>
        </>
      )}

      {/* Topic Details */}
      {selectedTopic && (
        <div className="topic-details">
          <h3 className="topic-title">{selectedTopic.title}</h3>
          <p className="topic-description">{selectedTopic.description}</p>
          <p className="topic-likes">
            Likes: {selectedTopic.likes}{" "}
            <button
              className="like-btn"
              onClick={() => handleLike(selectedTopic)}
            >
              👍 Like
            </button>
          </p>
          <h4 className="comments-title">Comments:</h4>
          <ul className="comments-list">
            {selectedTopic.comments.map((c, i) => (
              <li key={i} className="comment-item">
                {c}
              </li>
            ))}
          </ul>
          <input
            className="comment-input"
            type="text"
            placeholder="Add a comment..."
            onKeyDown={(e) =>
              e.key === "Enter" && handleComment(selectedTopic, e.target.value)
            }
          />
          <button className="back-btn" onClick={() => setSelectedTopic(null)}>
            Back
          </button>
        </div>
      )}

      {/* New Topic Submission Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="new-topic-form">
          <input
            className="input-field"
            type="text"
            name="title"
            placeholder="Topic Title"
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            className="input-field"
            name="description"
            placeholder="Topic Description"
            onChange={handleChange}
            required
          />
          <br />
          <select
            className="input-field"
            name="category"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {topics.map((cat, idx) => (
              <option key={idx} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
          <br />
          <button className="submit-btn" type="submit">
            Submit Topic
          </button>
          <button
            className="cancel-btn"
            type="button"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ThesisTopics;
