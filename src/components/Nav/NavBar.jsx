//import 'Nav' from 'react-bootstrap/Nav'
import CartWidget from "../CartWidget";

function NavBar(){
    return(
        <nav className="navigation">
          <ul style={{stylo:"navbar-nav"}}>
             <li style={{stylo:"nav-item"}}>
              <a style={{}} href="#"> 
              Home </a> 
             </li> 
              <li> 
               <a href="#"> About US</a>
              </li>
              <li> 
               <a href="#"> Categorios</a>
              </li>
              <li> 
               <a href="#"> Productos  </a>
              </li>

            
             </ul>
             <CartWidget />
        </nav> 
    );
}

export default NavBar;