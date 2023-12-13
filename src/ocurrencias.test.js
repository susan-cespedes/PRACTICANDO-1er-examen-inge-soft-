import contarOcurrencias from "./ocurrencias"

describe ("contar ocurrencias", ()=>{
    it ("contar la cantidad de ocurrencias cuando no hay ocurrencias", ()=>{
        expect (contarOcurrencias("")).toEqual({});
    });
});