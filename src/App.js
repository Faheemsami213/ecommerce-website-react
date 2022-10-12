import Home from './components/Home';
import Logo from './images/logo.png'
import { GrMenu } from "react-icons/gr";
import About from './components/About';
import Product from './components/Product';
import CustomRevs from './components/CustomRevs';
import Contact from './components/Contact';
function App() {
  return (
    <div className='box relative  px-2' >
        <div className=' h-16 w-full flex justify-around items-center'>
          <img src={Logo} alt="brand-logo" className=' ml-20'/>
            <GrMenu className='arro text-3xl cursor-pointer'/>
        </div>
      <Home />
      <About />
      <Product />
      <CustomRevs />
      <Contact />
    </div>
  );
}

export default App;
