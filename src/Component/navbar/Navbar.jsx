import {Categorias} from "../Categorias/categorias"; 
import { BotonDarkMode } from "./btnDarkMode/btnDarkMode";



const Navbar = () => {
    return (
        <nav>
            {/* img/.... de esta manera se llama a las imagenes que se encuentran en la carpeta publica.  */} 
           <img className="Logo" src="img/Logo_Pagina.png" alt="" /> 
           <div className="Menu">
           <Categorias/>
           <BotonDarkMode />
           </div>
           
        
        </nav>

        
       
    )
}

export default Navbar;