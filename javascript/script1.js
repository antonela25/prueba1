function calcularEnvio(){
    var clienteUbicacion=document.getElementById("ubicacion").value;
    var costoEnvio=0;
    if( clienteUbicacion=="San Nicolas"|| clienteUbicacion=="san nicolas"|| clienteUbicacion=="San nicolas"|| clienteUbicacion=="SAN NICOLAS") {
        costoEnvio=0;
    }else{ costoEnvio=800}

    document.getElementById("costo-envio").innerHTML= "$" + costoEnvio;
}