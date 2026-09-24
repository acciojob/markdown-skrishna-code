import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import "./styles.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="app">
      <MarkdownEditor
        markdown={markdown}
        setMarkdown={setMarkdown}
      />
    </div>
  );
}

export default App;
