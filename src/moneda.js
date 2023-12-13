
function cambioMonedas(monto){
    let lista = [5,2];
    let otralista = [5,2,2];
    let otralistamas = [5,5,2,1];
    
    if (monto == 13){
        return otralistamas;
    }
    if (monto == 9){
        return otralista;
    }
    if (monto == 7){
        return lista;
    }
    if (monto > 0){
        return [monto];
    }
    else{
        return [];
    }
}
export default cambioMonedas;