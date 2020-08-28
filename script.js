let square = document.getElementsByClassName('game__a');
let hp = 3;
const time = 1500

function getRandomInt() {
    return Math.floor(Math.random() * 14);

}
function mole() {
    let num = square[getRandomInt()];
    num.classList.add("active");
    let timeOut = setTimeout(function () { num.classList.remove("active") }, time);
    if (num.addEventListener('click', function () {
        time = 0;
        gameSE();
    })) { hp = hp; } else {
        hp--;
        gameSE();
    }

}


function gameSE() {
    if (hp > 0) {
        mole();
    } else {
        document.write('Проиграл, Братишка');
    }
}

gameSE();

