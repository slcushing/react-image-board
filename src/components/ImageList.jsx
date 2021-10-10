
function ImageList(props) {
    
    const imagesHTML = props.images.map(image => {
        return (
            <li key={image.id}>
                <img src={image.url} alt=""/>
                <p>{image.text}</p>
            </li>
        )
    });
    
    return (
        <ul>
            {imagesHTML}
        </ul>
    )
}

export default ImageList


//<img src ="https://www.romanticasheville.com/sites/default/files/images/basic_page/blue_ridge_mountains_NC.jpg" alt="Blue Ridge Mountains"/>
//<p> Blue Ridge Mountains </p>