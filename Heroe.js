export default class Heroe
{
    nombre;
    alias;
    vuela;
    humano;
    superPoder;
    herramientas;
    origenDeSuperpoderes;
    sobrevivirEnEspacioExterior;
    img;

    constructor(nombre,alias,vuela,humano,superPoder,herramientas,origenDeSuperpoderes,sobrevivirEnEspacioExterior,img)
    {
        this.img=img;
        this.nombre=nombre;
        this.alias=alias;
        this.vuela=vuela;
        this.humano=humano;
        this.superPoder=superPoder;
        this.herramientas=herramientas;
        this.origenDeSuperpoderes=origenDeSuperpoderes;
        this.sobrevivirEnEspacioExterior=sobrevivirEnEspacioExterior;
    }
}