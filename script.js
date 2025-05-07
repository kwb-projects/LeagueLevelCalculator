const XP_PER_LEVEL = 1000;
const XP_PER_GAME = 50;

document.getElementById('levelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const current = parseInt(document.getElementById('currentLevel').value, 10);
    const goal = parseInt(document.getElementById('goalLevel').value, 10);
    const resultDiv = document.getElementById('result');

    if (isNaN(current) || isNaN(goal) || current < 1 || goal < 1) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Please enter valid levels (1 or higher).';
        return;
    }
    if (goal <= current) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Goal level must be higher than current level.';
        return;
    }
    const xpNeeded = (goal - current) * XP_PER_LEVEL;
    const gamesNeeded = Math.ceil(xpNeeded / XP_PER_GAME);

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <strong>XP Needed:</strong> ${xpNeeded.toLocaleString()}<br>
        <strong>Games Needed:</strong> ${gamesNeeded.toLocaleString()}<br>
        <span style="font-size:0.95em;color:#e94f7c;">(Assuming 50 XP per game)</span>
    `;
}); 