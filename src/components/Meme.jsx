import React from "react";
import memeData from "./../memesData.js";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "Top",
    bottomText: "http://i.imgflip.com/1bij.jpg",
    randomImg: "Bottom",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeUrl = memesArray[randomNumber].url;
    setMeme((prevmeme) => ({ ...prevmeme, randomImg: memeUrl }));
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          name=""
          id=""
          className="form--input"
          placeholder="Top Text"
        />
        <input
          type="text"
          name=""
          id=""
          className="form--input"
          placeholder="Bottom Text"
        />
        <button className="form--button" onClick={getImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} alt="" className="meme--image" />
      </div>
    </main>
  );
}

export default Meme;
