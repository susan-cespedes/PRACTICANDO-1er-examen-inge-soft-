import cambioMonedas from "./moneda";

describe ("cambio de monedas", () => {
    it ("devolver un vector vacio si el monto ingresado es 0", () => {
        expect (cambioMonedas (0)).toEqual([]);
    });
});