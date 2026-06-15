// جلب عناصر واجهة المستخدم من صفحة الـ HTML
const welcomeScreen = document.getElementById('welcome-screen');
const surpriseScreen = document.getElementById('surprise-screen');
const openBtn = document.getElementById('open-btn');
const backBtn = document.getElementById('back-btn');

// الحدث الذي يشتغل فور الضغط على زر "افتحي الهدية"
openBtn.addEventListener('click', () => {
    // 1. إخفاء شاشة الترحيب وإظهار شاشة التهنئة لـ جنى
    welcomeScreen.classList.add('hidden');
    surpriseScreen.classList.remove('hidden');
    
    // 2. إطلاق تأثير الـ Confetti (القصاصات الملونة) بشكل مكثف جداً من 3 زوايا بنفس اللحظة
    
    // الانفجار الأول: من منتصف الشاشة ويندفع للأعلى وللأطراف
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // الانفجار الثاني: من الزاوية اليمنى السفلية ويندفع باتجاه اليسار والأعلى
    confetti({
        particleCount: 90,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 }
    });

    // الانفجار الثالث: من الزاوية اليسرى السفلية ويندفع باتجاه اليمين والأعلى
    confetti({
        particleCount: 90,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 }
    });
});

// الحدث الخاص بزر العودة (إذا أرادت إغلاق الرسالة والرجوع للبداية)
backBtn.addEventListener('click', () => {
    surpriseScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
});
