const fortuneBtn = document.querySelector(".buttons"),
fortuneText = document.querySelector(".fortunes")


/* the code blocked out was my attempts prior to finding the correct function.  I am leaving it here, to remind myself of the headache I put myself to continue on to this journey */
/*const chance = () => { 
    const randomFrtOne = Math.floor(Math.random());
    const randomFrtTwo = Math.floor(Math.random());
    const randomFrtThree = Math.floor(Math.random());

    const randomFrt = [randomFrtOne, randomFrtTwo, randomFrtThree];

    for (let i = 0; i < fortune.length; i++) {
        const index = Math.floor(Math.random() * randomFortune.length);
        fortune[i] = randomFrt.splice(index, 1)[0];
    }
}

chance();*/
/*function randomFortune(fort) {
    for (i = 0; i < fortune.length; i++) {    fortune.sort((a, b) => 0.5 - Math.random());
    fortuneText.innerText = fortune.fort;
}
console.log(fortune)
};
/*(i in fortune) (console.log(fortune[i])) 
        fortuneText.innerText = fortune[i].id; */
    /*    const fortune = ["Your fortune is Bad", "Your fortune is Meh", "Your fortune is Good"]    */    
const randomFortune = () => {
   
   /* const fortuneGood = Math.floor(Math.random());
    const fortuneBad = Math.floor(Math.random());
    const fortuneMeh = Math.floor(Math.random());*/

    const randomFrt = ["Your fortune is Bad", "Your fortune is Meh", "Your fortune is Good", "Try Again, Sucka", "Somebody told me your luck is already bad", "You owe me money for doing magic on your fortune", "You are going to bump your head into some money, give me a grand", "I'm busy, bother someone else", "blah blah blah"];

    for (let a = 0; a < randomFrt.length; a++) {
        const index = Math.floor(Math.random() * randomFrt.length);
        randomFrt[a] = randomFrt.splice(index, 1)[0];
    }

    for (a in randomFrt){console.log(randomFrt[a]);
    fortuneText.innerText = randomFrt[a];
}
}



fortuneBtn.addEventListener('click', randomFortune) ;