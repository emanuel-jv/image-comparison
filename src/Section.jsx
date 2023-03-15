import {useState} from 'react';
import DefaultImg from '../resources/img.jpg';
import './style.css'

export const Bttn = ( {value}) =>{
    let pathImg = DefaultImg;

    const [img, setImg] = useState (pathImg);
    const handleImg = () => {
        setImg( () => "../resources/Solera_Logo.png")
    }
    
    
    return(
        <div className='center'>
            <div className="left-sidebar">
                <div>
                    <img src={img}/>
                </div>
                <button onClick={handleImg}>Upload Base Image</button>
                <p>Estamos intentando  izquierda</p>
            </div> 
            
            <div className="right-sidebar">
                <button >Upload Base Image</button>
                <p>Estamos intentando derecha</p>
            </div> 
        </div>       
    );
};