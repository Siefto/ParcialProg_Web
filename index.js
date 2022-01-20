function Guardar_contenido(){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    
    

    localStorage.setItem("NOMBRE", nombre);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("TELEFONO", telefono);
    

    document.location.href = "resultado.html";

    return;


}