/*
Que es una API :
API es la sigla de "Application Programming Interface" 
(Interfaz de Programación de Aplicaciones, en español).
Se trata de un conjunto de reglas y protocolos que permiten 
que diferentes aplicaciones y servicios se comuniquen entre sí. 
Las APIs definen cómo interactuar con un sistema de software 
o una plataforma, qué operaciones están disponibles y cómo se deben llevar a cabo.

Las APIs son esenciales en el mundo del desarrollo de software, ya que permiten 
a los programadores acceder a funcionalidades y datos de otros sistemas sin tener
que conocer los detalles internos de cómo funcionan esos sistemas.
*/
export async function GetGifs(category) {

    /*estructuramos la busqueda*/

    /*  
    "https://api.giphy.com/v1/gifs/search": Esta es la URL base de la API de Giphy que se 
    utiliza para realizar búsquedas de GIFs. La parte "/v1/gifs/search" indica la versión
    de la API y el tipo de búsqueda que se está realizando.
    
    "api.giphy.com" : Esto es el dominio o la dirección del servidor donde se encuentra 
    la API de Giphy. En otras palabras, es la ubicación en la web donde puedes enviar
    solicitudes para interactuar con la API de Giphy.

    v1: Esta parte de la URL se refiere a la versión de la API que estás utilizando. 
    Las API a menudo tienen múltiples versiones para garantizar la retrocompatibilidad
    y permitir actualizaciones sin romper las aplicaciones existentes. 
    "v1" generalmente significa "versión 1".

    gifs: Esto indica que estás accediendo a un recurso relacionado con GIFs 
    en la API de Giphy. Es probable que esta parte de la URL se utilice para 
    recuperar información o recursos relacionados con GIFs.

    search : Esta parte de la URL se utiliza para indicar que estás interesado en 
    realizar una búsqueda de GIFs en la API de Giphy. Cuando accedes a esta URL, probablemente
    podrás proporcionar parámetros de búsqueda para encontrar GIFs específicos
    basados en tus criterios de búsqueda.

    "api_key=NenWryLTNJnnz5Rn4OfNr40CuscD3NXL": Esto es un parámetro de consulta que proporciona
    la clave de API necesaria para autenticar la solicitud. La clave de API es única para el
    desarrollador que está haciendo la solicitud y se utiliza para rastrear el uso de la API
    y limitar el acceso.

    "q=${category}: Este es otro parámetro de consulta que especifica el término de búsqueda
    o categoría de GIFs que se desea recuperar. La variable ${category} es probablemente
    una variable en el código que se reemplazará por el valor real de la categoría o 
    término de búsqueda.

    limit=10: Este parámetro de consulta limita el número de resultados que se devolverán 
    en la respuesta de la API. En este caso, se establece en 10, lo que significa que se 
    obtendrán hasta 10 GIFs relacionados con la categoría especificada.

    */

    /*En esta línea se crea una variable url que almacena una URL de solicitud 
    a la API de Giphy. La URL se construye utilizando una plantilla de cadena 
    (encerrada en comillas graves ``) en la que ${category} es una interpolación
    de cadena que reemplaza el valor de category en la URL. */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NenWryLTNJnnz5Rn4OfNr40CuscD3NXL&q=${category}&limit=10`
    
    /*En esta línea, se utiliza la función fetch para realizar una solicitud 
    a la URL que se construyó previamente. La palabra clave await se utiliza 
    para esperar la respuesta de la solicitud, ya que fetch devuelve una promesa. 
    La respuesta se almacena en la variable respon. */
    const respon = await fetch(url)

    /*const { data } = await respon.json(): Aquí, se utiliza la función json() en la 
    respuesta para analizar la respuesta como un objeto JSON. Luego, se extrae el valor
    de la propiedad data del objeto JSON y se almacena en la variable data.
    Esto se hace mediante una desestructuración de objetos. */
    const { data } = await respon.json() /*Nota : data es una arreglo de objetos, donde 
    los objetos tiene propiedades como el id,title,url */

    /*En esta línea, se utiliza el método map() en la data para transformar los 
    datos en un nuevo arregloGifs. Se itera sobre cada objeto en data, y se crea un 
    nuevo objeto con propiedades como id, title, y url. Estas propiedades se extraen
    del objeto img` en cada iteración. */
    const Gifs = data?.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })) || []

    console.log(Gifs)
    return Gifs

}
