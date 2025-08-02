import YosemiteSelfie from './assets/Yosemite Selfie Resized.jpg'

function Card(){
    return (
        <div className="card">
            {/*class is prtrected so use className */}
            <img className="card-image" alt="Profile Picture" src={YosemiteSelfie} ></img>
            <h2 className="card-title">KaartikDev</h2>
            <p className = 'card-text'>Studying CS and going on hikes! :)</p>
        </div>
    )
}

export default Card