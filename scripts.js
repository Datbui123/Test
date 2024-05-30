function showHearts() {
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    const h2 = document.getElementById('id');
    if (h2.style.visibility === 'hidden') {
        h2.style.visibility = 'visible';
    } else {
            h2.style.visibility = 'hidden';
    }

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function wrong(){
    // alert("Sai!!!!!!!!!!!!!!!");

    let result = confirm("Sai!!!!!!!!!!!!!!!");
    if (result) {
        alert("Thử lại điiiiii!");
    } else {
        alert("Thử lại điiiiii!");
    }

}

function moveButton() {
    const button = document.querySelector('.button');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}