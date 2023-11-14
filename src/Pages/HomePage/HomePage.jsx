import './HomePage.css'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Catalog from '../../Components/Catalog/Catalog'

function HomePage (){
    return (
        <div>
            <Header/>
            <Hero/>
            <Catalog/>
        </div>
    )
}
export default HomePage;