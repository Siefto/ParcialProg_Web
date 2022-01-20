window.addEventListener('load', () =>{
  
    /*const params = (new URL(document.location)).searchParams;
    const nombre = params.get('nombre');
    const email = params.get('email');
    const telefono = params.get('telefono');*/

    const nombre = localStorage.getItem('NOMBRE');
    const email = localStorage.getItem('EMAIL');
    const telefono = localStorage.getItem('TELEFONO');
    

    console.log(nombre);

    document.getElementById('nombre_resultante').innerHTML = nombre;
    document.getElementById('email_resultante').innerHTML = email;
    document.getElementById('telefono_resultante').innerHTML = telefono;
    

})