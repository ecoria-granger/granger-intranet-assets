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
    '01-08': ['Juan Pérez'],
    '01-22': ['Lucía Fernández'],

    // Febrero
    '02-14': ['Martín Gómez'],

    // Marzo
    '03-03': ['Ana Martínez'],
    '03-19': ['Carlos López', 'Sofía Ruiz'], // varios el mismo día

    // Abril
    '04-11': ['Laura Díaz'],

    // Mayo
    '05-27': ['Diego Morales'],

    // Junio
    '06-13': ['Caula Marcos'],

    // Julio
    '07-09': ['Coria Elias'],

    // Agosto
    '08-09': ['Camila Torres'],

    // Septiembre
    '09-21': ['Ricardo Ibáñez'],

    // Octubre
    '10-04': ['Patricia Núñez'],

    // Noviembre
    '11-13': ['Gonzalo Herrera'],

    // Diciembre
    '12-02': ['Marina Castro']

    // ⬆️ agregá acá los que falten, respetando el formato 'MM-DD': ['Nombre'],
};
