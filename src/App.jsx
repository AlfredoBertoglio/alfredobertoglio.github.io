import { useContext } from "react";
import About from "./components/About/about";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/productList";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

const App = () => {

const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode;
return <div style={{ backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
    <Toggle/>
    <Intro />
    <About />
    <ProductList />
    <Contact />
    </div>;
};

export default App;