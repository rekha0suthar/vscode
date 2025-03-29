import React from 'react';
import { FiSave, FiPlay } from 'react-icons/fi';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar-btn"
        onClick={() => alert('Save functionality here')}
      >
        <FiSave />
        <span>Save</span>
      </button>
      <button
        className="toolbar-btn"
        onClick={() => alert('Run functionality here')}
      >
        <FiPlay />
        <span>Run</span>
      </button>
    </div>
  );
};

export default Toolbar;
