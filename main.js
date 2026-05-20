const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let noScale = 1.0;

// --- "NO" BUTTON LOGIC ---
noBtn.addEventListener('click', () => {
    noScale -= 0.2; 

    if (noScale <= 0.1) {
        noBtn.style.transform = 'scale(0)';
        noBtn.style.opacity = '0';
        
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 200);
    } else {
        noBtn.style.transform = `scale(${noScale})`;
    }
});

// --- "YES" BUTTON LOGIC ---
yesBtn.addEventListener('click', () => {
     // Redirects the user to celebrate.html
     setTimeout(() => {
        window.location.href = "celebrate.html";
    }, 150);
});
