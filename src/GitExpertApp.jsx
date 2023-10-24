import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GitGrid } from "./components/GitGrid"

/*Acceder a un archivo de barril comando "ctrl + click derecho" */

/*este componente,retorna otros componentes 
que cumplen propositos en especifico en especifico*/

/*Generar la carpeta dist, comando : yarn build */
export function GitExpertApp() {

    /*
    Se importa funcion useState de react y desestructuramos.
    "categories" es una variable.
    "setcategories" es una funcion. 
    la variable categories tiene como valor o estado inicial,
     un arreglo de string y como elemento "One punch" => useState(["One punch"])
    */
    const [categories, setcategories] = useState(["One punch"])

    /*"onAddCategory()" : el proposito de esta funcion,es recibir los datos  
    del componente AddCategory, es decir el dato que se escribio en la caja 
    de texto y almacenado en el inputvalue*/
    function onAddCategory(value) {

        /*En esta condicion verificamos si el elemento existe en la lista, si existe 
        no lo agrega al arreglo y no retornamos nada */
        if (categories.includes(value)) {
            alert("El nombre ya existe en la lista")
            return
        }
        /*setcategories() : esta funcion tiene como proposito cambiar el estado 
        del hooks, es decir la propiedad "categories" que es un arreglo de string,
        pasa a tener mas de un elemento.En este caso, se agrega el valor pasado por
        paramatro de la funcion "onAddCategory()" (value) al arreglo y luego se agrega categories 
        que tiene por defecto un elemento.Una vez que se agregan valores se van acumulando en categories.*/
        setcategories([value, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/*importamos el componente AddCategory y una vez recibido el dato por parametro,
             en la propiedad "onNewCategory", lo agregamos a la funcion "onAddCategory()" */}
            < AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {
                /*Una vez almacenados los elemento del arreglo "categories", agregamos esos
                elementos, a las propiedades del componente GitGrid, las cuales son key,category */
                categories.map((category) => (
                    <GitGrid key={category} category={category} />
                ))
            }
        </> 
    )

}
