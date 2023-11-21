import "./Hero.css";
import HeroPicture from "../../assets/hero.jpeg";

function Hero() {
  return (
    <div className="bodyHero">
      <img className="imgHero" src={HeroPicture}></img>
      <div className="textHero">
        <h1 className="textHero1">Te gustan las aventuras?</h1>
        <h3 className="textHero2">Descubre los eventos que pasan cerca tuyo</h3>
      </div>
    </div>
  );
}

export default Hero;
