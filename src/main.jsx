import React from 'react';
import ReactDOM from 'react-dom/client';
import { TitleSection } from './Titles';
import { Images } from './Images';
import './style.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <TitleSection title="Image Comparison" subtitle="WebApp"/>

        <Images/>
    </React.StrictMode>
);