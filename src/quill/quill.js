import React, { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill' 
import 'react-quill/dist/quill.snow.css';

function QComponent() {
  const [value, setValue] = useState('');
  
  var quill = useRef(null);
  var input = useRef(createImageInput());
  
  useEffect(() => {
    input.current.addEventListener('change', async(event)=>{

      const formData = new FormData();
      formData.append('image', event.target.files[0]);

      await fetch('https://items.ggm.kr:8888/imageSave', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => quill.current.getEditor().insertEmbed(1, 'image',data.url))
      .catch(error => console.error('Error:', error));
      
    })
  }, []);

  function createImageInput(){
    var input = document.createElement('input')
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');    
      return input;
  }

  function setBold(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      const ops = quill.current.getEditor().getContents(index, length).ops;
      const hasBold = ops.some(op => op.attributes && op.attributes.bold);
    
      if (hasBold) {
        quill.current.getEditor().formatText(index, length, 'bold', false);
      } else {
        quill.current.getEditor().formatText(index, length, 'bold', true);
      }
    }
  }

  function setItalic(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      const ops = quill.current.getEditor().getContents(index, length).ops;
      const hasBold = ops.some(op => op.attributes && op.attributes.italic);
    
      if (hasBold) {
        quill.current.getEditor().formatText(index, length, 'italic', false);
      } else {
        quill.current.getEditor().formatText(index, length, 'italic', true);
      }
    }
  }
  
  function setUnderline(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      const ops = quill.current.getEditor().getContents(index, length).ops;
      const hasBold = ops.some(op => op.attributes && op.attributes.underline);
    
      if (hasBold) {
        quill.current.getEditor().formatText(index, length, 'underline', false);
      } else {
        quill.current.getEditor().formatText(index, length, 'underline', true);
      }
    }
  }

  function setStrike(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      const ops = quill.current.getEditor().getContents(index, length).ops;
      const hasBold = ops.some(op => op.attributes && op.attributes.strike);
    
      if (hasBold) {
        quill.current.getEditor().formatText(index, length, 'strike', false);
      } else {
        quill.current.getEditor().formatText(index, length, 'strike', true);
      }
    }
  }

  function setColor(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      quill.current.getEditor().formatText(index, length, 'color', 'black');
      
    }
  }

  function setBackground(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      quill.current.getEditor().formatText(index, length, 'background', 'black');
      
    }
  }

  function setFormatLine(direction){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      quill.current.getEditor().format('align', direction);
    }
  }

  function setLink(){
    const selection= quill.current.getEditor().getSelection();

    if (selection !== null) {
      const { index, length } = selection;
      const ops = quill.current.getEditor().getContents(index, length).ops;
      const hasBold = ops.some(op => op.attributes && op.attributes.link);
    
      console.log(ops,hasBold)
      if (hasBold) {
        quill.current.getEditor().formatText(index, length, 'link', false);
      } else {
        quill.current.getEditor().formatText(index, length, 'link', "https://www.naver.com");
      }
    }
  }
  
  function setCodeBlock(){
    const selection= quill.current.getEditor().getSelection();
    if(selection !== null){
      const {index, length}= selection;
    
      var hasCode = quill.current.getEditor().getFormat(index,length)['code-block']

      if(hasCode === undefined){
        quill.current.getEditor().formatLine(index, length, 'code-block', true);
      }
      else{
        quill.current.getEditor().formatLine(index, length, 'code-block', false);
      }
    }
  }

  function Undo(){
    quill.current.getEditor().history.undo();
  };

  function Redo(){
    quill.current.getEditor().history.redo();
  };

  function inputClick(){
    input.current.click();
  }

  return (
    <>
      <div>
        {value}
      </div>
      <div>
        <button onClick={setBold}><i className='bx bx-bold' ></i></button>
        <button onClick={setItalic}><i className='bx bx-italic' ></i></button>
        <button onClick={setUnderline}><i className='bx bx-underline' ></i></button>
        <button onClick={setStrike}><i className='bx bx-strikethrough'></i></button>
        <button onClick={setColor}><i className='bx bx-font-color' ></i></button>
        <button onClick={setBackground}><i className='bx bx-font-family'></i></button>
        <button onClick={()=>setFormatLine(false)}><i className='bx bx-align-left' ></i></button>
        <button onClick={()=>setFormatLine('center')}><i className='bx bx-align-middle' ></i></button>
        <button onClick={()=>setFormatLine('right')}><i className='bx bx-align-right' ></i></button>
        <button onClick={setLink}><i className='bx bx-link' ></i></button>
        <button onClick={Undo}><i className='bx bx-undo' ></i></button>
        <button onClick={Redo}><i className='bx bx-redo' ></i></button>
        <button onClick={setCodeBlock}><i className='bx bx-code' ></i></button>
        <button onClick={inputClick}><i className='bx bx-image-add'></i></button>

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={{
            toolbar: false,
            history: {
              delay: 2000,
              maxStack: 500,
              userOnly: true
            }
          }}


          ref = {quill}
        />
      </div>
    </>
  );
}

export default QComponent;