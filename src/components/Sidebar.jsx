import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Sidebar = () => {
  const files = ['index.js', 'App.js', 'styles.css'];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Explorer</h3>
        <div className="search">
          <FiSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <ul className="file-list">
        {files.map((file, index) => (
          <li key={index} className="file-item">
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
