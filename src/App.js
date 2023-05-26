import Header  from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/TimeLine";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast"
import { useEffect, useState } from "react"; 
import Headerphone from "./components/Headerphone";

function App() {

  const[menuopen,setmenuopen] = useState(false);
  const [ratio,setratio] = useState(window.innerWidth/window.innerHeight)
  // console.log(menuopen);
  console.log(ratio);

  useEffect(()=>{
    const resizeratio = () =>{
      setratio(window.innerWidth/window.innerHeight);
    };

    window.addEventListener("resize",resizeratio);

    return() =>{
      window.removeEventListener("resize",resizeratio);
    };

  },[ratio]);


  return ratio < 2 ? (

   <>
    <Headerphone menuopen = {menuopen}  setmenuopen = {setmenuopen} />
    <Header menuopen = {menuopen} setmenuopen = {setmenuopen} />
    <Home ratio = {ratio} />
    <Work/>
    <TimeLine/>
    <Services/>
    <Contact/>
    <Footer/>
    <Toaster/>

  </>
  
  ) : <em id = "custommessage">Please Change the ratio to View!</em>
}

export default App;