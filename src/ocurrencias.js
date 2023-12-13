
function contarOcurrencias(cadena){
    let resultado = {}
    if (cadena.length > 0){
        let listaPalabras = cadena.split(" ");
        listaPalabras.forEach(palabra => {
            if (resultado [palabra]){
                resultado [palabra]+=1;
            }
            resultado [palabra]=1;
        })
    }
    return resultado;
}
export default contarOcurrencias;