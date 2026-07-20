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
    '02-16': ['Barreto Mateo'],
    '02-20': ['Adrian Urquia'],
    '02-22': ['Lobos Jose'],
    '02-26': ['Ailen Valli'],
    // Marzo
    '03-05': ['Julian Priotti'],
    '03-04': ['Joel Lechmann'],
    '03-27': ['Ezequiel Schechtel'],
    '03-29': ['Axel Wellig'],

    // Abril
     '04-17': ['Antonella Durando'],

    // Mayo
    '05-01': ['Ferraris Matias'],
    '05-08': ['Barabara Sejas'],
    '05-12': ['Gonzalo Moruzze'],
    '05-19': ['Ignacio Bartizaghi'],
    '05-20': ['Fernando Imohff'],
    '05-22': ['Aranda David'],
    '05-27': ['Matias Navarro'],
    '05-27': ['Landriel Alexis'],
    '05-30': ['Dylan Alvarez'],
    // Junio
    '06-13': ['Caula Marcos'],
    '06-15': ['Benjamis Bhal'],
    '06-19': ['Tolosa Guillermo'],

    // Julio
    '07-02': ['Francisco Monje'],
    '07-09': ['Coria Elias'],
    '07-26': ['Yaz Sala'],
    '07-27': ['Sanitago Gutierrez'],
    // Agosto
    '08-01': ['Gregorio Pontiggia'],
    '08-14': ['Micaela Villareal'],
    '08-15': ['Tomas Giuliani'],
    '08-20': ['Juan Matias Boetto'],
    '08-30': ['Lucia Griguoli'],

    // Septiembre
    '09-03': ['Maximiliano Longo'],
    '09-11': ['Maximiliano Flesia'],
    '09-14': ['Pablo Rucci'],
    '09-27': ['Maria Moyano'],
    // Octubre
    '10-21': ['Varoli Yamila'],
    '10-27': ['Jorge Wasinger'],

    // Noviembre
    '11-08': ['Nerina Aglieri'],
    '11-10': ['Barrera Thiago'],

    // Diciembre
    '12-05': ['Melina Barretto']

    // ⬆️ agregá acá los que falten, respetando el formato 'MM-DD': ['Nombre'],
};
