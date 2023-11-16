import './Hero.css'
import HeroPicture from '../../assets/hero.jpeg'

function Hero() {
    return (
        <div className="bodyHero">
            <img className='imgHero' src={HeroPicture}></img>
            <div className='textHero'>
                <h1 className='textHero1'>Do you like adventures?</h1>
                <h3 className='textHero2'>Discover the best events near you</h3>
            </div>

        </div>
    )
}

export default Hero;