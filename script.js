// Veri Seti: Buraya kendi 200 kelimeni daha sonra ekleyebilirsin.
const phraseDatabase = [
    { phrase: "Bittersweet", meaning: "Hem acı hem tatlı", hint: "It was a bittersweet moment when..." },
    { phrase: "Out of the blue", meaning: "Aniden, hiç beklenmedik bir anda", hint: "Then, out of the blue, she called me." },
    { phrase: "Serendipity", meaning: "Mutlu tesadüf", hint: "Finding that book was pure serendipity." },
    { phrase: "In the long run", meaning: "Uzun vadede", hint: "It might be hard now, but in the long run..." },
    { phrase: "Catch-22", meaning: "İki ucu boklu değnek / Çıkmaz döngü", hint: "It’s a Catch-22 situation because..." },
    { phrase: "Petrichor", meaning: "Yağmur sonrası toprak kokusu", hint: "I love the smell of petrichor in the morning." },
    { phrase: "Eloquent", meaning: "Düzgün ve etkili konuşan", hint: "She gave a very eloquent speech." },
    { phrase: "Ethereal", meaning: "Dünya dışı güzellikte, narin", hint: "The sunset had an ethereal glow." },
    { phrase: "Vibe Check", meaning: "Enerji kontrolü", hint: "Let's do a vibe check before we start." },
    { phrase: "Resilience", meaning: "Zorluklara karşı dayanıklılık", hint: "Her resilience is truly inspiring." }
];

const container = document.getElementById('cards-container');
const completeBtn = document.getElementById('complete-btn');
const modal = document.getElementById('finish-modal');
const modalText = document.getElementById('modal-text');
const timelineContainer = document.getElementById('timeline-container');

// Arka plan rengini (Modu) değiştirir
function setMood(moodName, color) {
    document.body.style.backgroundColor = color;
}

// Havuzdan rastgele 5 kalıp seçer ve ekrana kartları basar
function displayCards() {
    const shuffled = [...phraseDatabase].sort(() => 0.5 - Math.random());
    const dailyPhrases = shuffled.slice(0, 5);
    
    container.innerHTML = '';
    dailyPhrases.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'vibe-card';
        card.innerHTML = `
            <div class="phrase-title">${item.phrase}</div>
            <div class="phrase-meaning">${item.meaning}</div>
            <textarea placeholder="Bu ifadeyi kendi hayatından bir anla birleştir..."></textarea>
            <button class="hint-btn" onclick="alert('İpucu: ${item.hint}')">✨ İpucu Al</button>
        `;
        container.appendChild(card);
    });
}

// Yazılanları yerel hafızaya kaydeder ve arşivi günceller
completeBtn.addEventListener('click', () => {
    const textareas = document.querySelectorAll('textarea');
    const logs = JSON.parse(localStorage.getItem('vibeLogs') || '[]');
    
    const newEntry = {
        date: new Date().toLocaleString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }),
        entries: []
    };

    textareas.forEach(area => {
        if(area.value.trim() !== "") {
            newEntry.entries.push(area.value);
        }
    });

    if(newEntry.entries.length > 0) {
        logs.unshift(newEntry); // Yeni kaydı listenin en başına koyar
        localStorage.setItem('vibeLogs', JSON.stringify(logs));
        renderTimeline();
    }

    modalText.innerHTML = `<strong>Ritüel Tamamlandı Kaptan!</strong><br><br>Şimdi Pinterest'e uç ve bu 5 senaryonun enerjisini yansıtan pinleri bulup fiziksel defterine aktar.`;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
});

// Arşivi (Zaman Tüneli) ekranda listeler
function renderTimeline() {
    const logs = JSON.parse(localStorage.getItem('vibeLogs') || '[]');
    timelineContainer.innerHTML = logs.map(log => `
        <div class="log-card">
            <small>${log.date}</small>
            ${log.entries.map(e => `<p>• ${e}</p>`).join('')}
        </div>
    `).join('');
}

function clearLogs() {
    if(confirm("Tüm arşivi silmek istediğine emin misin?")) {
        localStorage.removeItem('vibeLogs');
        renderTimeline();
    }
}

function closeModal() {
    modal.style.display = 'none';
}

// Uygulamayı başlat
displayCards();
renderTimeline();
