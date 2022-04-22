import memeData from "./../memesData.js";

function Meme() {
  let memeUrl;
  function getImage() {
    const memesArray = memeData.data.memes;
    memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url;
    console.log(memeUrl);
  }
  return (
    <main>
      <p>{memeUrl}</p>
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
    </main>
  );
}

export default Meme;
