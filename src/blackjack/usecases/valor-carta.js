
/**
 * 
 * @param {<string>} carta aquí se pone la carta que seria la funcion pedirCarta que hace un pop y toma la carta que el pop saca y retorna  
 * @returns {string}
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
                              : valor * 1;
}
