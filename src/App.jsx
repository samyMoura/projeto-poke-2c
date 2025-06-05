import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
import Menu from './Mwnu'

const App = () => {

  return(
    <Routes>
    <Route index element ={<Menu/>} />
     <Route path = "/" element={<Home/>} />
     <Route path = "pokeflex"element={PokeFlex/>}
    </Route path = "pokegrid"element={PokeGrid/>}
    </Routes>
  )
}

export default App
