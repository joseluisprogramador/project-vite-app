
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../Hooks/useFetchGifs"

/*GitGrid() : Este componente, tiene el proposito de acceder a su propiedad "category" 
desestructurandola y esta contiene elementos que estan almacenados en el arreglo del 
hooks del componente "GitExpertApp" 
=> const [categories, setcategories] = useState(["One punch"]) 
*/
export const GitGrid = ({ category }) => {

    /*Importamos la funcion "useFetchGifs() la cual retorna un objeto y la desestructuramos
    en un objeto.
    la propiedad images : almacena el arreglo de objetos, que solicitamos a la API GYPHI.
    la propiedad isloading : tiene como valor por defecto, un booleano en true.
    */
    const { images, isloading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {/*Si loading es true, aparece el mensaje cargando.*/}
            { isloading &&  <h2>cargando...</h2> }
            <div className="card-grid">
                {
                    /*Obtenemos los objetos y extraemos sus propiedades "id","title","url"
                     y las asignamos a las propiedades del componente "GifItem" que son "key","title","url"*/
                    images?.map(image => (
                        <GifItem
                            key={image.id}
                            title={image.title}
                            url={image.url} />
                    ))
                }
            </div>
        </>
    )
}




/*
images.map({id,title,url} => (
    <GifItem
        key={ id}
        title={ title}
        url={ url } />
    ))
*/

/*
images.map(images => (
    <GifItem { ...images } />
))
 */