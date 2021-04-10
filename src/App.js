import React, { useState } from "react";
import "./style.css";
import ReactMarkdown from "react-markdown";
import Test2 from "./test.js";
export default function App() {
  const texts = `
# Heading


## Sub-heading


[google](https://www.google.com)
 

**My bolded text**
 
 ![alt text](image.jpg)

 > This is a blockquote
  <div>
    <p>My code block</p>
  </div>

 Ordered list
  1. First item
  2. Second item
  3. Third item 

  \`<div>inline code</div>\`

  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
 
 this is a good way\n\nhello dear
 
 `;

  const [text, setText] = useState(texts);

  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <textarea
        value={text}
        id="editor"
        onChange={handleChange}
        style={{ width: "100%", height: "200px" }}
      />
      <preview id="preview">
        <ReactMarkdown source={text} id="preview" />
      </preview>
    </div>
  );
}
