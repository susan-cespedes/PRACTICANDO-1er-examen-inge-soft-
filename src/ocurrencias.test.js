import contarOcurrencias from "./ocurrencias"

describe ("contar ocurrencias", ()=>{
    it ("contar la cantidad de ocurrencias cuando no hay ocurrencias", ()=>{
        expect (contarOcurrencias("")).toEqual({});
    });

    it ("contar la cantidad de ocurrencias de una palabra", ()=>{
        expect (contarOcurrencias("password")).toEqual({password:1});
    })
});