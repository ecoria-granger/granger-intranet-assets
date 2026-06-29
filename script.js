(function() {
    var MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var DIAS_CORTOS = ['L','M','X','J','V','S','D'];

    var FERIADOS = {
        '2026-01-01': 'Año Nuevo',
        '2026-02-16': 'Carnaval',
        '2026-02-17': 'Carnaval',
        '2026-03-20': 'Día Nacional de la Memoria',
        '2026-04-02': 'Día del Veterano de Malvinas',
        '2026-04-03': 'Viernes Santo',
        '2026-05-01': 'Día del Trabajador',
        '2026-05-25': 'Día de la Revolución de Mayo',
        '2026-06-15': 'Paso a la Inmortalidad del Gral. Güemes',
        '2026-06-20': 'Día de la Bandera',
        '2026-07-09': 'Día de la Independencia',
        '2026-08-17': 'Paso a la Inmortalidad del Gral. San Martín',
        '2026-10-12': 'Día del Respeto a la Diversidad Cultural',
        '2026-11-20': 'Día de la Soberanía Nacional',
        '2026-12-08': 'Inmaculada Concepción de María',
        '2026-12-25': 'Navidad'
    };

    var hoy = new Date();
    var curYear = hoy.getFullYear();
    var curMonth = hoy.getMonth();

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function renderCal(year, month) {
        var titleEl = document.getElementById('ig-cal-title');
        var grid = document.getElementById('ig-cal-grid');
        var holidayDiv = document.getElementById('ig-cal-holidays');

        if (!titleEl || !grid || !holidayDiv) return;

        titleEl.textContent = MESES[month] + ' ' + year;
        grid.innerHTML = '';

        DIAS_CORTOS.forEach(function(d) {
            var el = document.createElement('div');
            el.className = 'ig-cal-dn';
            el.textContent = d;
            grid.appendChild(el);
        });

        var firstDay = new Date(year, month, 1).getDay();
        var firstDayMon = (firstDay === 0) ? 6 : firstDay - 1;
        var daysInMonth = new Date(year, month + 1, 0).getDate();

        for (var i = 0; i < firstDayMon; i++) {
            var empty = document.createElement('div');
            empty.className = 'ig-cal-d empty';
            empty.textContent = '.';
            grid.appendChild(empty);
        }

        var holidaysThisMonth = [];

        for (var day = 1; day <= daysInMonth; day++) {
            var el = document.createElement('div');
            var dateKey = year + '-' + pad(month + 1) + '-' + pad(day);
            var dayOfWeek = new Date(year, month, day).getDay();
            var isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
            var isHoliday = FERIADOS[dateKey];
            var isToday = (year === hoy.getFullYear() && month === hoy.getMonth() && day === hoy.getDate());

            if (isToday) {
                el.className = 'ig-cal-d today';
            } else if (isHoliday) {
                el.className = 'ig-cal-d holiday';
                holidaysThisMonth.push({ day: day, name: FERIADOS[dateKey] });
            } else if (isWeekend) {
                el.className = 'ig-cal-d weekend';
            } else {
                el.className = 'ig-cal-d';
            }
            el.textContent = day;
            grid.appendChild(el);
        }

        holidayDiv.innerHTML = '';
        if (holidaysThisMonth.length > 0) {
            holidaysThisMonth.forEach(function(h) {
                var row = document.createElement('div');
                row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:4px 0;font-size:11px;color:#3D3935;';
                row.innerHTML = '<span style="background:#faeeda;color:#BA7517;border-radius:4px;padding:2px 6px;font-weight:600;min-width:24px;text-align:center;">' + h.day + '</span>' + h.name;
                holidayDiv.appendChild(row);
            });
        } else {
            holidayDiv.innerHTML = '<span style="font-size:11px;color:#B4B2A9;">Sin feriados este mes</span>';
        }
    }

    window.igCalPrev = function() {
        curMonth--;
        if (curMonth < 0) { curMonth = 11; curYear--; }
        renderCal(curYear, curMonth);
    };

    window.igCalNext = function() {
        curMonth++;
        if (curMonth > 11) { curMonth = 0; curYear++; }
        renderCal(curYear, curMonth);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { renderCal(curYear, curMonth); });
    } else {
        renderCal(curYear, curMonth);
    }""
})();