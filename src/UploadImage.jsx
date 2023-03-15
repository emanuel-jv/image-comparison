import {useState} from 'react';


export const UploadImage = ( {value}) => {
    const [img, setImg ] = useState( 10 );

    const handleImg = () => {
        setImg( img + 1)
    }

    return (
        <>
        <h1>{img}</h1>
        </>
    )
}