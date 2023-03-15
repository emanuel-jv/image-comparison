import {useState, useRef} from 'react';
import DefaultImg from '../resources/img.jpg';
import './style.css'

export const Bttn = ( {value}) =>{
    
    const ref = useRef()
    const [BaseImg, setBaseImg] = useState (DefaultImg);
    
    const handleClick = (e) => {
        ref.current.click()
        setBaseImg( () => "../resources/Solera_Logo.png")
    }

    const handleBaseImg = () => {
        setBaseImg( () => "../resources/Solera_Logo.png")
    }

    
    return(
        <div className='center'>
            <div className="left-sidebar">
                <div>
                    <img src={BaseImg}/>
                </div>
                <input ref={ref} type="file" />
                <button onClick={ handleBaseImg }> Upload Base Image </button>
                
                <p>Estamos intentando  izquierda</p>
            </div> 
            
            <div className="right-sidebar">
                <button >Upload Base Image</button>
                <p>Estamos intentando derecha</p>
            </div> 
        </div>       
    );
};