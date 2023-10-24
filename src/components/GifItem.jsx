import React from 'react'

/*GifItem() : Este componente cumple el proposito de retornar
las imagenes de acuerdo a lo que se escribio en la caja de texto,esta
se encuentra en el componente "AddCategory",donde luego la almacenamos en el hooks
del componente "GitExpertApp" => const [categories, setcategories] = useState(["One punch"]) 
en la propiedad categories, que es un arreglo, donde extraemos los elementos y las asignamos
a las propiedades de este componente key,title,url donde accedemos a ellas por medio de las desestructuracion.*/
export const GifItem = ({ title, url }) => {
  return (
    <div className="card" >
      <img src={url} alt={title} />
      <p>{title} </p>
    </div>
  )
}

