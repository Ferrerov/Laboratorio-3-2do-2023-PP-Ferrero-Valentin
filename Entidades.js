class Vehiculo {
    id;
    modelo;
    anoFab;
    velMax;

    constructor(id, modelo, anoFab, velMax) {
        this.id = id;
        this.modelo = modelo;
        this.anoFab = anoFab;
        this.velMax = velMax;
    }

    toString() {
        return "ID: " + this.id + ", Modelo: " + this.modelo + ", Año de fabricacion: " + this.anoFab + ", Velocidad maxima: " + this.velMax;
    }
}

class Aereo extends Vehiculo {
    altMax;
    autonomia;

    constructor(id, modelo, anoFab, velMax, altMax, autonomia) {
        super(id, modelo, anoFab, velMax);
        this.altMax = altMax;
        this.autonomia = autonomia;
    }

    toString() {
        return super.toString(this.id, this.modelo, this.anoFab, this.velMax) + ", Altura maxima: " + this.altMax + ", Autonomia: " + this.autonomia;
    }
}

class Terrestre extends Vehiculo {
    cantPue;
    cantRue;

    constructor(id, modelo, anoFab, velMax, cantPue, cantRue) {
        super(id, modelo, anoFab, velMax);
        this.cantPue = cantPue;
        this.cantRue = cantRue;
    }

    toString() {
        return super.toString(this.id, this.nombre, this.apellido, this.edad) +", Titulo: " + this.titulo + ", Facultad: " + this.facultad + ", Año de Graduación: " + this.añoGraduacion;
    }
}

export {Vehiculo, Aereo, Terrestre};