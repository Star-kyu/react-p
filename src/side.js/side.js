import './side.css'
import {Link} from 'react-router-dom';
import home from '../img/home.svg'
import serch from '../img/serch.svg'
import file from '../img/file.svg'

function Side() {
    return ( 
        <div className='vh-100 wp-150 bg-white ov'>
            <div className="me wp-150 hp-100 d-flex flex-column">
                <div className='card icon hp-60 wp-60 m-auto mb-0'></div>
                <span className='mt-1 mb-1 fsp-10'>Startkyu_B</span>
            </div>
            <div className='wp-150 hp-40 bg-white'>
                <div className='border border-1 rounded-5 w-80 h-70 border shadow-sm m-auto row'>
                    <div className='col-4'>
                        <Link to={"/"}>
                            <svg className='ne w-80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                <path className="st01" d="M256.1,6.6C195.2,6.4,136.7,30.6,93.8,73.9C4.2,164.1,4.6,309.8,94.7,399.5l77.9,71.9c46,45.2,119.9,45.5,166.4,0.7l79.4-73.5c89.3-89.9,89.3-234.8,0-324.6C375.5,30.6,317.1,6.4,256.1,6.6z"/>
                                <path className="st04" d="M373.7,353l-78.5,72.7c-22.2,21.2-57.3,20.9-79.2-0.6l-76.9-71.3c-64.5-64.9-64.5-169.6,0-234.6c64-64.4,168.2-64.7,232.8-0.8c0.3,0.3,0.6,0.6,0.8,0.8l0,0C437.2,183.7,437.6,287.9,373.7,353z"/>
                                <path className="st04" d="M362.7,229.7v95.6c0,13.6-9.6,24.7-21.3,24.7H320c-11.8,0-21.3-11.1-21.3-24.7v-49.4c0-13.6-9.6-24.7-21.3-24.7h-42.7c-11.8,0-21.3,11.1-21.3,24.7v49.4c0,13.6-9.6,24.7-21.3,24.7h-21.3c-11.8,0-21.3-11.1-21.3-24.7v-95.6c0-16.2,6.9-31.3,18.3-40.6l64-51.4c14.6-11.7,34-11.7,48.6,0l64,51.4C355.8,198.4,362.7,213.6,362.7,229.7z"/>
                            </svg>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <Link to={"/file"}>
                            <svg className='ne w-80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                                <path className="st02" d="M429.4,96.6l-54.9-54.8c-21.3-21.4-50.2-33.4-80.4-33.3H163C100.2,8.6,49.3,59.4,49.3,121.9V390c0,62.6,50.9,113.4,113.6,113.5h186c62.8-0.1,113.6-50.9,113.6-113.4V176.7C462.7,146.7,450.7,117.7,429.4,96.6L429.4,96.6z"/>
                                <path className="st04" d="M352,448H160c-29.5,0-53.3-23.9-53.3-53.3V117.3c0-29.5,23.9-53.3,53.3-53.3h100.2c9.5,0,17.2,7.7,17.2,17.2v68.2c0,23.6,19.1,42.7,42.7,42.7h62.2c12.8,0,23.2,10.4,23.2,23.2v179.5C405.3,424.1,381.5,448,352,448z"/>
                                <path className="st04" d="M364.5,244.6c12.2,12.8,11.7,33-1.1,45.2l-76.5,72.8c-29.2,28.6-76.1,28.4-105-0.5l-32.5-28.9c-13.2-11.8-14.3-32-2.6-45.2c11.8-13.2,32-14.3,45.2-2.6l0,0l33.8,30.2c2.2,2.6,5.4,4.2,8.8,4.4c2.8,0,5.5-1.1,7.5-3.1l77.1-73.4C332.1,231.3,352.3,231.8,364.5,244.6L364.5,244.6z"/>
                            </svg>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <svg className='ne w-80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                            <path className="st03" d="M499,467.1L375.4,345c72.6-87.7,59.4-216.8-29.3-288.5S126.6-2.4,54,85.4S-5.4,302.2,83.3,373.9c76.4,61.7,186.3,61.7,262.7,0l123.7,122.3c8.3,7.9,21.3,7.6,29.3-0.5C506.8,487.7,506.8,475.1,499,467.1z"/>
                            <path className="st04" d="M68.6,210.6C68.6,133,133.7,70,214,70s145.4,63,145.4,140.6S294.3,351.3,214,351.3C133.8,351.2,68.7,288.3,68.6,210.6z"/>
                            <path className="st04" d="M256.6,128.7c-15.9,0.1-31.2,6.3-42.6,17.4c-11.4-11.1-26.7-17.3-42.6-17.4c-36.4,1.3-65,31.7-63.9,68.2c0,42.6,43.5,86.6,80,115.9c15.5,12.4,37.6,12.4,53.1,0c36.5-29.3,80-73.3,80-115.9C321.6,160.4,293.1,129.9,256.6,128.7z"/>
                        </svg>
                    </div>
                </div>
                <div className='border-top w-100 m-auto mt-3'>
                    <div className='w-100 fsp-8 ps-2 mt-2'>--- Category</div>             
                    <div className='w-100 fsp-10 ps-3'>... Mark Up</div>
                    <div className='w-100 fsp-10 ps-3'>... Style Sheet</div>
                    <div className='w-100 fsp-10 ps-3'>... Language</div>
                    <div className='w-100 fsp-10 ps-3'>... Library</div>
                    <div className='w-100 fsp-10 ps-3'>... Snippet</div>
                </div>    
            </div>
        </div>
    );
  }
  
  export default Side;