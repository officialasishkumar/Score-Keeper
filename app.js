const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

let isGameOver = false;
let winScore = 3;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

playTo.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resets();
});

p1.button.addEventListener('click', () => { updateScore(p1, p2) });
p2.button.addEventListener('click', () => { updateScore(p2, p1) });

reset.addEventListener('click', resets);

function resets() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p1.display.textContent = p2.display.textContent = 0;
        p1.score = p2.score = 0;
        p1.display.classList.remove('has-text-success', 'has-text-danger');
        p2.display.classList.remove('has-text-success', 'has-text-danger');
    }
}