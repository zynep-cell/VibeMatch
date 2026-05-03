const phraseDatabase = [
    { phrase: "Bittersweet", meaning: "Hem acı hem tatlı", hint: "It was a bittersweet moment when I graduated." },
    { phrase: "Out of the blue", meaning: "Aniden, beklenmedik", hint: "An old friend called me out of the blue." },
    { phrase: "Serendipity", meaning: "Mutlu tesadüf", hint: "Meeting him was pure serendipity." },
    { phrase: "In the long run", meaning: "Uzun vadede", hint: "Exercising is hard, but in the long run it's worth it." },
    { phrase: "Catch-22", meaning: "Çıkmaz döngü", hint: "I need experience for a job, but a job for experience. It's a Catch-22." },
    { phrase: "Petrichor", meaning: "Yağmur sonrası toprak kokusu", hint: "I love the smell of petrichor after a summer rain." },
    { phrase: "Eloquent", meaning: "Etkili konuşan", hint: "She gave an eloquent speech at the wedding." },
    { phrase: "Resilience", meaning: "Dayanıklılık", hint: "His resilience helped him overcome the crisis." },
    { phrase: "Vibe Check", meaning: "Enerji kontrolü", hint: "Wait, we need a vibe check before we go out!" },
    { phrase: "Ethereal", meaning: "Narin ve dünya dışı", hint: "The mountains had an ethereal beauty in the mist." }
];

function setMood(color) {
    document.body.style.backgroundColor = color;
}

function toggleHint(index) {
    const hintDiv = document.getElementById(`hint-${index}`);
    hintDiv.style.display = hintDiv.style.display === 'block' ? 'none' : 'block';
}

function displayCards() {
    const container = document.getElementById('cards-container');
    const shuffled = [...phraseDatabase].sort(() => 0.5 - Math.random());
    const daily = shuffled.slice(0, 5);
    
    container.innerHTML = '';
    daily.forEach((item, index) => {
        container.innerHTML += `
            <div class="vibe-card">
                <div class="phrase-title">${item.phrase}</div>
                <div class="phrase-meaning">${item.meaning}</div>
                <textarea class="scenario-input" placeholder="Senaryonu buraya yaz..."></textarea>
                <input type="text" class="pin-link-input" placeholder="Pinterest Pin Linki (Opsiyonel)">
                <button class="hint-btn" style="margin-top:10px" onclick="toggleHint(${index})">💡 İpucu</button>
                <div id="hint-${index}" class="hint-area">Örnek: ${item.hint}</div>
            </div>
        `;
    });
}

document.getElementById('complete-btn').addEventListener('click', () => {
    const scenarios = document.querySelectorAll('.scenario-input');
    const pins = document.querySelectorAll('.pin-link-input');
    const logs = JSON.parse(localStorage.getItem('vibeLogs') || '[]');
    
    const newEntry = {
        date: new Date().toLocaleString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }),
        data: []
    };

    scenarios.forEach((s, i) => {
        if(s.value.trim() !== "") {
            newEntry.data.push({ text: s.value, pin: pins[i].value });
        }
    });

    if(newEntry.data.length > 0) {
        logs.unshift(newEntry);
        localStorage.setItem('vibeLogs', JSON.stringify(logs));
        renderTimeline();
        
        document.getElementById('modal-text').innerHTML = "<strong>Harika!</strong> Yazdıkların Soul Log'a kaydedildi. Pinterest linklerini eklediysen hepsi orada seni bekliyor.";
        document.getElementById('finish-modal').classList.remove('hidden');
    } else {
        alert("En az bir senaryo yazmalısın.");
    }
});

function renderTimeline() {
    const timeline = document.getElementById('timeline-container');
    const logs = JSON.parse(localStorage.getItem('vibeLogs') || '[]');
    
    timeline.innerHTML = logs.map(log => `
        <div class="log-card">
            <small>${log.date}</small>
            ${log.data.map(item => `
                <p>• ${item.text}</p>
                ${item.pin ? `<a href="${item.pin}" target="_blank">🖼️ Vibe'ı Gör (Pin)</a>` : ''}
            `).join('')}
        </div>
    `).join('');
}

function clearLogs() {
    if(confirm("Tüm arşivi silmek istediğine emin misin?")) {
        localStorage.removeItem('vibeLogs');
        renderTimeline();
    }
}

function closeModal() { document.getElementById('finish-modal').classList.add('hidden'); }

displayCards();
renderTimeline();
