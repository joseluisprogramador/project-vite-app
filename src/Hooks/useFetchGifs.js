import { useState , useEffect } from 'react'
import { GetGifs } from "../helpers/GetGifs"

/*useFetchGifs() : Este componente, cumple con el proposito de retornar un 
objeto, donde contendra un arreglo de objetos que contiene propiedades como
 el id,el title, la url y un valor booleano por defecto*/
export const useFetchGifs = (category) => {

    /*
    Se importa funcion useState de react y desestructuramos.
    "images" es un arreglo
    "setinputvalue" es una funcion 
    la variable images tiene como valor o estado inicial es un arreglo vacio => useState([])
    */
    const [images, setimages] = useState([])

    /*
    Se importa funcion useState de react y desestructuramos.
    "loading" es una variable
    "setinputvalue" es una funcion 
    la variable loading tiene como valor o estado inicial es un booleano => useState(true)
    */
    const [loading , setloading ] = useState(true)

    useEffect(() => {
        /*Obtenemos el arreglo de objetos con la funcion "GetGifs()", la cual realiza la solicitud a la API GHIPY" */
        GetGifs(category).then((Object) =>  {
         /*"setimages()" : Es una funcion que cumple con el proposito de cambiar el estado del hooks, es decir
         la propiedad images, que es un arreglo vacio, pasa a ser un arreglo con objetos.
            */
            setimages(Object)
         /*"setloading()" : Es una funcion que cumple con el proposito de cambiar el estado del hooks, es decir
          la propiedad loading, que es un booleano, pasa de true a false, es decir 
          se establece en false una vez que se haya agregado el nombre al formulario por medio
          de la caja de texto que se encuentra en el componente "AddCategory"
          */
            setloading(false)
        })
        
    }, [])
    
    return {
        images: images,
        isloading: loading
    }
}