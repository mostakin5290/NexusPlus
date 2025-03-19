import {BrowserRouter,Routes,Route} from "react-router";
import Dasboard from "./Components/DashBoard";
import Contact from "./Components/Contact";
import { Link } from "react-router";

export default function Main(){
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/C">Contact</Link>
                <Link to="/D">DashBoard</Link>
            </nav>
            <Routes>
                <Route path="/C" element={<Contact/>}></Route>
                <Route path="/D" element={<Dasboard/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}