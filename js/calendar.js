/* ======================================
   CALENDAR.JS - Logica Calendario Prenotazioni
   ====================================== */

function initCalendar() {
    const calendarEl = document.getElementById('booking-widget');
    if (!calendarEl) return;
    
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    
    let calendarHTML = `
        <div class="mb-6 flex justify-between items-center border-b pb-4">
            <h3 class="font-bold text-lg text-primary capitalize">${now.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
        </div>
        <div class="grid grid-cols-7 gap-2 text-center mb-2">
            <div class="text-xs text-gray-400 font-bold">L</div><div class="text-xs text-gray-400 font-bold">M</div><div class="text-xs text-gray-400 font-bold">M</div>
            <div class="text-xs text-gray-400 font-bold">G</div><div class="text-xs text-gray-400 font-bold">V</div><div class="text-xs text-gray-400 font-bold">S</div>
            <div class="text-xs text-gray-400 font-bold">D</div>
        </div>
        <div class="grid grid-cols-7 gap-2 text-center mb-6">
    `;
    
    // Simple grid filler
    calendarHTML += `<div></div><div></div>`; 
    for(let i=1; i<=daysInMonth; i++) {
        // Mock logic: weekends and past days disabled
        const isWeekend = (i + 2) % 7 === 6 || (i + 2) % 7 === 0; 
        const disabled = i < now.getDate() || isWeekend ? 'disabled text-gray-300 cursor-default' : 'hover:bg-main hover:text-primary font-bold text-secondary cursor-pointer';
        const onclick = disabled.includes('disabled') ? '' : `onclick="selectDate(this, ${i})"`;
        calendarHTML += `<div class="calendar-day w-10 h-10 flex items-center justify-center rounded-full transition ${disabled}" ${onclick}>${i}</div>`;
    }
    calendarHTML += `</div>
    <div id="time-selection" class="hidden pt-6 border-t border-gray-100 animate-fade-in">
        <p class="text-sm text-secondary mb-3 font-medium">Orari disponibili per il giorno selezionato:</p>
        <div class="grid grid-cols-3 gap-3">
            <div class="time-slot p-2 border rounded-lg text-center text-sm text-primary hover:bg-main cursor-pointer transition" onclick="selectTime(this)">09:00</div>
            <div class="time-slot p-2 border rounded-lg text-center text-sm text-primary hover:bg-main cursor-pointer transition" onclick="selectTime(this)">11:30</div>
            <div class="time-slot p-2 border rounded-lg text-center text-sm text-primary hover:bg-main cursor-pointer transition" onclick="selectTime(this)">16:00</div>
        </div>
        <div id="booking-form" class="hidden mt-6 bg-white border rounded-xl p-4 shadow-sm">
            <h4 class="text-primary font-semibold mb-3">Dati prenotazione</h4>
            <div class="grid md:grid-cols-2 gap-4">
                <input id="bf-name" type="text" placeholder="Nome e Cognome" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                <input id="bf-email" type="email" placeholder="Email" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                <input id="bf-phone" type="tel" placeholder="Telefono" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                <input id="bf-notes" type="text" placeholder="Note (opzionale)" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
            </div>
            <h4 class="text-primary font-semibold mt-5 mb-3">Pagamento (anteprima)</h4>
            <div class="grid md:grid-cols-3 gap-4">
                <input id="bf-card" type="text" placeholder="Numero Carta" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                <input id="bf-exp" type="text" placeholder="Scadenza (MM/YY)" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
                <input id="bf-cvc" type="text" placeholder="CVC" class="w-full p-3 border rounded-lg bg-white focus:outline-none focus:border-primary">
            </div>
            <button onclick="submitBookingPreview()" class="mt-5 w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-800 transition">Conferma Prenotazione (Demo)</button>
            <p id="bf-status" class="text-sm text-secondary mt-3"></p>
        </div>
    </div>`;
    
    calendarEl.innerHTML = calendarHTML;
}

function selectDate(el, day) {
    document.querySelectorAll('.calendar-day').forEach(d => {
        d.classList.remove('bg-primary', 'text-white', 'selected');
        if(!d.classList.contains('disabled')) d.classList.add('text-secondary');
    });
    el.classList.remove('text-secondary', 'hover:bg-main');
    el.classList.add('bg-primary', 'text-white', 'selected');
    document.getElementById('time-selection').classList.remove('hidden');
}

function selectTime(el) {
    document.querySelectorAll('.time-slot').forEach(t => t.classList.remove('bg-primary', 'text-white', 'border-primary'));
    el.classList.add('bg-primary', 'text-white', 'border-primary');
    document.getElementById('booking-form').classList.remove('hidden');
}

function submitBookingPreview() {
    const name = document.getElementById('bf-name').value.trim();
    const email = document.getElementById('bf-email').value.trim();
    const phone = document.getElementById('bf-phone').value.trim();
    const card = document.getElementById('bf-card').value.replace(/\s+/g,'');
    const exp = document.getElementById('bf-exp').value.trim();
    const cvc = document.getElementById('bf-cvc').value.trim();
    const status = document.getElementById('bf-status');
    if (!name || !email || !phone || !card || !exp || !cvc) {
        status.textContent = 'Per favore compila tutti i campi obbligatori.';
        status.style.color = '#b00020';
        return;
    }
    if (!/^[0-9]{13,19}$/.test(card)) {
        status.textContent = 'Numero carta non valido (solo cifre, 13-19).';
        status.style.color = '#b00020';
        return;
    }
    if (!/^[0-9]{2}\/[0-9]{2}$/.test(exp)) {
        status.textContent = 'Formato scadenza non valido (MM/YY).';
        status.style.color = '#b00020';
        return;
    }
    if (!/^[0-9]{3,4}$/.test(cvc)) {
        status.textContent = 'CVC non valido.';
        status.style.color = '#b00020';
        return;
    }
    status.textContent = 'Prenotazione registrata (demo). Nessun pagamento reale eseguito.';
    status.style.color = '#2d5540';
}
