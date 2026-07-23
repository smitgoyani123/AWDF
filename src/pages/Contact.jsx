import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section className="contact-card">
      <h2>Contact Me</h2>
      <p>If you want to talk about a project, ask a question, or just say hello, leave a short message below.</p>

      <label className="field-label" htmlFor="message">
        Your Message
      </label>
      <textarea
        id="message"
        rows="5"
        className="message-input"
        placeholder="Write something here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="contact-meta">
        <button className="secondary-btn" onClick={() => setShowHelp(!showHelp)}>
          {showHelp ? "Hide Help" : "Show Help"}
        </button>
        <span>{message.length}/180 characters</span>
      </div>

      {showHelp && (
        <div className="helper-box">
          Tip: Keep your message short and clear so I can reply quickly.
        </div>
      )}

      <div className="preview-box">
        <strong>Live Preview:</strong> {message || "Your message will appear here as you type."}
      </div>
    </section>
  );
}

export default Contact;