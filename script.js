// Veri Havuzu (Örnek 10 Kalıp)
const phraseDatabase = [
    { phrase: "Bittersweet", meaning: "Hem acı hem tatlı", hint: "It was a bittersweet moment when..." },
    { phrase: "Out of the blue", meaning: "Aniden, hiç beklenmedik bir anda", hint: "Then, out of the blue, she called me." },
    { phrase: "Serendipity", meaning: "Mutlu tesadüf", hint: "Finding that book was pure serendipity." },
    { phrase: "In the long run", meaning: "Uzun vadede", hint: "It might be hard now, but in the long run..." },
    { phrase: "Catch-22", meaning: "İki ucu boklu değnek / Çıkmaz döngü", hint: "It’s a Catch-22 situation because..." },
    { phrase: "Eloquence", meaning: "Güzel ve etkili konuşma yeteneği", hint: "She spoke with such eloquence that..." },
    { phrase: "Back to square one", meaning: "En başa dönmek", hint: "The deal failed, so we are back to square one." },
    { phrase: "Under the weather", meaning: "Biraz halsiz/hasta hissetmek", hint: "I'm feeling a bit under the weather today." },
    { phrase: "Burn the midnight oil", meaning: "Gece geç saatlere kadar çalışmak", hint: "I had to burn the midnight oil to finish the project." },
    { phrase: "Piece of cake", meaning: "Çok kolay", hint: "Don't worry, the exam was a piece of cake." }
];

const container = document.getElementById('cards-container');
const completeBtn = document.getElementById('complete-btn');
const modal = document.getElementById('finish-modal');
const modalText = document.getElementById('modal-text');

// Rastgele 5 kalıp seçme fonksiyonu
function getRandomPhrases(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Kartları oluşturma
function displayCards() {
    const dailyPhrases = getRandomPhrases(phraseDatabase, 5);
    dailyPhrases.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'vibe-card';
        card.innerHTML = `
            <div class="phrase-title">${item.phrase}</div>
            <div class="phrase-meaning">${item.meaning}</div>
            <textarea placeholder="Bu ifadeyi kendi hayatından bir senaryoya dök..."></textarea>
            <button class="hint-btn" onclick="alert('İpucu: ${item.hint}')">✨ İpucu Al</button>
        `;
        container.appendChild(card);
    });
}

completeBtn.addEventListener('click', () => {
    modalText.innerText = "Görev tamamlandı Kaptan. Şimdi Pinterest'e git, bu 5 senaryonun Vibe'ını yansıtan pinleri bul ve fiziksel defterine kaydet.";
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
}

// Uygulamayı başlat
displayCards();
