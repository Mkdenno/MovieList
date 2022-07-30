import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
   <>
   <GlobalProvider>
   <Header/>
       <Routes>
      <Route exact path="/" element={<WatchList/>}/>
      <Route exact path="/watched" element={<Watched/>}/>
      <Route exact path="/add" element={<Add/>}/>
    </Routes>
   </GlobalProvider>

   </>
  )
}

export default App;
