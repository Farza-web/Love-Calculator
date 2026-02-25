function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    let result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        result.innerHTML = "⚠️ Please enter both names!";
        return;
    }

    let score = 0;
    let combined = name1 + name2;

    for (let i = 0; i < combined.length; i++) {
        score += combined.charCodeAt(i);
    }

    let lovePercentage = score % 101;

    result.innerHTML = `${name1} ❤️ ${name2}<br><span class="percentage">${lovePercentage}%</span>`;

    changeBackground(lovePercentage);
    showHearts();
    showConfetti(lovePercentage);
}

function changeBackground(score) {
    if (score > 80) {
        document.body.style.background = "linear-gradient(135deg, #ff0844, #ffb199)";
    } else if (score > 50) {
        document.body.style.background = "linear-gradient(135deg, #f6d365, #fda085)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #a18cd1, #fbc2eb)";
    }
}

function showHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

function showConfetti(score) {
    if (score > 80) {
        alert("🎉 PERFECT MATCH! Wedding bells soon? 💍✨");
    }
}