import {useState, useEffect} from 'react';
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

function ImageBoard() {
    const [images, setImages] = useState([])
    const [counter, setCounter] = useState([3])

    useEffect(() => {
        setImages ([
          {
              id:1,
              url: "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg",
              text: "Long Road to Nowhere",
          }, {
              id:2,
              url: "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg",
              text: "Long Boardwalk",
          }  
        ])
    }, []);


    function addImage(url,text) {
        const newImage = { id:counter, url ,text }
        setImages([...images, newImage]);
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Image Board</h1>
            <ImageForm addImage={addImage}/>
            <ImageList images={images}/>
        </div>
    )
}

export default ImageBoard