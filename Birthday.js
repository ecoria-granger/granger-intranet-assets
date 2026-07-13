/**
 * Cumpleaños de empleados - Granger Intranet
 * ------------------------------------------------
 * IMPORTANTE: cargar este archivo ANTES que calendario.js en tu vista de Odoo.
 *
 * Formato de las claves: 'MM-DD'
 *   - MM = mes con dos dígitos (01 a 12)
 *   - DD = día con dos dígitos (01 a 31)
 *
 * NO se pone el año → los cumpleaños se repiten automáticamente
 * todos los años, para siempre.
 *
 * Cada clave apunta a un array de nombres, así podés poner
 * varias personas que cumplen el mismo día.
 *
 * Para agregar/quitar: editá el objeto CUMPLES de abajo.
 */
window.CUMPLES = {
    // Enero
    '01-05': ['Kristal Pereyra Trimmel'],
    '01-06': ['Rodrigo Sabena'],
    '01-20': ['Jonatan Rosé'],

    // Febrero
    '02-02': ['Dana Sosa'],
    '02-03': ['Calvete Gabriel'],
    '02-22': ['Lobos Jose'],
    '02-26': ['Ailen Valli'],
    // Marzo
    '03-05': ['Julian Priotti'],

    // Abril
    '04-11': ['Laura Díaz'],

    // Mayo
    '05-12': ['Gonzalo Moruzze'],
    '05-19': ['Ignacio Bartizaghi'],
    '05-20': ['Fernando Imohff'],
    '05-27': ['Matias Navarro'],
    // Junio
    '06-13': ['Caula Marcos'],

    // Julio
    '07-09': ['Coria Elias'],
    '07-26': ['Yaz Sala'],
    '07-27': ['Sanitago Gutierrez'],
    // Agosto
    '08-01': ['Gregorio Pontiggia'],
    '08-14': ['Micaela Villareal'],
    '08-30': ['Lucia Griguoli'],

    // Septiembre
    '09-03': ['Maximiliano Longo'],
    '09-11': ['Maximiliano Flesia'],
    // Octubre
    '10-21': ['Varoli Yamila'],

    // Noviembre
    '11-08': ['Nerina Aglieri'],
    '11-10': ['Barrera Thiago'],

    // Diciembre
    '12-05': ['Melina Barretto']

    // ⬆️ agregá acá los que falten, respetando el formato 'MM-DD': ['Nombre'],
};
