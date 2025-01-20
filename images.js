function Images({ image, title }) {
    return (
        <div className="imagebox">
            <div>
                <img src={image}></img>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Images