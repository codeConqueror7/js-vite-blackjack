import { deck } from "..";

/**
 * Esta funcion lo que hace es tomar una carta
 * @returns {Array<String>}
 */

export const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
