
// objeto constructor
function Libro(titulo, autor, anio_publicacion, genero){
    this.titulo = titulo
    this.autor = autor
    this.anio_publicacion = anio_publicacion
    this.genero = genero
    this.DevolverInformacion = function(){
        console.log(`Titulo: ${this.titulo}\nAutor: ${this.autor}\nAño de Publicacion: ${this.anio_publicacion}\nGenero: ${this.genero}`)
    }
}

const libro1 = new Libro('Primer Titulo', 'Primer Autor', 1111, 'Primer Genero')
const libro2 = new Libro('Segundo Titulo', 'Segundo Autor', 2222, 'Segundo Genero')
const libro3 = new Libro('Tercer Titulo', 'Tercer Autor', 3333, 'Tercer Genero')

arreglo = [libro1, libro2, libro3]

function BuscarLibroPorAutor(nombre_autor){
    let nuevo_arreglo = arreglo.filter(arreglo => arreglo.autor == nombre_autor)
    return nuevo_arreglo
}
