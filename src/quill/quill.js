import React, { useEffect, useState, useRef } from 'react';
import  ReactQuill from 'react-quill' 
import 'react-quill/dist/quill.snow.css';

function QComponent() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: false
        }}
      />
    </div>
  );
}

export default QComponent;