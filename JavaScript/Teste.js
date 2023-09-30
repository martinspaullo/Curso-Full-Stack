function numeroPositivo(num){
    var resultado;
    if (num > 0){
        resultado = "Número Positivo";
    } else{
        resultado = "Número Negativo";
    }
    
    console.log(resultado);
    return resultado;
}

numeroPositivo(-2);
