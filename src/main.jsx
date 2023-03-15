import React from 'react';
import ReactDOM from 'react-dom/client';
import { TitleSection } from './Titles';
import { Bttn } from './Section';
import { BottomBtn } from './BottomSection';
import './style.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <TitleSection title="Image Comparison" subtitle="WebApp"/>
        <Bttn/>
    </React.StrictMode>
);