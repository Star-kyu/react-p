import React from 'react';
import ReactDOM from 'react-dom/client';
import Paths from './cjs/paths.js';
import db from './db/db.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Paths/>
  </React.StrictMode>
);
