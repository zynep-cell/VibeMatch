// 100 Kelimelik Dev Kelime Havuzu
const phraseDatabase = [
    // --- Günlük ve Havalı (1-20) ---
    { phrase: "Catch-22", meaning: "Çıkmaz döngü", hint: "I need experience to get a job, but a job to get experience. It's a Catch-22." },
    { phrase: "Out of the blue", meaning: "Aniden, beklenmedik", hint: "My old friend called me out of the blue after five years." },
    { phrase: "Bittersweet", meaning: "Hem acı hem tatlı", hint: "Graduating was bittersweet; happy to finish but sad to leave." },
    { phrase: "Serendipity", meaning: "Mutlu tesadüf", hint: "Finding my favorite book at a garage sale was pure serendipity." },
    { phrase: "Petrichor", meaning: "Yağmur sonrası toprak kokusu", hint: "The petrichor after the storm made the walk so peaceful." },
    { phrase: "Ethereal", meaning: "Dünya dışı güzellikte", hint: "The sunrise had an ethereal glow over the mountains." },
    { phrase: "Resilience", meaning: "Zorlukları aşma gücü", hint: "After the long shift, her resilience was truly inspiring." },
    { phrase: "Eloquent", meaning: "Etkili konuşan", hint: "The professor gave an eloquent lecture on holistic health." },
    { phrase: "Vibe Check", meaning: "Enerji kontrolü", hint: "Before we start the study session, let's do a vibe check." },
    { phrase: "In the long run", meaning: "Uzun vadede", hint: "Saving money seems hard, but it's worth it in the long run." },
    { phrase: "Back to square one", meaning: "En başa dönmek", hint: "The project failed, so we're back to square one." },
    { phrase: "Piece of cake", meaning: "Çok kolay", hint: "Don't worry, the nursing exam was a piece of cake." },
    { phrase: "Burn the midnight oil", meaning: "Gece geç saatlere kadar çalışmak", hint: "I had to burn the midnight oil to finish the NeuroVibe design." },
    { phrase: "Cut to the chase", meaning: "Sadede gelmek", hint: "Stop talking about the details and cut to the chase." },
    { phrase: "Break the ice", meaning: "Aradaki buzları eritmek", hint: "A small joke is a great way to break the ice in a new group." },
    { phrase: "Under the weather", meaning: "Halsiz/Hasta hissetmek", hint: "I'm feeling a bit under the weather, I need some rest." },
    { phrase: "On cloud nine", meaning: "Çok mutlu (havalarda)", hint: "She was on cloud nine after passing her clinical internship." },
    { phrase: "Spill the beans", meaning: "Ağzındaki baklayı çıkarmak", hint: "Come on, spill the beans! Tell us the secret." },
    { phrase: "Once in a blue moon", meaning: "Kırk yılda bir", hint: "I go to the gym once in a blue moon, but I want to change that." },
    { phrase: "Keep an eye on", meaning: "Göz kulak olmak", hint: "Could you keep an eye on my bag for a second?" },

    // --- Duygular ve Estetik (21-40) ---
    { phrase: "Luminous", meaning: "Işık saçan", hint: "The moon cast a luminous glow on the sea." },
    { phrase: "Mellifluous", meaning: "Bal damlayan (ses/müzik)", hint: "The violin produced a mellifluous sound." },
    { phrase: "Ephemeral", meaning: "Kısa ömürlü, geçici", hint: "Youth is ephemeral, so enjoy every moment." },
    { phrase: "Sempiternal", meaning: "Ebedi, sonsuz", hint: "The stars seem to have a sempiternal presence." },
    { phrase: "Ineffable", meaning: "Kelimelerle anlatılamaz", hint: "The beauty of the Grand Canyon was ineffable." },
    { phrase: "Hiraeth", meaning: "Geri dönülemeyen eve özlem", hint: "Watching old movies gives me a sense of hiraeth." },
    { phrase: "Vellichor", meaning: "Eski kitapçıların kokusu ve havası", hint: "I love the vellichor of the university library." },
    { phrase: "Sonder", meaning: "Herkesin karmaşık bir hayatı olduğunu fark etmek", hint: "Standing in the crowd, I had a moment of sonder." },
    { phrase: "Defenestration", meaning: "Birini pencereden atma eylemi", hint: "The king survived the defenestration of Prague." },
    { phrase: "Iridescent", meaning: "Gökkuşağı gibi renk değiştiren", hint: "The soap bubbles were iridescent in the sun." },
    { phrase: "Aurora", meaning: "Şafak vakti", hint: "We woke up early to catch the aurora." },
    { phrase: "Solitude", meaning: "Kendi isteğiyle yalnız kalma", hint: "I find great peace in my morning solitude." },
    { phrase: "Euphoria", meaning: "Büyük mutluluk/vecd", hint: "Winning the prize brought a wave of euphoria." },
    { phrase: "Halcyon", meaning: "Huzurlu ve sakin (günler)", hint: "I remember the halcyon days of my childhood." },
    { phrase: "Idyllic", meaning: "Kusursuz, masalsı", hint: "They lived in an idyllic cottage by the lake." },
    { phrase: "Labyrinthine", meaning: "Labirent gibi karmaşık", hint: "The old hospital had labyrinthine corridors." },
    { phrase: "Phosphenes", meaning: "Gözü ovunca görülen ışıklar", hint: "Closing my eyes tightly produced strange phosphenes." },
    { phrase: "Oblivion", meaning: "Unutulma/Yokluk hali", hint: "The ancient city faded into oblivion." },
    { phrase: "Zenith", meaning: "Zirve noktası", hint: "She reached the zenith of her career as a nurse." },
    { phrase: "Nadir", meaning: "En alt/çöküş noktası", hint: "The failure of the project was the nadir of his year." },

    // --- Hareket ve Eylem (41-60) ---
    { phrase: "Ambiguous", meaning: "Belirsiz, iki anlamlı", hint: "His answer was ambiguous; I wasn't sure what he meant." },
    { phrase: "Candid", meaning: "İçten, samimi", hint: "We had a candid conversation about our mental health." },
    { phrase: "Diligence", meaning: "Özen, gayret", hint: "Her diligence in studying led to high marks." },
    { phrase: "Frugal", meaning: "Tutumlu", hint: "Living a frugal life allowed them to save for travel." },
    { phrase: "Gregarious", meaning: "Sokulgan, sosyal", hint: "As a gregarious person, she loves hosting parties." },
    { phrase: "Hypothetical", meaning: "Varsayımsal", hint: "Let's consider a hypothetical situation for a moment." },
    { phrase: "Impromptu", meaning: "Hazırlıksız, doğaçlama", hint: "We gave an impromptu performance at the cafe." },
    { phrase: "Juxtapose", meaning: "Yan yana getirmek (karşılaştırmak için)", hint: "The artist juxtaposed light and shadow beautifully." },
    { phrase: "Kindle", meaning: "Ateşlemek/Uyandırmak", hint: "The teacher helped kindle a love of science in her students." },
    { phrase: "Lucid", meaning: "Berrak, anlaşılır", hint: "He gave a lucid explanation of the complex surgery." },
    { phrase: "Meticulous", meaning: "Titiz, kılı kırk yaran", hint: "Nursing requires meticulous attention to detail." },
    { phrase: "Novel", meaning: "Yeni, özgün (sıfat)", hint: "The researcher proposed a novel way to treat the virus." },
    { phrase: "Obscure", meaning: "Belirsiz, pek bilinmeyen", hint: "The movie was filled with obscure references." },
    { phrase: "Pragmatic", meaning: "Uygulamacı, gerçekçi", hint: "She took a pragmatic approach to solving the budget problem." },
    { phrase: "Quaint", meaning: "Antika, şirin ve değişik", hint: "The village was full of quaint little shops." },
    { phrase: "Retrospect", meaning: "Geçmişe bakıldığında", hint: "In retrospect, I should have started coding earlier." },
    { phrase: "Scrutinize", meaning: "Dikkatle incelemek", hint: "The nurse must scrutinize the patient's chart." },
    { phrase: "Tangible", meaning: "Somut, elle tutulur", hint: "The silence in the room was almost tangible." },
    { phrase: "Ubiquitous", meaning: "Her yerde bulunan", hint: "Mobile phones are ubiquitous in modern society." },
    { phrase: "Vivid", meaning: "Canlı, parlak", hint: "I have a vivid memory of our trip to Istanbul." },

    // --- Esenlik ve Zihin (61-80) ---
    { phrase: "Equanimity", meaning: "İç huzur, soğukkanlılık", hint: "She maintained her equanimity even during the crisis." },
    { phrase: "Forbearance", meaning: "Sabır, hoşgörü", hint: "His forbearance with the difficult customer was amazing." },
    { phrase: "Grit", meaning: "Azim, metanet", hint: "It takes true grit to complete a nursing degree." },
    { phrase: "Holistic", meaning: "Bütünsel", hint: "We need a holistic approach to patient care." },
    { phrase: "Introspection", meaning: "İç gözlem", hint: "After the breakup, he spent a lot of time in introspection." },
    { phrase: "Judicious", meaning: "Makul, yerinde karar veren", hint: "The judicious use of resources saved the hospital money." },
    { phrase: "Kinetic", meaning: "Hareketli", hint: "The city has a kinetic energy that never stops." },
    { phrase: "Lithe", meaning: "Esnek, kıvrak", hint: "The dancer's movements were lithe and graceful." },
    { phrase: "Mindfulness", meaning: "Farkındalık", hint: "Practicing mindfulness helps reduce daily stress." },
    { phrase: "Nurture", meaning: "Beslemek, büyütmek", hint: "It's important to nurture your creative side." },
    { phrase: "Optimism", meaning: "İyimserlik", hint: "His natural optimism kept the team motivated." },
    { phrase: "Pensive", meaning: "Dalgın, düşünceli", hint: "She looked pensive as she stared out the window." },
    { phrase: "Quell", meaning: "Yatıştırmak/Bastırmak", hint: "The nurse worked to quell the patient's fears." },
    { phrase: "Radiant", meaning: "Işıldayan", hint: "She looked radiant on her 22nd birthday." },
    { phrase: "Serene", meaning: "Huzurlu, dingin", hint: "The lake was so serene in the early morning." },
    { phrase: "Tranquility", meaning: "Sükunet", hint: "I seek tranquility away from the busy city streets." },
    { phrase: "Unwavering", meaning: "Sarsılmaz", hint: "Her unwavering support helped me finish the project." },
    { phrase: "Vibrant", meaning: "Canlı, heyecan dolu", hint: "Istanbul is a vibrant city with a rich history." },
    { phrase: "Whimsical", meaning: "Eksantrik, oyuncu", hint: "The room was decorated in a whimsical style." },
    { phrase: "Yearn", meaning: "Çok özlemek/Can atmak", hint: "Sometimes I yearn for the simplicity of childhood." },

    // --- Havalı Deyimler (81-100) ---
    { phrase: "The big picture", meaning: "Büyük resim", hint: "Don't get lost in details; look at the big picture." },
    { phrase: "Piece of mind", meaning: "İç huzuru", hint: "Meditation gives me real piece of mind." },
    { phrase: "Golden opportunity", meaning: "Altın fırsat", hint: "This internship is a golden opportunity for your career." },
    { phrase: "Keep your chin up", meaning: "Başını dik tut", hint: "Keep your chin up; things will get better soon." },
    { phrase: "Go the extra mile", meaning: "Fazladan çaba sarf etmek", hint: "He always goes the extra mile for his patients." },
    { phrase: "Call it a day", meaning: "Bugünlük bu kadar demek", hint: "We've been working for 10 hours, let's call it a day." },
    { phrase: "Under the radar", meaning: "Dikkat çekmeden", hint: "He tried to keep his new project under the radar." },
    { phrase: "Blessing in disguise", meaning: "Görünürde kötü ama aslında iyi olan şey", hint: "Losing that job was a blessing in disguise." },
    { phrase: "Break a leg", meaning: "İyi şanslar (sahne öncesi)", hint: "You'll be great in the presentation! Break a leg!" },
    { phrase: "Better late than never", meaning: "Geç olsun güç olmasın", hint: "I finally finished the book; better late than never." },
    { phrase: "Cut some slack", meaning: "Birine tolerans tanımak", hint: "He's new to the job, cut him some slack." },
    { phrase: "Get out of hand", meaning: "Kontrolden çıkmak", hint: "The party started to get out of hand, so we left." },
    { phrase: "Hang in there", meaning: "Dayan, vazgeçme", hint: "Hang in there! The weekend is almost here." },
    { phrase: "Last resort", meaning: "Son çare", hint: "Surgery should be used as a last resort." },
    { phrase: "Make a long story short", meaning: "Lafı uzatmamak gerekirse", hint: "To make a long story short, we moved to Istanbul." },
    { phrase: "No pain no gain", meaning: "Acı yoksa kazanç yok", hint: "Studying is hard, but no pain no gain." },
    { phrase: "On the fence", meaning: "Kararsız kalmak", hint: "I'm still on the fence about which hospital to choose." },
    { phrase: "Rule of thumb", meaning: "Pratik kural", hint: "As a rule of thumb, always double-check the pulse." },
    { phrase: "See eye to eye", meaning: "Aynı fikirde olmak", hint: "They don't always see eye to eye on politics." },
    { phrase: "Wrap your head around", meaning: "Bir şeyi kavramak/anlamak", hint: "I can't wrap my head around this complex code." }
];

// --- LOGIC: Tekrar Etmeyen Seçim ---

function setMood(color) {
    document.body.style.backgroundColor = color;
}

function toggleHint(index) {
    const hintDiv = document.getElementById(`hint-${index}`);
    hintDiv.style.display = hintDiv.style.display === 'block' ? 'none' : 'block';
}

function displayCards() {
    const container = document.getElementById('cards-container');
    
    // Daha önce kullanılan kelimeleri hafızadan çek
    let usedPhrases = JSON.parse(localStorage.getItem('usedPhrases') || '[]');
    
    // Eğer tüm kelimeler bittiyse havuzu sıfırla
    if (usedPhrases.length >= phraseDatabase.length - 5) {
        usedPhrases = [];
        localStorage.setItem('usedPhrases', JSON.stringify([]));
    }

    // Kullanılmayan kelimeleri filtrele
    const availablePhrases = phraseDatabase.filter(p => !usedPhrases.includes(p.phrase));
    
    // Rastgele 5 tane seç
    const daily = availablePhrases.sort(() => 0.5 - Math.random()).slice(0, 5);
    
    container.innerHTML = '';
    daily.forEach((item, index) => {
        container.innerHTML += `
            <div class="vibe-card">
                <div class="phrase-title">${item.phrase}</div>
                <div class="phrase-meaning">${item.meaning}</div>
                <textarea class="scenario-input" placeholder="Bu kelimeyi bugün nasıl hissettin?"></textarea>
                <input type="text" class="pin-link-input" placeholder="Pinterest / Görsel Linki (Opsiyonel)">
                <button class="hint-btn" style="margin-top:10px; cursor:pointer;" onclick="toggleHint(${index})">💡 İpucu</button>
                <div id="hint-${index}" class="hint-area">${item.hint}</div>
            </div>
        `;
    });

    // Seçilenleri "kullanıldı" olarak işaretle
    const dailyNames = daily.map(d => d.phrase);
    localStorage.setItem('currentDaily', JSON.stringify(dailyNames));
}

const completeBtn = document.getElementById('complete-btn');
const modal = document.getElementById('finish-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

completeBtn.addEventListener('click', () => {
    const scenarios = document.querySelectorAll('.scenario-input');
    const pins = document.querySelectorAll('.pin-link-input');
    const logs = JSON.parse(localStorage.getItem('vibeLogs') || '[]');
    const usedPhrases = JSON.parse(localStorage.getItem('usedPhrases') || '[]');
    const currentDaily = JSON.parse(localStorage.getItem('currentDaily') || '[]');
    
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
        // Kayıtları sakla
        logs.unshift(newEntry);
        localStorage.setItem('vibeLogs', JSON.stringify(logs));
        
        // Bu günün kelimelerini kalıcı olarak "kullanılmış" listesine ekle
        const updatedUsed = [...new Set([...usedPhrases, ...currentDaily])];
        localStorage.setItem('usedPhrases', JSON.stringify(updatedUsed));

        renderTimeline();
        
        document.getElementById('modal-text').innerHTML = "<strong>Harika!</strong> Yazdıkların Soul Log'a başarıyla eklendi. Şimdi defter ritüeline geçebilirsin.";
        modal.style.display = 'flex';
    } else {
        alert("Henüz bir şey yazmadın Kaptan!");
    }
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    window.location.reload();
});

function renderTimeline() {
    const timeline = document.getElementById('timeline-container');
    const logs = JSON.parse(localStorage.getItem('vibeLogs') || '[]');
    
    timeline.innerHTML = logs.map(log => `
        <div class="log-card">
            <small>${log.date}</small>
            ${log.data.map(item => `
                <p>• ${item.text}</p>
                ${item.pin ? `<a href="${item.pin}" target="_blank">🖼️ Görseli Gör</a>` : ''}
            `).join('')}
        </div>
    `).join('');
}

function clearLogs() {
    if(confirm("Tüm arşivi silmek istediğine emin misin?")) {
        localStorage.removeItem('vibeLogs');
        localStorage.removeItem('usedPhrases');
        renderTimeline();
    }
}

displayCards();
renderTimeline();
