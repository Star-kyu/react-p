import './item.css'
import bookmark from '../img/bookmark.svg'

function Item() {
    return (
        <div id = "item">
          <div id = 'toolbar' >
            <div id = 'head'>
              <input type = 'text' placeholder='Filename' value = 'untitled'></input>
              <select>
                  <option value = "" selected = '' hidden = '' disabled = ''>File</option>
                  <option value = "new">New file</option>
                  <option value = "txt">Save as txt</option>
                  <option value = "pdf">Save as pdf</option>
              </select>
              <select>
                  <option value = "" selected = '' hidden = '' disabled = ''>Formet</option>
                  <option value = "h1">heading 1</option>
                  <option value = "h2">heading 2</option>
                  <option value = "h3">heading 3</option>
                  <option value = "h4">heading 4</option>
                  <option value = "h5">heading 5</option>
                  <option value = "h6">heading 6</option>
                  <option value = "p">Paragraph</option>
              </select>
              <select>
                  <option value = "" selected = '' hidden = '' disabled = ''>Fontsize</option>
                  <option value = "1">14px</option>
                  <option value = "2">16px</option>
                  <option value = "3">18px</option>
              </select>
              <div>
                <span>컬러</span>
                <input type = "color"></input>
              </div>
              <div>
                <span>Background</span>
                <input type = "color"></input>
              </div>
            </div>
            <div id = 'btn-toolvar'>
              <button><i class='bx bx-bold'></i></button>
            </div>
          </div>
        </div>
    );
  }

export default Item;
  