const welcomeScreen = document.getElementById('welcome-screen');
const surpriseScreen = document.getElementById('surprise-screen');
const openBtn = document.getElementById('open-btn');
const backBtn = document.getElementById('back-btn');

// عند الضغط على فتح الهدية
openBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    surpriseScreen.classList.remove('hidden');
    
    // إفكتات قوية ومكثفة جداً (3 انفجارات متتالية وبأماكن مختلفة)
    
    // 1. انفجار رئيسي من المنتصف
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // 2. انفجار من الجانب الأيسر يندفع للأعلى
    confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 }
    });

    // 3. انفجار من الجانب الأيمن يندفع للأعلى
    confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 }
    });
});

// زر العودة
backBtn.addEventListener('click', () => {
    surpriseScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
});
