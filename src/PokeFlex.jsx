import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import '.PokeFlex.css'
import menu from './Menu'

const PokeFlex = () => {

    return (
        <Menu />
        <div className="PokeFlex">
           <img src={poke} />
           <img src={eevee} />
            <img src={poke} />
           <img src={eevee} />
            <img src={poke} />
           <img src={eevee} />
        </div>
        </div>

    )
}
 export default PokeFlex