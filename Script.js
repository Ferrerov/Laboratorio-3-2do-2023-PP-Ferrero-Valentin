import { handlerModificar, handlerEliminar, idMax} from "./Datos.js";
import {Aereo, Terrestre} from "./Entidades.js";
import { refrescarTabla } from "./TablaDinamica.js";

const $seccionTable = document.getElementById("seccionTable");
refrescarTabla($seccionTable);

document.getElementById("txtId").value = idMax + 1;
const selectElement = document.querySelector(".tipoVehiculo");
selectElement.addEventListener("change", (event) => {
    ocultarMostrarDiv();
});

function ocultarMostrarDiv()
{
    document.getElementById("txtId").value = parseInt(idMax) + 1;
    const tipoVehiculo = selectElement.value;
    var tipoAereo = document.getElementById("fieldAereo");
    var tipoTerrestre = document.getElementById("fieldTerrestre");
    var txtAltMax = document.getElementById("txtAltMax");
    var txtAutonomia = document.getElementById("txtAutonomia");
    var txtCantPue = document.getElementById("txtCantPue");
    var txtCantRue = document.getElementById("txtCantRue");

    if(tipoVehiculo == "Aereo")
    {
        tipoAereo.style.display = "block";
        tipoTerrestre.style.display = "none";
        txtAltMax.required = true;
        txtAutonomia.required = true;
        txtCantPue.required = false;
        txtCantRue.required = false;
    }
    else if(tipoVehiculo == "Terrestre")
    {
        tipoTerrestre.style.display = "block";
        tipoAereo.style.display = "none";
        txtCantPue.required = true;
        txtCantRue.required = true;
        txtAltMax.required = false;
        txtAutonomia.required = false;
    }
    else
    {
        tipoTerrestre.style.display = "none";
        tipoAereo.style.display = "none";
        txtCantPue.required = false;
        txtCantRue.required = false;
        txtAltMax.required = false;
        txtAutonomia.required = false;
    }
}

const $formulario = document.forms[0];

$formulario.addEventListener("submit", (e) =>
{
    e.preventDefault();

    const{txtModelo, txtAnoFab, txtVelMax, txtAltMax, txtAutonomia, txtCantPue, txtCantRue} = $formulario;

    if(selectElement.value === "Aereo")
    {
        const nuevoAereo = new Aereo(txtId.value, txtModelo.value, txtAnoFab.value, txtVelMax.value, txtAltMax.value, txtAutonomia.value);
        handlerModificar(nuevoAereo);
    }
    else if(selectElement.value === "Terrestre")
    {
        const nuevoTerrestre = new Terrestre(txtId.value, txtModelo.value, txtAnoFab.value, txtVelMax.value, txtCantPue.value, txtCantRue.value);
        handlerModificar(nuevoTerrestre);
    }
    refrescarTabla($seccionTable);
    $formulario.reset();
    ocultarMostrarDiv();
});

window.addEventListener("click", (e) =>
{
    if(e.target.matches("td"))
    {
        let trClickeada = e.target.parentElement;
        if(trClickeada.getElementsByTagName("td")[4].textContent != "N/A")
        {
            cambiarSeleccion("Aereo");
        }
        else
        {
            cambiarSeleccion("Terrestre");
        }
        ocultarMostrarDiv();
        document.getElementById("txtId").value = trClickeada.getElementsByTagName("td")[0].textContent;
        document.getElementById("txtModelo").value = trClickeada.getElementsByTagName("td")[1].textContent;
        document.getElementById("txtAnoFab").value = trClickeada.getElementsByTagName("td")[2].textContent;
        document.getElementById("txtVelMax").value = trClickeada.getElementsByTagName("td")[3].textContent;
        document.getElementById("txtAltMax").value = trClickeada.getElementsByTagName("td")[4].textContent;
        document.getElementById("txtAutonomia").value = trClickeada.getElementsByTagName("td")[5].textContent;
        document.getElementById("txtCantPue").value = trClickeada.getElementsByTagName("td")[6].textContent;
        document.getElementById("txtCantRue").value = trClickeada.getElementsByTagName("td")[7].textContent;
    }

});

function cambiarSeleccion(tipo)
{
    const $select = document.querySelector(".tipoVehiculo");
    const $opciones = Array.from($select.options);
    const opcionSeleccionar = $opciones.find(item => item.text === tipo);

    opcionSeleccionar.selected = true;

}

const $botonEliminar = document.getElementById("btnEliminar");
$botonEliminar.addEventListener("click", (e) =>
{
    e.preventDefault();

    const{txtId, txtModelo, txtAnoFab, txtVelMax, txtAltMax, txtAutonomia, txtCantPue, txtCantRue} = $formulario;

    if(selectElement.value === "Aereo")
    {
        const nuevoAereo = new Aereo(txtId.value, txtModelo.value, txtAnoFab.value, txtVelMax.value, txtAltMax.value, txtAutonomia.value);
        handlerEliminar(nuevoAereo);
    }
    else if(selectElement.value === "Terrestre")
    {
        const nuevoTerrestre = new Aereo(txtId.value, txtModelo.value, txtAnoFab.value, txtVelMax.value, txtCantPue.value, txtCantRue.value);
        handlerEliminar(nuevoTerrestre);
    }
    refrescarTabla($seccionTable);
    $formulario.reset();
    ocultarMostrarDiv();
});