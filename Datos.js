import {Aereo, Terrestre} from "./Entidades.js";
const arrayVehiculos = [{"id":14, "modelo":"Ferrari F100", "anoFab":1998, "velMax":400, "cantPue":2, "cantRue":4},{"id":51, "modelo":"DodgeViper", "anoFab":1991, "velMax":266, "cantPue":2, "cantRue":4},{"id":67, "modelo":"Boeing CH-47 Chinook","anoFab":1962, "velMax":302, "altMax":6, "autonomia":1200},{"id":666, "modelo":"Aprilia RSV 1000 R","anoFab":2004, "velMax":280, "cantPue":0, "cantRue":2},{"id":872, "modelo":"Boeing 747-400", "anoFab":1989,"velMax":988, "altMax":13, "autonomia":13450},{"id":742, "modelo":"Cessna CH-1 SkyhookR", "anoFab":1953,"velMax":174, "altMax":3, "autonomia":870}];

export var idMax = 0;
arrayToLocal(arrayVehiculos);

function localToArray()
{
    return JSON.parse(localStorage.getItem("vehiculos"));
}

function arrayToLocal(array)
{
    localStorage.setItem("vehiculos", JSON.stringify(array));
}

export function arrayObj()
{
    const array = localToArray();
    return array.map(obj => {
        if(obj.id > idMax) idMax = obj.id;
        if('altMax' in obj) 
        {
            return new Aereo(obj.id, obj.modelo, obj.anoFab, obj.velMax, obj.altMax, obj.autonomia);
        }
        else
        {
            return new Terrestre(obj.id, obj.modelo, obj.anoFab, obj.velMax, obj.cantPue, obj.cantRue);
        }
    });
}

export function handlerCargar(obj)
{
    const array = arrayObj();
    array.push(obj);
    arrayToLocal(array);
}

export function handlerEliminar(obj)
{
    var array = arrayObj();
    array = array.filter(objDelete =>
    objDelete.id != obj.id);
    arrayToLocal(array);
}

export function handlerModificar(obj)
{
    handlerEliminar(obj.id);
    handlerCargar(obj);
}

export function generarId()
{
    idMax += 1;
    return idMax;
}

