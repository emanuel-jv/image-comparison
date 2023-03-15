import { useState, useRef } from "react";
import DefaultImg from "../resources/img.jpg";
import "./style.css";

export const Images = ({ }) => {
  const ref = useRef();
  const [BaseImg, setBaseImg] = useState(DefaultImg);

  const handleBaseImg = () => {
    setBaseImg();
  };

  return (
    <form>
        <div className="center">
          <div className="left-sidebar">
            
              <input ref={ref} type="file" />
            
            
          </div>
        <div className="right-sidebar">
            
              <input ref={ref} type="file" />
          
        </div>
        


        </div>
        <div className="center">
          <button> Upload Images </button>
        </div>
    </form>
  );
};
