const welcomeScreen = document.getElementById('welcome-screen');
const surpriseScreen = document.getElementById('surprise-screen');
const openBtn = document.getElementById('open-btn');
const backBtn = document.getElementById('back-btn');

// عند الضغط على فتح الهدية
openBtn.addEventListener('click', () => {
    // 1. التبديل بين الشاشات
    welcomeScreen.classList.add('hidden');
    surpriseScreen.classList.remove('hidden');
    
    // 2. إطلاق تأثير القصاصات الملونة الاحترافي (Confetti)
    // الإطلاق الأول
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });

    // إطلاق جانبي إضافي بعد ثانية لحركة أحلى
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 400);
});

// زر العودة لإغلاق الرسالة
backBtn.addEventListener('click', () => {
    surpriseScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
});
