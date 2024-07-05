// src/components/App.jsx
import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.css';

const Toolbar = ({ icon, onClick, text }) => {
  return (
    <div className="toolbar">
      <i className="fa fa-free-code-camp" />{text}<i className={icon} onClick={onClick} />
    </div>
  );
};

const Preview = ({ mdtext }) => {

  const renderer = new marked.Renderer();
  renderer.link = function (href, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(mdtext, { renderer: renderer })
      }}
      id="preview"
    />
  );
};


const MarkdownPreviwer = () => {
  const [mdtext, setMarkdown] = useState(placeholder);
  const [editMax, seteditMax] = useState(false);
  const [preMax, setPreMax] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const EditorMax = () => {
    seteditMax(!editMax);
  };

  const PreviewMax = () => {
    setPreMax(!preMax);
  };

  const classes = editMax
    ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
    : preMax
      ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
      : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

  return (
    <div id='markdownPreviwer'>
      <div className={classes[0]}>
        <Toolbar
          icon={classes[2]}
          onClick={EditorMax}
          text="Editor" />
        <textarea id="editor" onChange={handleChange} type="text" value={mdtext} />
      </div>
      <div className="converter" />
      <div className={classes[1]}>
        <Toolbar
          icon={classes[2]}
          onClick={PreviewMax}
          text="Previewer" />
        <Preview mdtext={mdtext} />
      </div>
    </div>
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
export default MarkdownPreviwer;
