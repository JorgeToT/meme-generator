import React from "react";
import memeData from "./../memesData.js";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setAllMemeImages(response.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const memeUrl = allMemeImages[randomNumber].url;
    setMeme((prevmeme) => ({ ...prevmeme, randomImg: memeUrl }));

    console.log(allMemeImages);
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          id=""
          className="form--input"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          id=""
          className="form--input"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} alt="" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
