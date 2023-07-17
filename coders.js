class Coders{
    constructor(nombre, apellidos, email, telefono,img){
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.telefono = telefono
        this.img = img
    }

}
class Editar{
    añadirCoder(){
    
    }
    eliminarCoder(){

    }
    mensaje(){

    }
}
document.getElementById("añadir")
.addEventListener('submit', function(){
    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    alert(name,surname)
    
    console.log(name,surname)

})