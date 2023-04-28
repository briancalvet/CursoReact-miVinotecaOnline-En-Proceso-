
// la consulta a mis productos de mi Base de datos y se los envio a Item List.

import { useState , useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



const ItemListCointainer = () => {
   
    const [productos, setProductos] = useState([])
    const {category} = useParams()

    useEffect(() => {

            if (category) { //Consulto si me ingresaron un parametro en la url
              fetch('../json/productos.json')
                .then(response => response.json())
                .then(productos => {
                  const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                  setProductos(productosFiltrados)
        
                })
            } else {
              fetch('./json/productos.json')
                .then(response => response.json())
                .then(productos => {
                  const productosFiltrados = productos.filter(prod => prod.stock > 0)
                  setProductos(productosFiltrados)
        
                })
            }
        
          }, [category])
   
    return (
        /* Row para que todos mis productos aparezcan uno al lado de otro */ 
        <div className="row"> 
           
           {/* visualizar los productos ya que es el contenedor donde van a estar agregados los productos. */}
            {<ItemList productos={productos} />}
        </div>
    )
}

export default ItemListCointainer