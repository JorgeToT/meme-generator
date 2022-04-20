import trollface from "./assets/img/troll-face.png";

function Header() {
  return (
    <header>
      <img src={trollface} alt="" />
      <h1 className="header--title">Meme Generator</h1>
    </header>
  );
}

export default Header;
