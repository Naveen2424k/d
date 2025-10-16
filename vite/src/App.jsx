import Task6 from "./Task6";
import {BrowserRouter as  Router ,Routes,Route} from "react-router-dom";
import NAv from "./Components/NAv";
import Content from "./Components/Content";
import Home from "./Components/Home"
const skills=["html","css","js","react"];


export default function App()
{
  return(
    <>
    <Router>
    <NAv/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/task" element={<Task6 name="naveen" dep="cse" skills={skills}/>}/>
      <Route path="/content" element={<Content/>}/>
    </Routes>
    </Router>
    </>
  );
}