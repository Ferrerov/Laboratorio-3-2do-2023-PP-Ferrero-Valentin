import {Aereo, Terrestre} from "./Entidades.js";
import { arrayObj } from "./Datos.js";

const arrayHead = ["id","modelo","anoFab","velMax","altMax","autonomia","cantPue","cantRue"];

export function generarTabla(arrayTodos) {
  const tabla = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');
const visibilidadDeColumna = {};

arrayHead.forEach(columna => {
  const th = document.createElement('th');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = true;

  checkbox.addEventListener('change', () => {
    visibilidadDeColumna[columna] = checkbox.checked;
      actualizarVisibilidadColumnas();
    });

    th.appendChild(checkbox);
    th.appendChild(document.createTextNode(columna));
    trHead.appendChild(th);
    visibilidadDeColumna[columna] = true;
});

thead.appendChild(trHead);
tabla.appendChild(thead);

arrayTodos.forEach(vehiculo => {
  const tr = document.createElement('tr');

  arrayHead.forEach(columna => {
    const td = document.createElement('td');
  
    if (columna === 'id' || columna === 'modelo' || columna === 'anoFab' || columna === 'velMax') {
      td.textContent = vehiculo[columna];
    } else if (visibilidadDeColumna[columna]) {
      if (columna === 'altMax' || columna === 'autonomia') {
      if (vehiculo instanceof Aereo) {
        td.textContent = vehiculo[columna];
      } else {
        td.textContent = 'N/A';
      }
    } else if (columna === 'cantPue' || columna === 'cantRue') {
      if (vehiculo instanceof Terrestre) {
        td.textContent = vehiculo[columna];
      } else {
        td.textContent = 'N/A';
      }
    } else {
      td.textContent = 'N/A';
    }
  }

    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});

tabla.appendChild(tbody);

function actualizarVisibilidadColumnas() {
  const ths = thead.querySelectorAll('th');
  const tds = tbody.querySelectorAll('tr');

  ths.forEach((th, index) => {
    const columna = arrayHead[index];
    const visible = visibilidadDeColumna[columna];

    th.style.display = 'table-cell';

    tds.forEach(row => {
      const td = row.querySelectorAll('td')[index];
      if (td) {
        td.style.display = visible ? 'table-cell' : 'none';
      }
    });
  });
}

return tabla;
}

  export function refrescarTabla(seccionTabla)
  {
    const arrayVehiculos = arrayObj();
    if(seccionTabla.hasChildNodes)
    {
        seccionTabla.replaceChildren(generarTabla(arrayVehiculos));
    }
    else
    {
        seccionTabla.appendChild(generarTabla(arrayVehiculos));
    }
  }


