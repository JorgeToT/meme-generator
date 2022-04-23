import React from "react";
import memeData from "./../memesData.js";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getImage() {
    const memesArray = memeData.data.memes;
    const memeUrl =
      memesArray[Math.floor(Math.random() * memesArray.length)].url;
    setMemeImage(memeUrl);
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
        <img src={memeImage} alt="" className="meme--image" />
      </div>
    </main>
  );
}

export default Meme;
