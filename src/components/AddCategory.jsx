import { React, useState } from "react"

/*este componente, tiene el proposito de acceder a su propiedad 
"onNewCategory" desestructurandola y retornar el  formulario donde se encuentra una 
caja de texto, en la cual se escribiran datos.*/
export const AddCategory = ({ onNewCategory }) => {

    /*
    Se importa funcion useState de react y desestructuramos.
    "inputvalue" es una variable
    "setinputvalue" es una funcion 
    la variable inputvalue tiene como valor o estado inicial un string vacio => useState("")
    */
    const [inputvalue, Setinputvalue] = useState("")

    /*declaramos la funcion con nombre "Oneinputchange" */
    function Oneinputchange(event) {
        /*
        El "setinputvalue()" : es una funcion tiene el proposito de cambiar el estado del hooks, es decir
        la propiedad "inputvalue", pasa a ser una variable con dato, que un string 
        vacio como el useState lo indica useState("") ya tiene en memoria un dato 
        escrito por el input
        */
        Setinputvalue(event.target.value)

    }

    function onSubmit(event) {

        /*
        La función event.preventDefault() se utiliza para prevenir el 
        comportamiento predeterminado de un evento en JavaScript. 
         
        En este caso, la función onSubmit(event) se llama 
        cuando se envía un formulario al presionar Enter o
        hacer clic en un botón de envío. Al llamar a event.preventDefault(), 
        estás evitando que el formulario se envíe de la manera tradicional, 
        lo que significa que la página web no se recargará y no se realizará
        una solicitud HTTP al servidor para procesar el formulario.

        En resumen, event.preventDefault() se utiliza para controlar y
        personalizar cómo se maneja un evento en lugar de permitir su 
        comportamiento predeterminado. En el caso de un formulario, 
        se utiliza para evitar que se realice una solicitud de envío al 
        servidor y para permitir acciones personalizadas en su lugar.
        */
        event.preventDefault()
        /* "onNewCategory" : es una funcion del componente "AddCategory" 
        le pasamos el valor por parametro, que viene siendo el valor escrito en el input y
        almacenado en la variable inputvalue*/
        onNewCategory(inputvalue)
        /* "Setinputvalue()" : es una funcion que tiene el proposito de  cambiar el estado del hooks, es decir
        la propiedad "inputvalue",pasa a ser una variable vacia en este instante => useState(""), pero lo hace
        una vez que se haya enviado el cotenido del inputvalue a la funcion  "onNewCategory" */
        Setinputvalue("")

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                /*"type" : este atributo tiene el proposito de establecer que el input es una caja de texto */
                type="text"
                /*placeholder : este atributo tiene el proposito de mostrar un mensaje dentro de la caja de texto */
                placeholder="search gifs"
                /*value : este atributo tiene el proposito de establecer y mostrar el 
                valor actual, que se escribio en la caja de texto <input type = "texto"/>*/
                value={inputvalue}
                /*onChange : este atributo se ejecuta, cada vez que se modifica el 
                contenido en la caja de texto <input type = "texto"/> */
                onChange={(event) => Oneinputchange(event)}
            />
        </form>

    )
}


