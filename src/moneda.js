
function cambioMonedas(monto){
    let lista = [5,2,1];
    let cambio = [];
    lista.forEach((denominacion)=>{
        let cantidad=Math.floor(monto/denominacion);
        monto-=cantidad*denominacion;
        for (let i=0; i<cantidad; i++){
            cambio.push(denominacion);
        }
    })
    
        return cambio;
}
export default cambioMonedas;