import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Paths from './cjs/paths.js';
import db from './db/db.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Paths age = {30} dbs = {db}/>
  </React.StrictMode>
);
