


function ImageForm() {
    
    
    return (
        <form>
            <h2>
                <label> Add An Image: </label>
            </h2>
            <input name="img-url" type="img-url" id="new-image-input" placeholder="Image URL"/>
            <input name="text" type="text" id="new-image-description" placeholder="Type Image Description"/>
            <button>Add</button>
        </form>
    )
}

export default ImageForm 