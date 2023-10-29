import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo bro: ['C','D','H','S'];
 * @param {Array<String>} tiposDeEspeciales Ejemplo bro: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo arreglo de cartas
 */



export const crearDeck = ( tiposDeCartas, tiposDeEspeciales ) => {

    if ( !tiposDeCartas ||  tiposDeCartas.length === 0  ) throw new Error('Tienes que poner el arreglo de cartas brou')
    if ( !tiposDeEspeciales ||  tiposDeEspeciales.length === 0  ) throw new Error('Tienes que poner el arreglo de cartas brou')


    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposDeEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}
