const fortuneBtn = document.querySelector(".buttons"),
fortuneText = document.querySelector(".fortunes")

let fortune = [{
"id": "Your fortune is Bad"}, {
"id": "Your fortune is Meh"},{
"id": "Your fortune is Good"
}]

function randomFortune () {
    for (i in fortune){console.log(fortune[i]);
    fortuneText.innerText = fortune[i].id;
}
}


fortuneBtn.addEventListener('click', randomFortune)