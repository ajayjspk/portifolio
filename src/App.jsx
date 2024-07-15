import { BrowserRouter,Route,Routes } from "react-router-dom";
import Terminal from "./components/Terminal";
import Home from './Home';
import Work from './components/Works';
import WorkDetails from "./components/WorkDetails";
const App=() =>{
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route index element={<Home />} />
          <Route path="/termi" element={<Terminal />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetails />} />
  
      </Routes>
    </BrowserRouter>
  )
}

export default App
