var Estudiante = [
    {
        codigo: "001",
        nombre: "Alejandro",
        nota: 4
    }, {
        codigo: "002",
        nombre: "Andres",
        nota: 3
    }, {
        codigo: "003",
        nombre: "Federico",
        nota: 5
    }, {
        codigo: "004",
        nombre: "Gonzalo",
        nota: 9
    }, {
        codigo: "005",
        nombre: "Matias",
        nota: 2
    }, {
        codigo: "006",
        nombre: "Cristian",
        nota: 8
    }
];
//Funcion para inicialiar EventListenener y Funciones
window.onload = function(){

    mostrar();
    actualizar_cod();

    document.getElementById("b_registrar").addEventListener("click", r_estudiante);
    document.getElementById("b_promedio").addEventListener("click", m_promedio);
    document.getElementById("b_mayor").addEventListener("click", m_mayor);
    document.getElementById("b_menor").addEventListener("click", m_menor);


};
//Funcion para incrementar en codigo
function actualizar_cod(){

    var codigo = document.getElementById("codigo");
    codigo.value = "";
    codigo.value ="00" +( Math.trunc(Estudiante[Estudiante.length-1].codigo) + 1);

    if(Math.trunc(Estudiante[Estudiante.length-1].codigo)+1 > 9){
        codigo.value ="0" +( Math.trunc(Estudiante[Estudiante.length-1].codigo) + 1);
    }
}
//Funcion para visualizar la tabla e actualizarla
function mostrar(){

    var tbody = document.getElementById("contenido-tabla");
    tbody.innerHTML = "";
    var tablaLlena = "";
    
    for(var i=0;i<Estudiante.length;i++){
        tablaLlena += "<tr><td>"+Estudiante[i].codigo+"</td><td>"+Estudiante[i].nombre+"</td><td>"+Estudiante[i].nota+"</td></tr>";
    }
    tbody.innerHTML = tablaLlena;
}
//Funcion para registra un estudiante nuevo
function r_estudiante() {
    event.preventDefault()

    var e_cod = document.getElementById("codigo");
    var e_nom = document.getElementById("nombre");
    var e_not = document.getElementById("nota");

    if(e_nom.checkValidity() && e_not.checkValidity()){
        
       
        var nuevoEstudiante = { codigo: (e_cod.value), nombre:(e_nom.value), nota: (parseInt(e_not.value)) };

        Estudiante.push(nuevoEstudiante);

        e_nom.value="";
        e_not.value="";
        actualizar_cod();
        mostrar();
       
    }else{
        alert("Por favor, complete los campos solicitados");
    }
}
//Funcion para Mostrar el promedio
function m_promedio() {

    var resultado = 0;
    var cont =  Estudiante.length;

    for(var i=0;i<Estudiante.length;i++){
       resultado+=Estudiante[i].nota;
    }

   alert("El promedio de las notas de los estudiantes registrados es:" + (resultado/cont).toFixed(2) );
}
//Funcion para Mostrar la nota mayor
function m_mayor() {

    var nota_m = Estudiante[0];

    for(var i=0;i<Estudiante.length;i++){

       if(nota_m.nota <= Estudiante[i].nota){
            nota_m = Estudiante[i];
       } 
    }
    alert("El estudiante con mayor nota es: "+ nota_m.nombre + " con " + nota_m.nota);
}
//Funcion para Mostrar la nota menor
function m_menor() {

    var nota_men = Estudiante[0];

    for(var i=0;i<Estudiante.length;i++){

       if(nota_men.nota >= Estudiante[i].nota){
            nota_men = Estudiante[i];
       } 
    } 
    alert("El estudiante con menor nota es: "+ nota_men.nombre + " con " + nota_men.nota);
}

