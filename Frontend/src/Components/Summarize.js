import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faCopy } from '@fortawesome/free-solid-svg-icons';

const Gemini = (props) => {
  const [summary, setSummary] = useState("");
  const [output, setOutput] = useState("");
  const [load, setload] = useState(false);

  const prompt = `
You are an expert content summarizer.

Task:
Summarize the given text in a clear, engaging way using a MIX of short paragraphs and bullet points.

Rules:
- Start with a short paragraph (2–3 lines) giving an overall idea of the text.
- Then write the main content in Arrow points.
- Each Arrow point should be clear, meaningful, and easy to understand.
- The summary must NOT be too short and NOT too long (keep a balanced length).
- Use simple English.
- Add a few relevant emojis to make it friendly and engaging (do not overuse).
- Do NOT change the original meaning of the text.
- Keep the tone professional, positive, and user-friendly.
- Make it attractive so users feel satisfied and want to revisit the website.
- Avoid unnecessary technical or complex words.
- space between the each line
- use emojis as much as possible but not more each pont contain atleast one emoji
Output format example:

✨ Summary:
[Short paragraph overview here…]

🔹 Key Points:
• Point 1 …
• Point 2 …
• Point 3 …
• Point 4 …

Now summarize the following text: 
`;

  const summarize = async () => {
    if (!summary.trim()) return;
    setload(true);
    const content = prompt + summary;
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}`, {
        content
      });
      setload(false);
      setOutput(response.data);
    } catch (error) {
      setload(false);
      console.log("Something went wrong : ", error.message);
      setOutput("Unable to generate summary at this moment. Please verify backend service API.");
    }
  };

  const handletext = (event) => {
    setSummary(event.target.value);
  };

  const copyOutput = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  const isDark = props.mode === 'dark';

  return (
    <div className={`ai-studio-wrapper ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <div className="container py-4">
        {/* Header */}
        <div className="ai-hero text-center mb-4">
          <span className="badge-sparkle mb-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="me-2" /> Powered by AI
          </span>
          <h2 className="display-6 fw-bold">TextSpark AI Summarizer</h2>
          <p className="ai-subtitle mx-auto text-muted">
            Paste your article, report, or text below and let AI condense it into key insights and actionable points.
          </p>
        </div>

        {/* AI Workspace Card */}
        <div className={`card glass-card ai-workspace-card p-4 mb-4 ${isDark ? 'card-dark' : 'card-light'}`}>
          <label className="form-label fw-bold mb-2 small text-uppercase tracking-wider">
            Input Content
          </label>
          <textarea
            className="form-control ai-input-textarea mb-3"
            onChange={handletext}
            rows="7"
            placeholder="Paste your text here to summarize..."
            value={summary}
          ></textarea>

          <div className="d-flex justify-content-center">
            <button onClick={summarize} disabled={load || !summary.trim()} className="ai-glow-btn">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="me-2" />
              {load ? 'Generating Summary...' : 'Generate AI Summary'}
            </button>
          </div>
        </div>

        {/* Loader Indicator */}
        {load && (
          <div className="d-flex flex-column align-items-center justify-content-center my-4 py-3">
            <Loader />
            <span className="mt-3 text-muted small fw-semibold">AI is analyzing and summarizing your text...</span>
          </div>
        )}

        {/* Output Section */}
        {output && (
          <div className={`card glass-card ai-output-card p-4 ${isDark ? 'card-dark' : 'card-light'}`}>
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
              <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-warning" />
                Generated AI Summary
              </h4>
              <button onClick={copyOutput} className="btn btn-outline-custom btn-sm">
                <FontAwesomeIcon icon={faCopy} className="me-1" /> Copy Summary
              </button>
            </div>
            <div className="ai-output-formatted">
              <pre className="output-pre">{output}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gemini;