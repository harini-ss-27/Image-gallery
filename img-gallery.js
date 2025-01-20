import "./style.css"
import imgData from "./imgdata"
import Images from "./images"

function ImageGallery() {
    return (

        <div className="container">
            <div className="images">
                {imgData.map((data, index) => (
                    <Images key={index} image={data.image} title={data.title} />
                ))}
            </div>
        </div>
    )
}

export default ImageGallery