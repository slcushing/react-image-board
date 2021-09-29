 import { useState } from 'react';

function ImageForm(prop) {
    const [imageURL, setImageURL] = useState(""); //image url needs to be returned as a string
    const [imageCaption, setImageCaption] = useState(""); //caption is also a string


    function handleSubmit(event) {
        event.preventDefault();
        prop.addImage(imageURL, imageCaption);
        setImageURL('');
        setImageCaption('');
    }

    function handleNewURL(event) {
        setImageURL(event.target.value);
    }

    function handleNewCaption(event) {
        setImageCaption(event.target.value);
    }

    
    return (
        <form onSubmit={handleSubmit}> 
            <h2>
                <label> Add An Image: </label>
            </h2>
            <input name="url" type="url" id="new-image-input" value={imageURL} onChange={handleNewURL} placeholder="Image URL"/>
            <input name="text" type="text" id="new-image-description" value={imageCaption} onChange={handleNewCaption} placeholder="Image Description"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default ImageForm 