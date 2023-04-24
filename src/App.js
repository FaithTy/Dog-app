import DogsList from './components/DogsList'
import DogView from './components/DogView'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<DogsList/>} ></Route>
      <Route exact path="/:breedName/images/random" element={<DogView/>} ></Route>
    </Routes>
  )
}

export default App;
