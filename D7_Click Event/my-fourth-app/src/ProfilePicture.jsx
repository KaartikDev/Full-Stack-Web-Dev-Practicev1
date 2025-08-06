function ProfilePicture () {

    const img_url = './src/assets/crown.jpg';
    const handleClick = (e) => e.target.style.display="none";

    return(
        
        <img src={img_url} onClick={(e) => handleClick(e)}></img>
    )


}

export default ProfilePicture