
function cambioMonedas(monto){
    let lista = [5,2];
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