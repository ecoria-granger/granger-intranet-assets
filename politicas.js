function igToggle(header) {
    var content = header.nextElementSibling;
    var arrow = header.querySelector('.ig-pol-arrow');
    var isOpen = content.classList.contains('open');

    // Cerrar todos
    document.querySelectorAll('.ig-pol-body-content').forEach(function(el) {
        el.classList.remove('open');
    });
    document.querySelectorAll('.ig-pol-arrow').forEach(function(el) {
        el.classList.remove('open');
    });

    // Abrir el clickeado si estaba cerrado
    if (!isOpen) {
        content.classList.add('open');
        arrow.classList.add('open');
    }
}