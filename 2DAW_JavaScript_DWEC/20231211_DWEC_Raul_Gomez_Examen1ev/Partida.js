export class Partida {

    //CODIGO PARA COMPARACIONES 
    //1 - PIEDRA
    //2 - PAPEL
    //3 - TIJERA


    constructor(jugador) {
        //generamos num aleatorio entre 1 -3
        const num = Math.ceil(Math.random() * 3);

        this.jugador = jugador; // int
        this.maquina = num;
    }

    comprobarJugada(jugador, maquina) {

        //empate
        if (jugador == maquina)
            this.resultado = "empate"; //string
        else {
            //causistica juego
            switch (jugador) {
                case 1: //piedra pierde papel (2)
                    this.resultado = (maquina == 2) ? "pierde" : "gana";
                    break;
                case 2: //papel pierde tijera (3)
                    this.resultado = (maquina == 3) ? "pierde" : "gana";
                    break;
                case 3: //tijera pierde piedra(1)
                    this.resultado = (maquina == 1) ? "pierde" : "gana";
                    break;
                default:
                    alert("error de partida");
                    break;
            }
        }

    }

    msj_resultado() {
        let msj = new String();
        switch (this.resultado) {
            case "empate":
                msj = "Las fuerzas estan igualadas. Interesante combate"
                break;
            case "pierde":
                msj = "Wuac, wuac .. pierdes"
                break;
            case "gana":
                msj = "Poder infinito, victoria. "
                break;
            default:
                break;
        }
        return msj;
    }


    get resultado() {

    }
}