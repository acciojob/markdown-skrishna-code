import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor({ markdown, setMarkdown }) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="editor">
      <div className="input-section">
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleChange}
          placeholder="Write your Markdown here..."
        />
      </div>

      <div className="preview-section">
        {preview === "" ? (
          <div className="loading">Start typing to see the preview...</div>
        ) : (
          <div className="preview">
            <ReactMarkdown>{preview}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarkdownEditor;
