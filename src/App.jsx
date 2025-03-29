// App.js
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import StatusBar from './components/Statusbar';

const App = () => {
  const [code, setCode] = useState('// Start coding...');
  const [language, setLanguage] = useState('javascript');

  const onChange = (newValue) => {
    setCode(newValue);
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-area">
        <Toolbar />
        <div className="editor-wrapper">
          <Editor
            height="calc(100vh - 70px)" // allocate space for toolbar and status bar
            defaultLanguage={language}
            theme="vs-dark"
            value={code}
            options={editorOptions}
            onChange={onChange}
          />
        </div>
        <StatusBar />
      </div>
    </div>
  );
};

export default App;
