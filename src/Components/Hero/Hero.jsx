import './Hero.css'
import HeroPicture from '../../assets/hero.jpeg'

function Hero (){
    return(
     <div className="bodyHero">
            <img src={HeroPicture}></img>
            <h1>Do you like adventures?</h1>
            <h3>Discover the best events near you</h3>
        
     </div>
    )
}

export default Hero;